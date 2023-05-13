---
title: "Apache Airflow in one picture"
draft: false
description: Understand Apache Airflow with this cheatsheet
cover: img/cover.webp
picture: img/apache-airflow.png
tags:
  - pipeline
  - batch-processing
date: 2023-05-07
author: Alois Niedermaier
---

### In one sentence

Apache Airflow is a tool for scheduling, developing, monitoring data engineering pipelines.

### Further resources

1. **[Official Documentation](https://airflow.apache.org/docs/apache-airflow/stable/index.html)**
2. **[Provider Documentation](https://airflow.apache.org/docs/apache-airflow-providers/index.html)**

### Potential users

1. Data Engineers
2. Data Scientists
3. DevOps Engineers

### When to use

1. automatically schedule, orchestrate and monitor ETL batch pipelines
2. when you need a single UI as cockpit for all your pipelines
3. working on workflows as a team as everything is stored as code
4. developing pipelines that need to be run on a elastic compute backend such as k8s. Airflow can operate with Kubernetes natively

### When not to use

1. processing data. Airflow itself is only meant to manage pipelines that process data
2. teams without programming skills as the workflows are managed in code and cannot be made by clicking
3. stream data processing. Airflow is used for batch pipelines

### Architecture

1. Webserver: The UI for engineers
2. Scheduler: Schedules jobs and decides which tasks need to be run when and where
3. MetadataDB: A database where DAG and task metadata is stored e.g. Postgres or MySQL
4. Executor: Responsible for executing tasks within the available computing resources

### Alternatives

1. Dagster
2. Prefect
3. Keboola
4. Luigi
