---
title: Extract Fruits
draft: false
summary: Extract the data from a REST API
weight: 1
emoji: 👉
---

## Fruityvice API
For data extraction we will pull data from this REST API: **[Fruityvice](https://fruityvice.com/)**
The API does not require an account and we can pull all the fruit data from the endpoint `api/fruit/all`

## Python for Pulling data
Setup an extraction pipeline in Python for downloading the fruit data as JSON. Install the `requests` package with `pip install requests` if not done already.

#### extract.py
```python {.myclass}
import json
import requests

# Make a request to the Fruityvice API to get all fruits
response = requests.get('https://fruityvice.com/api/fruit/all')

# Get the JSON data from the response
fruit_data = response.json()

# Write the JSON data to a file
with open('staging.json', 'w') as file:
    json.dump(fruit_data, file)
```

## What does the script do?

1. We use the `requests` library to send a **GET** request against the API
2. We will then save **raw data** to a local file `staging.json` for further processing

## Why do we save the data in a local file?
1. **Decoupling:** Staging the data is a good practice to create a robust ETL process. We decouple the source system from the following processes. Then the API gets slower or the amount of data gets bigger, we can adjust the extract process without changing the transform or load step.
2. **Reusability:** Additionally we can create multiple transform and load steps based on the same staging file.