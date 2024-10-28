import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Blog } from '../model/blog-type';
import {Sources} from "../model/source-type";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const blogs: Blog[] = [
      {
        id: 1,
        image: 'assets/images/blog/101.jpg',
        heading:
          'Eureka Server',
        subHeading: 'Use of Netflix component Eureka is for service registry and discovery',
        blogDate: 'Nov 04, 2023',
        blogDetail:
          'Netflix Eureka is a Java-based open source project that provides a RESTful interface for service discovery and registration. It consists of two main components: Eureka Server and Eureka Client. Eureka Server is a centralized registry that maintains a list of all the registered services and their instances. Eureka Client is a library that interacts with the Eureka Server to register, deregister, and discover other services. Eureka Client also provides a client-side load balancer that can route requests to the best available service instance.',
        link: 'https://github.com/PranayK27/eureka-server'
      },
      {
        id: 2,
        image: 'assets/images/blog/202.jpg',
        heading: 'Spring Security',
        subHeading:
          'Understand Spring Security Architecture and implement Spring Boot Security',
        blogDate: 'Sep 18, 2023',
        blogDetail:
          'Spring Security is a powerful and highly customizable authentication and access-control framework. It is the de-facto standard for securing Spring-based applications.\n' +
          '\n' +
          'Spring Security is a framework that focuses on providing both authentication and authorization to Java applications. Like all Spring projects, the real power of Spring Security is found in how easily it can be extended to meet custom requirements\n' +
          '\n',
        link: 'https://github.com/PranayK27/springsecurity'
      },
      {
        id: 3,
        image: 'assets/images/blog/303.jpg',
        heading: 'Spring WebFlux',
        subHeading:
          'Spring WebFlux is the alternative to Spring MVC module. Spring WebFlux is used to create fully asynchronous and non-blocking application built on event-loop execution model. Below diagram from Spring Official Documentation provides great insight on comparison of Spring WebFlux to Spring Web MVC.',
        blogDate: 'Aug 26, 2023',
        blogDetail:
          'Reactive Programming is an important coding style that evolved from the functional world. Reactive code utilizes an event-driven philosophy of streams, producers, and subscribers to simplify complex logic and enable asynchronous, nonblocking handling of IO processing in applications. In Java, this means we can build applications using the java.nio (nonblocking IO) package with expressive APIs. Many frameworks and approaches support reactivity in Java. One of the most popular is Spring WebFlux. This article is a hands-on introduction to reactive Java programming with Spring WebFlux',
        link: 'https://github.com/PranayK27/Spring-Webflux-2'
      },
      {
        id: 4,
        image: 'assets/images/blog/707.jpg',
        heading:
          'Spring AOP Logging',
        subHeading:
          'AOP is a programming paradigm that aims to increase modularity by allowing the separation of cross-cutting concerns. It does this by adding additional behavior to existing code without modifying the code itself.',
        blogDate: 'Oct 31, 2022',
        blogDetail:
          'AOP is referred to as a tool for implementing cross-cutting concerns. The term crosscutting concerns refers to logic in an application that cannot be decomposed from the rest of the application and may result in code duplication and tight coupling. By using AOP for modularizing individual pieces of logic, known as concerns, you can apply them to many parts of an application without duplicating the code or creating hard dependencies.\n' +
          '\n' +
          'Logging and security are typical examples of crosscutting concerns that are present in many applications. You often need to log actions or check if someone has permission in many parts of your program. AOP helps you do this without writing the same code all over the place.',
        link: 'https://github.com/PranayK27/Spring-AOP-Logging'
      },
      {
        id: 5,
        image: 'assets/images/blog/404.jpg',
        heading:
          'Apache Kafka Microservices',
        subHeading: 'Microservices Project with multiple modules working on Producer Consumer Architecture.',
        blogDate: 'Sep 28, 2022',
        blogDetail:
          'When it comes to event-driven microservice architecture Apache Kafka® is by far the most popular tool for event-driven microservices, whether it’s self-managed as an open source tool or uses the richer feature-set available on Confluent. Kafka blends together concepts seen in traditional messaging systems, Big Data infrastructure, and traditional databases and Confluent expands on this with an online platform with better scalability, infinite storage, and event streaming features such as data lineage, schemas, and advanced security.',
        link: 'https://github.com/PranayK27/springboot-kafka-microservice'
      },
      {
        id: 6,
        image: 'assets/images/blog/808.jpg',
        heading:
          'Rabbit MQ',
        subHeading:
          'RabbitMQ is lightweight and easy to deploy on premises and in the cloud. It supports multiple messaging protocols and streaming. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.',
        blogDate: 'Jul 27, 2022',
        blogDetail:
          'RabbitMQ is a widely used open-source message broker that helps in scaling the application by deploying a message queuing mechanism in between the two applications. It offers temporary storage for data preventing data loss. RabbitMQ Queue takes messages from the publisher and sends them to the consumer.',
        link: 'https://github.com/PranayK27/SpringBoot-RabbitMQ'

      },
      {
        id: 7,
        image: 'assets/images/blog/909.jpg',
        heading:
          'Spring WebSocket',
        subHeading:
          'The WebSocket protocol, RFC 6455, provides a standardized way to establish a full-duplex, two-way communication channel between client and server over a single TCP connection. It is a different TCP protocol from HTTP but is designed to work over HTTP, using ports 80 and 443 and allowing re-use of existing firewall rules.',
        blogDate: 'May 23, 2022',
        blogDetail:
          'WebSockets can make a web page be dynamic and interactive. However, in many cases, a combination of AJAX and HTTP streaming or long polling can provide a simple and effective solution.\n' +
          '\n' +
          'For example, news, mail, and social feeds need to update dynamically, but it may be perfectly okay to do so every few minutes. Collaboration, games, and financial apps, on the other hand, need to be much closer to real-time.\n' +
          '\n' +
          'Latency alone is not a deciding factor. If the volume of messages is relatively low (for example, monitoring network failures) HTTP streaming or polling can provide an effective solution. It is the combination of low latency, high frequency, and high volume that make the best case for the use of WebSocket',
        link: 'https://github.com/PranayK27/WebSocket'
      },
      {
        id: 8,
        image: 'assets/images/blog/505.jpg',
        heading: 'Spring Boot JPA',
        subHeading:
          'Spring Data JPA, part of the larger Spring Data family, makes it easy to easily implement JPA-based (Java Persistence API) repositories. It makes it easier to build Spring-powered applications that use data access technologies.',
        blogDate: 'Apr 11, 2022',
        blogDetail:
          'Spring Data JPA aims to significantly improve the implementation of data access layers by reducing the effort to the amount that’s actually needed. As a developer you write your repository interfaces using any number of techniques, and Spring will wire it up for you automatically. You can even use custom finders or query by example and Spring will write the query for you!',
        link: 'https://github.com/PranayK27/SpringBootListFromDatabase'
      },
    ];

    const sourcesData: Sources[] = [
      {
        downloadLocation: 'https://github.com/PranayK27',
        home: '/#/tech',
        blog: '/#/tech/blog',
        about: '/#/tech/about',
        login: '/#/tech/login',
        register: '/#/tech/register',
        list: '/#/tech/list',
      }
    ];
    return { blogs, sourcesData };
  }
}
