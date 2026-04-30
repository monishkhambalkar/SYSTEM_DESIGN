const BASE62 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function encode(num){
    let str = "";
    while(num > 0){
        str = BASE62[num % 62] + str;
        console.log(str);
        num = Math.floor(num / 62);
        console.log(num);
    }
    return str;
}

module.exports = {encode};