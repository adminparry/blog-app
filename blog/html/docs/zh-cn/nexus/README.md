# neuxs

本地镜像私服

> docker-compose

``` yml
version: "2"

services:
  nexus:
    image: sonatype/nexus3
    volumes:
      - "nexus-data:/nexus-data"
    ports:
      - "8081:8081"
  
volumes:
  nexus-data: {}
```

> user name and password
``` bash
admin

docker exec -it containerid /bin/bash

cat /opt/sonatype/sonatype-work/nexus/admin.password

```
> 界面操作

setting > repositories 

hosted > proxy > group
