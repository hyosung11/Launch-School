# Capstone Project Presentation: Pioneer

- Laura Davies
- Jimmy Zheng
- Kyle Ledoux
- Elizabeth Tackett

## Description

Pioneer is a self-hosted feature flag management tool, which lets users manage the rollout of new features in a deployed application. Pioneer assists companies migrating their architecture from a monolith to a microservices architecture. With Pioneer, new microservices can be rolled out to a specific subset of users, with each microservice controlled individually. If any issues arise with the new microservice in deployment, Pioneer enables the microservice to be “switched off” in the application, without the need for redeployment.

## Hypothetical: Harvest Delivery

- tightly coupled code
- inability to scale individual components
- availability

Martin Fowler - Triangular ...?

## Challenges of Monolith to Microservices Migration

- significant change to architecture
- minimize downtime when deploying or reverting
- need for partial rollout

Updating a Deployed Application

Canary Deployment

![Canary Deployment]()

Naive Solution

Capturing every combination

Problems of Canary Deployment

Feature Flags

Existing feature flag solutions

- develop feature flag tool in-house
- use existing third-party solution

pairwise coding

[Pairwise](https://www.pairwise.tech/)
