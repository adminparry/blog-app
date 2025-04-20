# openssl

> download

https://www.openssl.org/source/

``` bash
apt install openssl
```

> common

``` bash
openssl genrsa -out server-key.pem 

openssl req -new -sha256 -key server-key.pem -out server-csr.pem 

openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem

openssl genrsa -out client-key.pem 2048

openssl req -new -sha256 -key client-key.pem -out client-csr.pem

openssl x509 -req -CA server-cert.pem -CAkey server-key.pem -CAcreateserial -in client-csr.pem -out client-cert.pem

```
