## Component testing in Node.js

### May 6th 2020

---

### What we will cover

* Component testing your application using Supertest
* Setting up your mocks using mockify

*Bear in mind that this is a code-along!*

---

### What this is not

* A best practices class on TDD
* Ideally, tests should be written **before** functionality

---

## Prerequisites

---

* A terminal
* A web browser
* A text editor (Visual Studio Code)
* Node.js v12.14+
* NPM v6.13+
* Docker v19.03

*Please double check you have the correct versions of Node/NPM*

---

## Let's go!

---

### Please clone the following repository from Github

#### https://github.com/kslat3r/component-testing-course-session

* Checkout the branch `master`
* Make sure you have a `src/` directory and navigate to it

---

## Starting the microservice

---

### Steps to complete:

* `npm install`
* `npm start`
* `http://localhost:3000/api/users`
* `http://localhost:3000/api/users/1`

---

## Walkthrough of functionality

---

## Writing some component tests

---

### Steps to complete:

* Checkout the branch `step-one`
* Install `supertest` HTTP assertion library
* Configure `package.json` with a new NPM script to execute our component tests
* In the directory `src/tests/`, write component tests for:
  * `GET /api/users`
  * `GET /api/users/1`
* **BONUS** add the `mochawesome` reporting tool

---

## Decoupling your component tests

---

* Checkout the branch `step-two`
* Use a mock-server to mock your downstream integration
* Install Docker on your system
* Run your component tests using Docker and stubs

---

## Thank-you all very much!

### https://www.surveymonkey.co.uk/r/SZ5M735
