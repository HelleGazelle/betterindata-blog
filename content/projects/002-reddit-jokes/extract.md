---
title: Download jokes
draft: false
summary: Extract jokes submissions from Pusshift
weight: 2
emoji: 🃏
---

## Pusshift API
For data extraction we will pull data from this REST API: **[Pusshift](https://github.com/pushshift/api)**
The API does not require an account and we can pull Reddit comments and submissions. We will go for the submission endpoint: 
`reddit/search/submission`

## Extraction with Python
Setup an extraction pipeline in Python for downloading the jokes. 

### Install the required packages

```bash {.codeblock}
pip install -r requirements.txt
```
<br/>

### Setup the extract script
Fill out the fields:
1. Postgres connection (find the values in the docker-compose file)
    1. `dbname`
    2. `user`
    3. `password`
    4. `host` (localhost)
    5. `port` (default is 5432)
2. `days_ago`: Define how long the script should data fetch in the past

#### extract.py
```python {.codeblock}
conn = psycopg2.connect(
    dbname="reddit",
    user="postgres",
    password="example",
    host="127.0.0.1",
    port="5432"
)
```

### Execute
Start the script
```python {.codeblock}
python extract.py
```

The execution can take some time depending on the amount of data and the set timestamp.

## What does the pipeline do?

1. We use the `requests` package to send a **GET** request against the API
2. We will fetch jokes submissions in bunches of 1000 items and transform them
3. The data will be inserted in the PostgreSQL