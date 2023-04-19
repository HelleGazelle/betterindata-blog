---
title: Create pipeline image
draft: false
summary: Create a docker image with the pipeline
weight: 3
emoji: 🚢
---

## 1. Setup the pipeline

This python script will pull some data from a public API and push it to the storage we just created.

```python {.codeblock}
import requests
import json
from google.cloud import storage

# Fetch data from API
response = requests.get('https://jsonplaceholder.typicode.com/todos')
data = json.loads(response.text)

# Process data
processed_data = []
for item in data:
    processed_data.append({
        'id': item['id'],
        'title': item['title'].upper(),
        'completed': item['completed']
    })

# Store data in Cloud Storage bucket
client = storage.Client.from_service_account_json('SERVICE_ACCOUNT_KEY.json')
bucket = client.bucket('BUCKET_ID')
blob = bucket.blob('data.json')
blob.upload_from_string(json.dumps(processed_data))

```

## TODO

1. Set the bucket id from the bucket you just created
2. Set the Service Account file you just downloaded (just needed for local execution)

## What does the script do?

1. Loads data from the API
2. Pushed the data into the bucket as `data.json` file

## 2. Create the Dockerfile

```yml {.codeblock}
# Use an official Python runtime as a parent image
FROM python:3.8-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed dependencies specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Define the command to run your script
CMD ["python", "pipeline.py"]
```

## Pro-Tip: Execute the pipeline locally and try if it workings properly:

```bash {.codeblock}
docker build -t gc-run-pipeline && docker run gc-run-pipeline
```

## 3. Tag the image

Tag the Docker image with the name of your Google Cloud repository, replacing [PROJECT_ID] with your Google Cloud project ID, [IMAGE_NAME] with the name you want to give the image, and [TAG] with the tag you want to use:

```bash {.codeblock}
docker tag [LOCAL_IMAGE_NAME] gcr.io/[PROJECT_ID]/[IMAGE_NAME]:[TAG]
```

## 4. Login to Gcloud

Authenticate with your Google Cloud account by running the following command:

```bash {.codeblock}
gcloud auth login
```

## 5. Login to Gcloud

Configure the Docker command-line tool to use gcloud as a Docker credential helper by running the following command:

```bash {.codeblock}
gcloud auth configure-docker
```

## 5. Login to Gcloud

Push the Docker image to your Google Cloud repository by running the following command, replacing [IMAGE_NAME] and [TAG] with the same values used in step 1:

```bash {.codeblock}
docker push gcr.io/[PROJECT_ID]/[IMAGE_NAME]:[TAG]
```

Find the image in the _Container Registry_ Service then:
<img class="post-image" src="/projects/003-building-pipeline-gcp-cloud-run/img/container_registry.jpg"/>
