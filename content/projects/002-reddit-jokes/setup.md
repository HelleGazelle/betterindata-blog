---
title: Setup Docker
draft: false
summary: Setup PostgreSQL and Metabase Container
weight: 1
emoji: 🚢
---

## docker-compose.yml
Find the docker-compose file in the repository. You can set some values like the database login credentials or port mappings.
Ensure that the Docker Client is running.

<br/>

Spin up the containers with the command:
```bash {.codeblock}
docker-compose up
```

<br/>

#### docker-compose.yml
```yml {.codeblock} 
version: '3.1'

services:

  db:
    image: postgres
    container_name: db
    restart: always
    ports:
      - 5432:5432
    volumes: 
      - ./postgresql/data:/var/lib/postgresql/data
      - ./postgresql/init_db.sql:/docker-entrypoint-initdb.d/init_db.sql
    environment:
      POSTGRES_PASSWORD: example

# Use postgres/example for login
  adminer:
    image: adminer
    container_name: adminer
    restart: always
    ports:
      - 8000:8080
  
  metabase:
    image: metabase/metabase
    container_name: metabase
    ports:
      - 3000:3000
    volumes:
      - ./metabase:/metabase.db
```

## Ensure that all services are running properly

### PostgreSQL 
Open the SQL Adminer panel on the defined port (default is `localhost:8000`) and login with your PostgreSQL credentials. There is a setup script for the PostgreSQL container that will create a simple joke schema.
<img class="post-image" src="/projects/002-reddit-jokes/img/adminer_screenshot.jpg"/>

### Metabase
Open the Metabase UI: `localhost:3000` and setup a default account. 
You can already connect it to the PostgreSQL with the same credentials as above.
<img class="post-image" src="/projects/002-reddit-jokes/img/metabase_screenshot.jpg" />