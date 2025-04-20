# curl

> https

``` bash
curl -k https://www.baidu.com
```

> get post put delete

``` bash

curl -k -X POST 
```
> header

``` bash
curl -H "Content-Type: application/json" http://192.168.1.20
```

> parameters

``` bash
curl -X POST -d '{a:23,b:3}' http://192.168.1.21
```

> cookie

``` bash
curl -c cookies.txt http://www.baidu.co
```
> file

``` bash
curl -F "file=@photo.png" http://www.baidu.com
```

> verbose

``` bash

curl -v http://192.168.1.1
```
