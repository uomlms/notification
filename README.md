![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Kafka](https://img.shields.io/badge/Apache_Kafka-231F20?style=for-the-badge&logo=apache-kafka&logoColor=white)

# Notification Service

Notification Service is responsible for notifying users. Does not provide endpoints, only Kafka Consumers and Producers.


## Bugs, Feature Requests and Contributing
We'd love to see community contributions. We like to keep it simple and use Github issues to track bugs and feature requests and pull requests to manage contributions.


## Kafka

### Event Flow Diagram

Notification service consumes SendEmailEvent which indicates that another service want to send an email. It uses nodemailer library.

*Full list of Events can be found [here](/notyet).*

![event-flow](docs/event-flow.svg)

## Quickstart

### Using Docker Compose

#### Dependencies

- Docker
- Docker Compose

```
$ git clone https://github.com/uomlms/corrector.git
$ cd corrector
$ docker-compose up
```

## Authors

- [Orestis Rafail Nerantzis](https://github.com/OrestisNer)
- [Apostolis Tselios](https://github.com/apostolistselios)

## License
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)