# dns

> 局域网搭建dns

``` yml
version: "3"
services:
   dns:
     image: jpillora/dnsmasq
     ports:
     - "53:53/udp"
     - "53:53/tcp"
     - "8080:8080"
     env_file:
     - .env
```


