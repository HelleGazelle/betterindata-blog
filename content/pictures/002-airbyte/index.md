---
title: "Airbyte in one picture"
draft: false
description: Understand Airbyte with this cheatsheet
cover: img/cover.webp
picture: img/airbyte.png
tags:
  - pipeline
  - batch-processing
  - ingestion
  - elt
date: 2023-05-10
author: Alois Niedermaier
---

### In one sentence

Airbyte is an open source ELT platform for data replication from various sources to data warehouses or data lakes.

### Further resources

1. **[Official Documentation](https://docs.airbyte.com/)**
2. **[List of available Airbyte connectors](https://connectors.airbyte.com/files/generated_reports/connector_registry_report.html)**
3. **[Airbyte Blog](https://airbyte.com/blog)**
4. **[Roadmap for upcoming features](https://app.harvestr.io/roadmap/view/pQU6gdCyc/launch-week-roadmap)**

### Potential users

1. Data Engineers
2. Data Scientists
3. Data Analysts

### When to use

1. when you want to spend your time in analysing data instead of developing and maintaining extraction data pipelines
2. small data teams: you can focus on generating insights from data
3. simple integration: you can configure connectors in the UI and do not have to write complex code
4. many data sources: there are connectors (300+) for many services, APIs and databases to pull data from

### When not to use

1. real-time data processing: Airbyte is designed for batch data integration
2. custom connectors:even there is a wide range of pre-built connectors, you need technical experience when developing your own connector
3. Large-scale data integration: Airbyte is not the best choice if you're dealing with petabytes of data or more

### ETL vs ELT

<div style="overflow-x:auto">

|            | ETL                                                                                                                                       | ELT                                                                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| definition | Data is extracted from the source system and then transformed on a dedicated server. Then the data is loaded into the destination system. | Data is extracted from the source system and directly loaded into the target system. The transformation is done in the destination system. |
| volume     | Small data with high demand of transformation                                                                                             | Big data which requires speed                                                                                                              |
| costs      | Separated transform pipelines can cost compute resources + maintenance                                                                    | Whole stack is smaller - so costs will be lower as well                                                                                    |
| maturity   | Long known process with a lot of literature and documentations                                                                            | ELT is a new practice so there is less community experience                                                                                |

</div>

### Deployment options

1. Docker
2. Kubernetes
3. AWS
4. GCP
5. Azure
6. Plural
7. Airbyte Cloud
8. Digital Ocean
9. Oracle Cloud

### Alternatives

1. Fivetran
2. Integrate.io
3. Stitch
4. Hevo Data
