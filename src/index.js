// import { Contact, ContactList } from"./ContactList.js";

// console.log(Contact);
// console.log(ContactList);

import * as http from "http";
import * as fs from "fs";

http
.createServer((req, res) => {
	console.log(req.method, req.url);
	// res.write("Hello HYF!");
	// res.write("This is a simple http server.");

	fs.readFile(`./public${ req.url }`, "utf8", (err, data) => {
		if(err){
			console.log("Error reading file:", err);
			res.statusCode = 404;
			res.write("File not found.");
			return res.end();
		}
		// console.log("Data:", data);
		res.write(data);
		res.end();
	});
})
.listen(8080);
