---
title: Setup Google Cloud CLI
draft: false
summary: Install the Google Cloud Development Environment
weight: 1
emoji: ⛑️
---

## 1. gcloud cli

Ensure that gcloud cli is working properly on your system:

```bash {.codeblock}
gcloud --version
```

This should return a version. Otherwise the CLI is not installed. You can find an instruction here: https://cloud.google.com/sdk/docs/install?hl=de#deb

Then set the project as active in the gcloud cli:

```bash {.codeblock}
gcloud config set project PROJECT_ID
```

## 2. Service Account

### Create the Account

Our pipeline needs access to interact with Google Services such as Google Cloud Storage to store data. That means we need to create a Service Account to do that. You can do this by entering the _IAM & Admin_ Service and then select the _Service Accounts_ section.

<img class="post-image" src="/projects/003-building-pipeline-gcp-cloud-run/img/create_sa.jpg"/>

### Select the Storage Access role

By selecting this role we can be sure that the account is able to store files in the storage.
<img class="post-image" src="/projects/003-building-pipeline-gcp-cloud-run/img/select_sa_role.jpg"/>

### (Optional) Create a JSON key

This is only needed for local execution.
Create a new key and select JSON as the key format. You should store the file with the key in the pipeline repo then.
<img class="post-image" src="/projects/003-building-pipeline-gcp-cloud-run/img/create_sa_key.jpg"/>
