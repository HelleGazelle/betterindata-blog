---
title: Create the Cloud Run job
draft: false
summary: Run the pipeline image with Google Cloud Run
weight: 4
emoji: 🏃‍♀️
---

## 1. Create a Cloud Run Job

Select the image in the sidebar when setting the image url:
<img class="post-image" src="/projects/003-building-pipeline-gcp-cloud-run/img/run_job.jpg"/>

### Service Account Security Setting

Be sure that the service account we created is selected in the Security section.

## 2. Watch the Job running

Google will spin up a available machine in the background and run the job:
<img class="post-image" src="/projects/003-building-pipeline-gcp-cloud-run/img/running_job.jpg"/>

## 3. See the result

Find the created file with the data in the storage bucket then:
<img class="post-image" src="/projects/003-building-pipeline-gcp-cloud-run/img/successful_run.jpg"/>
