import http from "http";

import app from "./app.js";

const server = http.createServer(app);

async function onListening() {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	console.log(`HTTP server is up and running on ${bind}`);
}

server.on("listening", onListening);

server.listen(app.get("port"));

