# Game Management System - Backend Task

A game management and participant tracking system built with Node.js and Prisma ORM.

##  Tech Stack
* **Runtime**: Node.js 18.
* **ORM**: Prisma.
* **Database**: PostgreSQL 15.
* **Infrastructure**: Docker & Docker Compose.

##  Quick Start
To spin up the database and run the application, execute:
`docker-compose up --build`
This command automatically handles database provisioning, schema synchronization (db push), and starts the main application.

##  System Highlights
* **Schema**: Features a relational model including Users, Games, and a Many-to-Many Participant join table.
* **Business Logic**: Includes a `joinGame` service with validations for game status and duplicate registration prevention.
* **Auto-Seed**: Automatically generates initial test data (User & Game) upon startup.

---
*Note: SSL bypasses (NODE_TLS_REJECT_UNAUTHORIZED) are configured in the Dockerfile and environment for compatibility in filtered network environments.*
