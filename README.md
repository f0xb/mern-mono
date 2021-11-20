
# mern-mono

This project is a boilerplate overhead setup for the workflow of making a MERN-stack web app in a mono-repository.

# scripts in package.json

## client: `cd client && npm run start`
Runs the ReactJS client independently

## server: `DEBUG=server:* npx nodemon -r dotenv/config src/index.js dotenv_config_path=.development.env`
Runs the NodeJS+ExpressJS server independently in development mode

## dev: `npm run server && npm run client`
Runs both Client and Server independently

## start: `node -r dotenv/config src/index.js dotenv_config_path=.production.env`
Runs the whole application in production mode, serving ReactJS built static files from `build` folder inside `/client`

## build: `cd client && npm install && npm run build`
Builds production static files for the client and install its dependencies
