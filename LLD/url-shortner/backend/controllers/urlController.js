const db = require("../config/db");
const { encode } = require("../utils/base62");
const { generateHash } = require("../utils/hash");

exports.createShortUrl = (req, res) => {
  const { longUrl } = req.body;

  if (!longUrl) return res.status(400).send("URL required");

  const hash = generateHash(longUrl);

  // 1. Check duplicate
  const checkQuery = "SELECT * FROM urls WHERE url_hash = ?";
  db.query(checkQuery, [hash], (err, result) => {
    if (result.length > 0) {
      return res.send({
        shortUrl: `http://localhost:5000/${result[0].short_code}`
      });
    }

    // 2. Insert new
    const expiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const insertQuery = "INSERT INTO urls (long_url, url_hash, expiry_at) VALUES (?, ?, ?)";

    db.query(insertQuery, [longUrl, hash, expiry], (err, result) => {
      const id = result.insertId;

      const shortCode = encode(id);

      // 3. Update with short code
      const updateQuery = "UPDATE urls SET short_code = ? WHERE id = ?";
      db.query(updateQuery, [shortCode, id]);

      res.send({
        shortUrl: `http://localhost:5000/${shortCode}`
      });
    });
  });
};

exports.redirectUrl = (req, res) => {
  const code = req.params.code;

  const query = "SELECT * FROM urls WHERE short_code = ?";
  db.query(query, [code], (err, result) => {
    if (result.length === 0) {
      return res.status(404).send("Not found");
    }

    const url = result[0];

    // Expiry check
    if (new Date() > new Date(url.expiry_at)) {
      return res.send("Link expired");
    }

    // Increment clicks
    db.query("UPDATE urls SET clicks = clicks + 1 WHERE id = ?", [url.id]);

    res.redirect(url.long_url);
  });
};