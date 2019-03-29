# Agrilytics Backend

Spring Boot backend for the Agrilytics web app

## Getting Started 

Ensure that MongoDB is installed and running locally;
```bash
$ brew install mongo
$ mongod
```

Then install and start the app:
```bash
$ ./mvnw clean install
$ ./mvnw spring-boot:run
```

Alternatively, you can use your local Maven installation:
```bash
$ mvn clean install
$ mvn spring-boot:run
```

## About

### Initial Setup

This project was generated with [Spring Initailizr](https://start.spring.io/) with the following dependencies:
- Security
- Lombok
- MongoDB
- Web
- Rest Repositories
- DevTools
