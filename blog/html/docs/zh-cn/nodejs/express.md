# express

https://www.expressjs.com.cn/


> download

``` bash

sudo npm i express express-generator  -g

```

> hello world

``` js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

```

> generator

``` bash
npx express-generator --view=pug myapp
cd myapp
npm install
npm run start
```

> express

https://www.expressjs.com.cn/4x/api.html#express

``` js
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options))
```
> application

https://www.expressjs.com.cn/4x/api.html#app

``` js
app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
```
> router

https://www.expressjs.com.cn/4x/api.html#router

``` js
ar express = require('express')
var app = express()
var router = express.Router()

// customizing the behavior of router.param()
router.param(function (param, option) {
  return function (req, res, next, val) {
    if (val === option) {
      next()
    } else {
      res.sendStatus(403)
    }
  }
})
```
> request

https://www.expressjs.com.cn/4x/api.html#req

``` js
app.use('/admin', function (req, res, next) { // GET 'http://www.example.com/admin/new?sort=desc'
  console.dir(req.originalUrl) // '/admin/new?sort=desc'
  console.dir(req.baseUrl) // '/admin'
  console.dir(req.path) // '/new'
  next()
})
```
> response

https://www.expressjs.com.cn/4x/api.html#res

``` js
res.status(500).jsonp({ error: 'message' })

```

> express-jwt

``` basj
npm i jsonwebtoken express-jwt 

```
