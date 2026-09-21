const http = require("http");
//moodul päringu parsimiseks
const url = require('url');
//moodul faili tee haldamiseks
const path = require('path');
//moodul failide haldamiseks
//const fs = require('fs');
const fs = require('fs').promises;
const dateTimeET = require("./src/dateTime.ET")

const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Maarja-Liis Liiv, veebiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Maarja-Liis Liiv, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ülikoolis </a> harjutamise eesmärgil.</p>';
const pageBanner = '<img src="veebiprogrammeerimine_2026_TA.pgn" alt="">';
const pageFoot = '\n</body>\n</html>';

//http.createServer(async function(req, res)
http.createServer(async function(req, res) {
	//parsin urli
	console.log('Päring: ' + req.url);
	let currentURL = url.parse(req.url, true);
	console.log('Parsituna: ' + currentURL.pathname);
	
	//hakkame erinevaid lehti jaotama -> routes
	
	if(currentURL.pathname === '/'){
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(pageHead);
		res.write(pageBody);
		res.write('\n\t\t<li><a href="/vanasona">Tänane vanasõna</a></li>');
		const weekDay = dateTimeET.weekDay();
		const date = dateTimeET.fullDate(true);
		const time = dateTimeET.fullTime();
		
		res.write('\t<p>Täna on ' + weekDay + ', ' + date + ' kell ' + time + '</p>\n');
		res.write(pageFoot);
		// res.write("Veeb läkski käima!");
		return res.end();
	}
	
	else if (currentURL.pathname === '/vanasona'){
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(pageHead);
		res.write(pageBanner);
		res.write('\t<h1>Eesti vanasõnad</h>\n\t<p>Siin näed tänase päeva vanasõna');
		res.write('\n\t<p><a href = "/">Tagasi avalehele</a></p>');
		res.write(pageFoot);
		return res.end();
	}
	
	else if (currentURL.pathname === '/veebiprogrammeerimine_2026_TA.pgn'){
		//teeme pildi tegeliku asukoha programmile kättesaadavaks
		let picPath  = path.join(__dirname, 'pic', currentURL.pathname);
		try {
			const data = await fs.readFile(picPath + currentURL.pathname);
			res.writeHead(200, {"Content-type": "image/pgn"});
			res.end(data);
			
		} catch (err){
			res.writeHead(404, {"Content-type": "text/plain; charset=uft8"});
			return res.end('Pilti ei leitud!!!!!!');
		} 
	}
	else {
		res.end('Viga 404, ei leia sellist lehte');
	}
}).listen(5020);