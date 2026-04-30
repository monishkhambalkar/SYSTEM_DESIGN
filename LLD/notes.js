/*

OOPS : 

    realation with classes parent child relation

    inheritance :
        1. single inheritance
        2. multiple inheritance
        3. multilevel inheritance
        4. hierarchical inheritance
        5. hybrid inheritance
        6. prototypal inheritance => supported in js
        7. class inheritance => supported in js
        8. mixin inheritance => supported in js
        10. delegation inheritance => supported in js
        11. composition inheritance => supported in js
        12 . parasitic inheritance => supported in js
        13. prototypal delegation => supported in js

    polimorphism :
        1. compile time polimorphism => function overloading
        2. run time polimorphism => function overriding
        3. operator overloading => not supported in js
        4. method overloading => not supported in js
        5. method overriding => supported in js

    encapsulation : 
        1. data hiding
        2. abstraction
        3. access modifiers => public, private, protected
        4. getter and setter methods

    abstraction :
        1. abstract classes
        2. interfaces   
        3. abstract methods
        4. implementation hiding
        5. design by contract
        6. separation of concerns
        7. modularity
        8. information hiding
        9. encapsulation of behavior
        10. abstraction layers
        11. abstraction in OOP languages (e.g., Java, C++, Python)
        12. abstraction in functional programming (e.g., higher-order functions, closures)
        13. abstraction in software design patterns (e.g., MVC, MVVM, MVP)
        14. abstraction in API design (e.g., RESTful APIs, GraphQL APIs)
        15. abstraction in database design (e.g., normalization, denormalization)
        16. abstraction in user interface design (e.g., component-based architecture, responsive design)
        17. abstraction in system architecture (e.g., microservices, serverless architecture)
        18. abstraction in software development methodologies (e.g., Agile, DevOps) 

SOLID : 

    1. Single responsibility principle
    2. Open closed principle
    3. Liskov substitution principle
    4. Interface segregation principle
    5. Dependency inversion principle

DESIGN PATTERN :    

    1. Factory pattern
    2. Singleton pattern
    3. Observer pattern
    4. Decorator pattern
    5. Strategy pattern

API DESIGH : 

    1.MTHODS : GET, POST, PUT, DELETE

    2. STATUS CODE :
        1. 200 => OK
        2. 404 => Not Found
        3. 500 => Internal Server Error
        4. 400 => Bad Request
        5. 401 => Unauthorized
        6. 403 => Forbidden
        7. 201 => Created
        8. 204 => No Content
        9. 304 => Not Modified
        10. 302 => Found
        11. 301 => Moved Permanently
        12. 307 => Temporary Redirect
        13. 308 => Permanent Redirect
        14. 429 => Too Many Requests
        15. 503 => Service Unavailable
        16. 504 => Gateway Timeout
        17. 505 => HTTP Version Not Supported
        18. 511 => Network Authentication Required

    3. API DESIGN PRINCIPLE :
    
        1. REST => Representational State Transfer
        2. SOAP => Simple Object Access Protocol
        3. GraphQL => Query Language for APIs
        4. gRPC => Remote Procedure Call framework
        5. OpenAPI => Specification for building APIs

    4. API SECURITY :
    
        1. Authentication => Basic Auth, Token-based Auth, OAuth, JWT
        2. Authorization => Role-based Access Control, Attribute-based Access Control
        3. Data Validation => Input validation, Output validation
        4. Rate Limiting => Throttling, Quotas
        5. CORS => Cross-Origin Resource Sharing
        6. HTTPS => Secure communication
        7. API Gateway => Centralized entry point for APIs
        8. API Versioning => Managing changes to APIs over time
        9. API Documentation => Providing clear and comprehensive documentation for APIs

    5. API TESTING :
        1. Unit Testing => Testing individual components of the API
        2. Integration Testing => Testing the interaction between different components of the API
        3. End-to-End Testing => Testing the entire API workflow from start to finish
        4. Load Testing => Testing the performance of the API under heavy load
        5. Security Testing => Testing the security of the API against vulnerabilities and attacks
        6. Mocking and Stubbing => Simulating API responses for testing purposes
        7. API Testing Tools => Postman, Swagger, JMeter, SoapUI, RestAssured
    
    6. API MONITORING :
        1. Performance Monitoring => Tracking response times, throughput, and error rates
        2. Availability Monitoring => Ensuring the API is accessible and functioning properly
        3. Usage Monitoring => Analyzing API usage patterns and trends
        4. Error Monitoring => Detecting and diagnosing errors in the API
        5. Security Monitoring => Identifying and responding to security threats targeting the API
        6. API Analytics => Gathering insights on API usage, performance, and user behavior
        7. API Monitoring Tools => New Relic, Datadog, Prometheus, Grafana, Splunk 

    7. API DOCUMENTATION :
        1. API Reference Documentation => Detailed information about API endpoints, parameters, and responses
        2. API User Guides => Step-by-step instructions for using the API
        3. API Tutorials => Hands-on examples and walkthroughs for using the API
        4. API Change Logs => Documenting changes and updates to the API over time
        5. API Documentation Tools => Swagger, Redoc, Docusaurus, GitBook, Read the Docs
    
    8. API VERSIONING :
        1. URI Versioning => Including the version number in the API endpoint URL (e.g., /api/v1/resource)
        2. Query Parameter Versioning => Specifying the version number as a query parameter (e.g., /api/resource?version=1)
        3. Header Versioning => Including the version number in the request header (e.g., X-API-Version: 1)
        4. Media Type Versioning => Using custom media types to indicate the API version (e.g., application/vnd.api.v1+json)
        5. API Versioning Best Practices => Maintaining backward compatibility, providing clear documentation, and communicating changes effectively to API consumers

    9. API GATEWAY :
        1. API Gateway Functions => Request routing, composition, protocol translation, authentication and authorization, rate limiting, caching, logging and monitoring
        2. API Gateway Benefits => Simplified client interactions, improved security, enhanced performance, centralized management of APIs
        3. API Gateway Challenges => Single point of failure, increased latency, complexity in configuration and maintenance
        4. API Gateway Tools => Kong, Apigee, AWS API Gateway, NGINX, Tyk   
    
    10. API DESIGN BEST PRACTICES :
        1. Consistent and intuitive API design  
        2. Clear and comprehensive documentation
        3. Proper use of HTTP methods and status codes
        4. Versioning and backward compatibility
        5. Security considerations and best practices
        6. Performance optimization and scalability
        7. Error handling and meaningful error messages
        8. Testing and monitoring of APIs in production
        9. Providing SDKs and client libraries for easier integration
        10. Engaging with the developer community for feedback and improvements         

    11. RESPONSE STRUCTURE :
        1. Standardized response format (e.g., JSON, XML)       
        2. Consistent structure for success and error responses
        3. Inclusion of relevant metadata (e.g., pagination information, timestamps)
        4. Clear and descriptive error messages with appropriate status codes
        5. Support for internationalization and localization in responses
        6. Providing links to related resources in the response (HATEOAS)
        7. Allowing clients to specify the desired response format through content negotiation
        8. Implementing caching headers to optimize performance and reduce server load
        9. Ensuring that sensitive information is not included in responses for security reasons
        10. Providing examples of response payloads in API documentation for better understanding by developers     

    12. REQUEST STRUCTURE :
        1. Clear and consistent structure for request payloads
        2. Proper use of HTTP methods (GET, POST, PUT, DELETE) based on the action being performed
        3. Inclusion of necessary parameters and data in the request body or query string
        4. Support for validation and error handling for incoming requests
        5. Allowing clients to specify the desired request format through content negotiation
        6. Implementing authentication and authorization mechanisms for secure access to APIs
        7. Providing clear documentation on required and optional parameters for API endpoints
        8. Supporting pagination and filtering in requests for efficient data retrieval
        9. Ensuring that sensitive information is not included in requests for security reasons
        10. Providing examples of request payloads in API documentation for better understanding by developers  

UML Diagram : LLD :

    1. Class Diagram
        Represents the detailed static structure of a system.It shows classes, attributes, methods, and relationships such as inheritance, associati    on, aggregation, and composition.
        Used heavily in LLD to design code structure (OOP design).
    2. Sequence Diagram
        Represents the interaction between objects over time, showing the exact order of method calls/messages.
        Useful for designing API flows, service calls, and request lifecycle.
    3. Use Case Diagram
        Represents system functionality from an end-user perspective, showing actors and their interactions with the system.
        In LLD, used to refine specific feature-level interactions.
    4. Activity Diagram
        Represents the step-by-step flow of logic or workflow, including conditions and parallel processes.
        Used to design business logic (e.g., order processing flow).
    5. State Machine Diagram
        Represents different states of an object and transitions between them based on events.
        Useful for entities like Order, Payment, Booking lifecycle.
    6. Component Diagram
        Represents low-level components/modules and their dependencies.
        In LLD, used to break down services into internal modules/classes.
    7. Deployment Diagram
        Represents how components are deployed on infrastructure (servers, containers, etc.).
        In LLD, sometimes used for service-level deployment understanding.
    8. Object Diagram
        Represents a snapshot of real instances of classes at runtime.
        Helps debug or visualize actual data relationships.
    9. Package Diagram
        Represents how classes are grouped into packages/modules/namespaces.
        Useful for organizing large codebases.
    10. Communication Diagram
        Represents object interactions focusing on who communicates with whom, rather than time sequence.
        Alternative to sequence diagram for collaboration view.
        
HLD :

    1. System Architecture Diagram
            Represents the overall system design, including services, databases, external systems, and data flow.
            Example: Microservices, Load Balancer, API Gateway.
    2. Data Flow Diagram (DFD)
            Represents how data moves through the system, including input, processing, storage, and output.
            Useful for understanding data pipelines and transformations.
    3. Component Diagram
            Represents major system components/services and their interactions.
            In HLD, focuses on service-level (not class-level) design.
    4. Deployment Diagram
            Represents how services are deployed across servers, cloud, containers, networks.
            Example: AWS EC2, Kubernetes, Load Balancer setup.
    5. Use Case Diagram
            Represents system-level functional requirements from the user's perspective.
            Used early to define what the system should do.
    6. Sequence Diagram
            Represents high-level interactions between services (not objects).
            Example: User → API Gateway → Service → DB.
    7. State Machine Diagram
            Represents high-level state transitions of system entities.
            Example: Order lifecycle across services.
    8. Class Diagram (Optional in HLD)
            Represents high-level domain models (entities) without deep implementation details.
            Example: User, Order, Product relationships.
    9. Object Diagram (Rare in HLD)
            Used occasionally to show example data scenarios at a high level.
    10. Package Diagram
            Represents grouping of services/modules into logical domains or bounded contexts.
            Example: Auth Service, Payment Service, Order Service.

MICROSERVICE DEDIGN :

    1. Service Decomposition
        - Decompose the application into small, independent services based on business capabilities or domains.
        - Example: User Service, Order Service, Payment Service.
    2. API Design
        - Define clear and consistent APIs for communication between services (e.g., REST, gRPC).
        - Example: User Service API for creating and managing users.
    3. Data Management
        - Each service should manage its own database to ensure loose coupling.
        - Example: User Service has its own user database, Order Service has its own order database.
    4. Inter-Service Communication
        - Choose appropriate communication patterns (synchronous vs asynchronous) based on use case.
        - Example: Synchronous REST calls for user authentication, asynchronous messaging for order processing.
    5. Service Discovery
        - Implement service discovery mechanisms to allow services to find each other dynamically.
        - Example: Using a service registry like Consul or Eureka.
    6. Load Balancing
        - Distribute incoming requests across multiple instances of a service to ensure high availability and scalability.
        - Example: Using a load balancer like NGINX or AWS ELB.
    7. Fault Tolerance
        - Implement strategies to handle failures gracefully, such as retries, circuit breakers, and fallback mechanisms.
        - Example: Using a library like Hystrix for circuit breaking.
    8. Monitoring and Logging
        - Set up monitoring and logging to track the health and performance of services.
        - Example: Using tools like Prometheus for monitoring and ELK stack for logging.
    9. Security
        - Implement security measures such as authentication, authorization, and encryption to protect services and data.
        - Example: Using OAuth2 for authentication and TLS for encryption.
    10. Continuous Integration and Deployment (CI/CD)
        - Set up CI/CD pipelines to automate the build, test, and deployment processes for services.
        - Example: Using Jenkins or GitHub Actions for CI/CD pipelines.
        
MICRISERVICE COMMUNICATION :

    1. Synchronous Communication
        - Services communicate in real-time, waiting for a response before proceeding.
        - Example: REST API calls between services.
    2. Asynchronous Communication
        - Services communicate without waiting for an immediate response, often using messaging systems.
        - Example: Using message queues like RabbitMQ or Kafka for event-driven communication.
    3. Remote Procedure Calls (RPC)
        - Services invoke methods on remote services as if they were local.
        - Example: Using gRPC for high-performance RPC communication.
    4. Publish-Subscribe (Pub/Sub)
        - Services publish messages to a topic, and other services subscribe to receive those messages.
        - Example: Using a Pub/Sub system like Google Cloud Pub/Sub or AWS SNS.
    5. Event-Driven Communication
        - Services emit events when certain actions occur, and other services react to those events.
        - Example: An Order Service emits an "OrderCreated" event, and a Notification Service listens for that event to send a notification.
    6. GraphQL
        - Services expose a GraphQL API that allows clients to query for exactly the data they need.
        - Example: A User Service exposes a GraphQL endpoint for fetching user data with flexible queries.
    7. WebSockets
        - Services maintain a persistent connection for real-time communication.
        - Example: A Chat Service uses WebSockets to enable real-time messaging between users.
    8. gRPC
        - Services use gRPC for high-performance, language-agnostic communication with support for streaming.
        - Example: A Payment Service uses gRPC to communicate with an external payment gateway.

MICROSERVICE CIRCUIT BREAKER :

    1. Purpose
        - A circuit breaker is a design pattern used to detect and handle failures in a microservices architecture, preventing cascading failures and improving system resilience.
    2. States
        - Closed: The circuit is closed, and requests are allowed to pass through to the service.
        - Open: The circuit is open, and requests are blocked from reaching the service, typically returning an error response immediately.
        - Half-Open: After a certain timeout period, the circuit transitions to half-open, allowing a limited number of test requests to determine if the service has recovered.
    3. Implementation
        - Use libraries like Hystrix (Java), Polly (.NET), or Resilience4j (Java) to implement circuit breakers in your microservices.
    4. Configuration
        - Set thresholds for failure rates, timeouts, and retry attempts to control when the circuit breaker should trip and how it should recover.
    5. Benefits
        - Prevents cascading failures by isolating failing services.
        - Improves system resilience and availability.
        - Provides fallback mechanisms to handle failures gracefully.
    6. Monitoring
        - Monitor circuit breaker metrics (e.g., failure rates, open/closed state) to identify issues and optimize configurations. 





























*/