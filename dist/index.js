"use strict";

var _http = require("http");

var http = _interopRequireWildcard(_http);

var _fs = require("fs");

var fs = _interopRequireWildcard(_fs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import { Contact, ContactList } from"./ContactList.js";

// console.log(Contact);
// console.log(ContactList);

http.createServer(function (req, res) {
	console.log(req.method, req.url);
	// res.write("Hello HYF!");
	// res.write("This is a simple http server.");

	fs.readFile("./public" + req.url, "utf8", function (err, data) {
		if (err) {
			console.log("Error reading file:", err);
			res.statusCode = 404;
			res.write("File not found.");
			return res.end();
		}
		// console.log("Data:", data);
		res.write(data);
		res.end();
	});
}).listen(8080);
//# sourceMappingURL=index.js.map