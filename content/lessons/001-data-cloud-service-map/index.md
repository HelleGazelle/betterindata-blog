---
title: "Data Cloud Service Map: AWS vs GCP vs Azure"
draft: false
description: Compare all data related services on the different hyperscaler platforms
cover : img/cover.webp
tags:
  - cloud
  - gcp
  - aws
  - azure
date: 2023-03-31
author: Alois Niedermaier
---
As more and more companies rely on the cloud for data storage, processing, and analysis, the competition among cloud service providers has grown more intense. Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) are three of the most prominent cloud providers offering data-related services. In this blog post, we will compare AWS, Azure, and GCP for data-related cloud services.

## Infrastructure Services
Infrastructure cloud services in a data context refer to the provision of virtualized computing resources such as servers, storage, and networking through the cloud to support data-related workloads. These services offer scalability, flexibility, and cost-effectiveness for organizations looking to store, process, and analyze large volumes of data.
<br/>

| Category                   | Amazon Web Services  | Google Cloud Platform                        | Microsoft Azure                                       |
|----------------------------|----------------------|----------------------------------------------|-------------------------------------------------------|
| Data Storage, Data Staging | S3                   | Cloud Storage                                | Storage                                               |
| Data Warehouses            | Redshift             | Big Query                                    | Synapse Analytics                                     |
| Data Lake / Lakehouses     | EMR, Lake Formation  | Dataproc, BigLake                            | HD Insights, Data Lake Storage                        |
| Streaming Processing       | Kinesis              | Dataflow                                     | Stream Analytics                                      |
| NoSQL Databases            | DynamoDB, DocumentDB | BigTable                                     | Comsos DB                                             |
| RDBMS                      | RDS                  | SQL                                          | SQL Server                                            |
| Orchestration              | Step Functions, MWAA | Workflows, Composer                          | Data Factory                                          |
| Compute                    | ECS, EKS, Lamda      | Compute Enginge, App Engine, Cloud Functions | Virtual Machines, AKS, Functions, Container Instances |

<br/>

## Analytics Services
These services enable organizations to leverage large volumes of data for insights and decision-making, and often offer advanced features such as machine learning and AI capabilities.
<br/>

| Category                       | Amazon Web Services | Google Cloud Platform | Microsoft Azure |
|--------------------------------|---------------------|-----------------------|-----------------|
| Business Intelligence Services | QuickSight          | Looker                | Power BI        |
| Visualization                  | -                   | Looker Studio         | Power BI        |
| Log Analysis                   | -                   | Cloud Logging         | Monitor         |

<br/>

## Machine Learning Services
Machine learning and AI cloud services refer to the use of cloud-based tools and platforms that enable organizations to build and deploy predictive models, natural language processing applications, computer vision solutions, and other AI-driven applications. These services offer scalable, cost-effective, and accessible solutions for organizations to leverage the power of AI and machine learning for data-related tasks.
<br/>

| Category                    | Amazon Web Services | Google Cloud Platform | Microsoft Azure    |
|-----------------------------|---------------------|-----------------------|--------------------|
| Notebookes for Data Science | SageMaker           | Vertex AI Workbench   | Notebookes         |
| Machine Learning Platforms  | Sagemaker           | Vertex AI             | Machine Learning   |
| Computer Vision             | Rekognition         | Vision AI             | Coginitve Services |
| Speech                      | Polly, Transcribe   | Speech-to-Text        | Speech to Text     |
| Natural Language Processing | Comprehend          | Natural Language API  | Coginitve Services |
| AI Hardware                 | Inferentia          | Cloud TPU             | Virtual Machines   |