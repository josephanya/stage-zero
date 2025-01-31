# Stage-one

This is a simple public API written in Typescript that returns some information in JSON format.

It uses the following dependencies: [Typescript](https://www.npmjs.com/package/typescript "typescript"), [Express](https://www.npmjs.com/package/express "express"), [Body-parser](https://www.npmjs.com/package/body-parser "body-parser"), [Nodemon](https://www.npmjs.com/package/nodemon "nodemon"), [ts-node](https://www.npmjs.com/package/ts-node "ts-node")

### Features

- Returns my registered email address.
- Returns the current datetime in ISO 8601 format.
- Returns the github URL fo this project's codebase.

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
   curl http://localhost:3000
   ```

   Or opening ``http://localhost:3000`` on your browser

   ### Deployment

The API is deployed and self-hosted. You can access it at:

[https://13d0-102-89-43-87.ngrok-free.app](https://13d0-102-89-43-87.ngrok-free.app "Go to live deployment")

### Endpoint

```
GET /
```

### Response Format

```json
   {
     "email": "josephanya4real@gmail.com",
     "current_datetime": "2025-01-30T09:30:00Z",
     "github_url": "https://github.com/josephanya/stage-zero.git"
   }
```

### Example Usage


```bash
   curl https://13d0-102-89-43-87.ngrok-free.app
```

### Backlink

This project uses Javasctipt/Typescript. Learn more about talented Go developers at [HNG Tech](https://hng.tech/hire/javascript-developers "Hire Go devs")