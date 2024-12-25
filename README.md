## Getting Started

This example implementation uses NextJS and shadcn/ui and aims to provide a small dummy CRM implementation.

## Requirements

- Checkout the git repository
- Install [Node Version Manager](https://github.com/nvm-sh/nvm) and install the configured node version v20
- Install Docker and docker-compose

## Installation

At first install the npm modules

```
npm install
```

Copy the .env file

```
cp .env.example .env
```

Start the database

```
docker-compose up
```

Start the dev server to run the actual application

```
npm run dev
```

Initialize the database schema

```
npm run migrate:fresh
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Technologies used in our projects

We use the latest technologies in our projects e.g. (NextJS, NestJS, shadcn/ui, tailwindcss, React 19, ...):

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Shardcn/ui](https://ui.shadcn.com/) - fully customizable ui components that are installed into your project source
- [Tailwind CSS](https://tailwindcss.com/) - a utility-first css framework used by many developers, which provides out of the box css classes and ready to use building blocks
- [Type ORM](https://typeorm.io/) - a typescript object relational mapper to handle entities and database interaction
- [NestJS](https://nestjs.com/) - a progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [NestJS Graphql](https://docs.nestjs.com/graphql) - graphql implementation for NestJS

## Important notes

- ```npm run psql``` - logs you into the database
- ```npm run migrate:fresh``` - drops all tables and runs the migrations from scratch
- ```npm run migrate``` - run new migrations
- ```npm run typeorm``` - run the typeorm cli e.g. to create migrations
- We use NextJS with app router, so the endpoints are inside the src/app folder
- You need to set all default values of useForm hook otherwise you receive errors
- 

## Task

The task is to enhance to Client object listed in the "Stammdaten" tab with a notes field.

- Create your own branch for the test
- Create a new migration to add another column notes (varchar, nullable, maxlength: 2000) to the clients table
- Add a update client validation schema using zod library in src/schemas
- Implement the api end point to update clients /api/clients/[id]
- Implement the UpdateClientDialog
