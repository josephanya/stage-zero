# Stage-Zero

This is a simple public API written in Typescript that returns some information in JSON format.

It uses the following dependencies: [Typescript](https://www.npmjs.com/package/typescript "typescript"), [Express](https://www.npmjs.com/package/express "express"), [Body-parser](https://www.npmjs.com/package/body-parser "body-parser"), [Nodemon](https://www.npmjs.com/package/nodemon "nodemon"), [ts-node](https://www.npmjs.com/package/ts-node "ts-node")

### Features

- Returns my personal info.
- Returns the current datetime in ISO 8601 format.
- Returns a radom fact about cats.

## Setup Instructions

### Prerequisites

- Node and NPM

### Running Locally

1. Clone this repo:

   ```
   git clone https://github.com/josephanya/stage-zero.git

   ```
2. Navigate to the project directory:

   ```
   cd stage-zero
   ```
3. Install the dependencies:

   ```
   npm install
   ```
3. Run the server:

   ```
   npm run local
   ```
4. Access the API at port 8080 by either using:
   Curl:

   ```
   curl http://localhost:3000/me
   ```

   Or opening ``http://localhost:3000/me`` on your browser

   ### Deployment

The API is deployed and self-hosted. You can access it at:

[https://e98d3b65b67e.ngrok-free.app/me](https://e98d3b65b67e.ngrok-free.app/me "Go to live deployment")

### Endpoint

```
GET /
```

### Response Format

```json
   {
     "staus": "success",
     "user": {
            "email": "josephanya4real@gmail.com",
            "name": "Joseph Anya",
            "stack": "Typescript TypeScript + Node.js + Express + NestJS + MongoDB + PostgreSQL"
        },
     "timestamp": "2025-01-30T09:30:00Z",
     "fact": "Random cat fact"
   }
```

### Example Usage


```bash
   curl https://e98d3b65b67e.ngrok-free.app/me
```

### Backlink

This project uses Javasctipt/Typescript. Learn more about talented Go developers at [HNG Tech](https://hng.tech/hire/javascript-developers "Hire Go devs")