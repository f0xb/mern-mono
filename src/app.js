import path, { dirname } from "path";
import { fileURLToPath } from "url";

import express from "express";

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = process.env.PORT || 3001;

const app = express();
app.set("port", port);
app.set("x-powered-by", false);
app.set("etag", false);
app.set("case sensitive routing", false);
app.set("strict routing", true);

app.use(express.urlencoded({ extended: false }));


app.get("/api/resource", (req, res) => {
	res.status(200).json({status:"success", payload: "resource" });
});

if (process.env.NODE_ENV === "production") {
	// Serve any static files
	app.use(express.static(path.resolve(__dirname, "..", "client", "build")));

	// Handle React routing, return all requests to React app
	app.get("*", function (req, res) {
	  res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
	});
 }

export default app;
