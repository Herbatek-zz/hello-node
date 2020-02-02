const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const params = url.parse(req.url, true).query;

    const requestedUrl = req.url;

    const day = params.day === undefined ? "day" : params.day;
    const month = params.month === undefined ? 'month' : params.month;
    const year = params.year === undefined ? 'year' : params.year;

    const body = `${day} ${month} ${year} </br> requestedUrl: ${requestedUrl}`;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(body);

}).listen(8080);