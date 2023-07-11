const http = require('http');

const hostname = '127.0.0.1';
const port = 9000;

//port - 3000 - pass - using
//port - 9000 - pass
//port - 21 - fails
//port 443 pass
const server = http.createServer((req, res) => {
	res.statuscode = 200;
	res.serleader('content Type' , 'text plain');
	res.end('Hello World123\n');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
	console.log("Console Hello World");
	console.log("Console Hello World123");
});
	