const http = require("http");
const dateTimeET = require("./src/dateTime.ET")

const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Maarja-Liis Liiv, veebiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Maarja-Liis Liiv, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ülikoolis </a> harjutamise eesmärgil.</p>';
const pageFoot = '\n</body>\n</html>';

http.createServer(function(req, res) {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write(pageHead);
	res.write(pageBody);

	const weekDay = dateTimeET.weekDay();
	const date = dateTimeET.fullDate(true);
	const time = dateTimeET.fullTime();

	res.write('\t<p>Leht avati: ' + weekDay + ', ' + date + ' kell ' + time + '</p>\n');

	res.write(pageFoot);
	// res.write("Veeb läkski käima!");
	return res.end();
}).listen(5020);