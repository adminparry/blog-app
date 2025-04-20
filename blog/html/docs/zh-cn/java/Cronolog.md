# Cronolog

> jar包log分割

``` bash
wget http://cronolog.org/download/cronolog-1.6.2.tar.gz

tar zxvf cronolog-1.6.2.tar.gz

cd cronolog-1.6.2

./configure

make

make install

which cronolog

nohup java -jar xxxx.jar | /usr/local/sbin/cronolog /usr/local/logs/xxxx.%Y-%m-%d-_%H.log 2>&1 &
```
