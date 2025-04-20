# http

> createServer

``` js
http.createServer ((req, res) => {
	res.end("eof");
	fs.createReadStream("rss").pipe(res);
});

http.createServer((req, res) => {
	req.write("hello world!");
	req.pipe(res);
})
```

> get & post

``` js
http.get(url, res => {
	res.pipe(fs.createWriteStream(url)).on('finish', () => console.log("finish"))
})

http.request(url, {rejectUnauthorized: false, method: 'POST'}, res => {
	let raw = '';
	res.on('data', chunk => raw += chunk);
	res.on('end', () => console.log(raw));
}).end();
```
