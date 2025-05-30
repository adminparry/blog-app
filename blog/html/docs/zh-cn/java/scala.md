# scala

> homebrew

``` bash
brew install coursier/formulas/coursier && cs setup
```

> install

``` bash
curl -fL https://github.com/coursier/launchers/raw/master/cs-x86_64-pc-linux.gz | gzip -d > cs && chmod +x cs && ./cs setup
```

> docker-compose
``` yml
version: "2"

services:
  dev:
    image: hseeberger/scala-sbt:11.0.7_1.3.13_2.13.3
    working_dir: /work
    command: sbt run
    environment:
      PORT: 9200
      OMDB_API_KEY: 7f9b5b06
      DATABASE_HOST: database
      DATABASE_NAME: moviedb
      DATABASE_USERNAME: moviedb
      DATABASE_PASSWORD: moviedb
    ports:
      - "9200:9200"
    volumes:
      - .:/work
      - coursier-cache:/root/.cache/coursier
      - docker-scala-sbt-cache:/root/.sbt
      - ivy-cache:/root/.ivy2
    depends_on:
      - database

  database:
    image: postgres:9.6
    environment:
      POSTGRES_USER: moviedb
      POSTGRES_PASSWORD: moviedb
      POSTGRES_DB: moviedb
    ports:
      - 5432:5432
    volumes:
      - ./db:/docker-entrypoint-initdb.d

volumes:
  coursier-cache:
    external: true
  docker-scala-sbt-cache:
    external: true
  ivy-cache:
    external: true
```
