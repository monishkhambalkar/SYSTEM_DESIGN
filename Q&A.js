/*

what is throughput?
    Throughput is a measure of how much data can be processed or transmitted in a given amount of time. It is often used in the context of computer networks, data processing, and manufacturing to evaluate the efficiency and performance of systems. Throughput is typically measured in units such as bits per second (bps) for data transmission or items per hour for manufacturing processes. High throughput indicates that a system can handle a large volume of work efficiently, while low throughput may indicate bottlenecks or inefficiencies in the system.

What are Queues in System Design?
    In system design, a queue is a data structure that follows the First-In-First-Out (FIFO) principle. It is used to manage and organize tasks, requests, or data in a way that ensures that the first item added to the queue is the first one to be processed. Queues are commonly used in various applications such as task scheduling, load balancing, and message processing. They help in decoupling different components of a system, allowing for asynchronous processing and improving overall system performance.

Async Programming in System Design:
    Asynchronous programming is a programming paradigm that allows for non-blocking operations, enabling a system to perform multiple tasks concurrently without waiting for each task to complete before starting the next one. In system design, asynchronous programming is often used to improve responsiveness and efficiency, especially in scenarios where tasks may involve I/O operations, such as network requests or file handling. By using asynchronous programming techniques, systems can handle more requests simultaneously and reduce latency, leading to better performance and user experience.

partition tolerance in system design?    
    Partition tolerance is a property of distributed systems that allows them to continue functioning even when there are network partitions or communication failures between different components of the system. In a partitioned system, some components may become isolated from others due to network issues, but the system as a whole can still operate and provide service to users. Partition tolerance is an important aspect of system design, especially in large-scale distributed systems, as it ensures that the system remains available and responsive even in the face of network disruptions.

CAP Theorem in System Design:
    The CAP theorem, also known as Brewer's theorem, is a fundamental principle in distributed system design that states that it is impossible for a distributed system to simultaneously provide all three of the following guarantees: Consistency, Availability, and Partition Tolerance.
    - Consistency: Every read operation receives the most recent write or an error. This means that all nodes in the system see the same data at the same time.
    - Availability: Every request receives a response, without guarantee that it contains the most recent write. This means that the system is always available to respond to requests, even if some nodes are down.
    - Partition Tolerance: The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes. This means that the system can handle network partitions and still function.

    According to the CAP theorem, a distributed system can only provide two of these three guarantees at the same time. For example, a system can be designed to be consistent and partition-tolerant (CP), but it may sacrifice availability during network partitions. Alternatively, a system can be designed to be available and partition-tolerant (AP), but it may sacrifice consistency during network partitions. Understanding the trade-offs between these guarantees is crucial for designing distributed systems that meet specific requirements and use cases.         
        
latency vs throughput?  
    Latency and throughput are two important performance metrics in system design, but they measure different aspects of a system's performance.                
    - Latency refers to the time it takes for a single operation or request to be processed and completed. It is typically measured in milliseconds (ms) or seconds (s). Low latency means that the system can respond quickly to individual requests, which is important for real-time applications and user experience.
    - Throughput, on the other hand, refers to the amount of work or data that can be processed or transmitted in a given amount of time. It is typically measured in units such as bits per second (bps) for data transmission or items per hour for manufacturing processes. High throughput indicates that a system can handle a large volume of work efficiently.

    In summary, latency focuses on the speed of individual operations, while throughput focuses on the overall capacity and efficiency of the system. Both metrics are important for evaluating and optimizing system performance, and they often need to be balanced based on the specific requirements of the application or use case.    








































*/