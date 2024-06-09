## Description

## Prerequisites

- Node.js
- Docker
- Docker Compose

## Installation

copy the `.env.example` file to `.env` and update the environment variables.

`cp .env.example .env`

`docker compose up` for running the the postgres database server

`npm install` for installing the dependencies

`npx prisma migrate dev` for creating the database tables

`npx prisma db seed` for seeding the database with some data

`npm run dev` for running the development server
