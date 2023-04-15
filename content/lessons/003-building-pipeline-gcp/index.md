---
title: Building an ETL Pipeline with Google Cloud Run
draft: false
summary: A crash course for implementing and running a ETL pipeline in Google Cloud Platform
cover: img/cover.webp
tags:
  - pipeline
  - tutorial
date: 2023-03-31
author: Alois Niedermaier
---

Pull requests are an essential part of any data or ETL (Extract, Transform, Load) pipeline development process. They allow for collaboration between team members, facilitate code reviews, and ensure that changes to the pipeline are thoroughly vetted before they are merged into the main codebase. However, when it comes to reviewing pull requests for data or ETL pipelines, there are a few important considerations to keep in mind. Here are some key points to consider when looking up a pull request for a data or ETL pipeline.

## Data integrity and Idempotency

The first thing to consider when reviewing a pull request for a data or ETL pipeline is whether the changes being proposed will maintain data integrity. Data integrity refers to the accuracy, completeness, and consistency of data, and it is critical to ensure that any changes made to the pipeline do not compromise these aspects.

### 🔑 Keywords to look out for:

1. The correct usage of `current time`
2. Hardcoded max item counts
3. When `date > start_data` is used, is there also a related `date < end_date`?
4. Pipeline runtime vs Pipeline schedule: A pipeline which runs 1 hours shall not be scheduled all 30 minutes
5. Is there a check for row counts to ensure that JOINs were done correctly?

## Performance

The performance of the pipeline is another crucial factor to consider when reviewing a pull request. ETL pipelines can be resource-intensive, and changes that adversely affect performance can have a significant impact on the pipeline's efficiency.

### 🔑 Keywords to look out for:

1. Recursive function calls
2. Nested loops

## Maintainability

It is also important to consider the maintainability of the pipeline when reviewing a pull request. Will the changes make the code more maintainable, or will they introduce unnecessary complexity?

### 🔑 Keywords to look out for:

1. Nested and duplicate conditions
2. Long classes

## Testing

Testing is an essential part of any software development process, and this is particularly true for data and ETL pipelines. When reviewing a pull request, it is important to ensure that the proposed changes have been adequately tested and that any necessary test cases have been added or updated.

## Documentation

Documentation is critical for ensuring that the pipeline remains accessible to other team members and that new team members can easily understand the pipeline's structure and functionality. When reviewing a pull request, it is important to ensure that any necessary documentation has been added or updated.

### 🔑 Keywords to look out for:

1. Missing function comment blocks
2. Missing documentation for critical parts in code

## Security

Data security is a critical concern for any organization that deals with sensitive data. When reviewing a pull request, it is important to ensure that the proposed changes do not compromise data security in any way.

### 🔑 Keywords to look out for:

1. Where is the sensitive data like passwords stored? Is it hardcoded or did someone commit it from his local system?
2. Are the sensitive data visible in the logs?

## Code style and standards

Maintaining consistent code style and adhering to coding standards is important for ensuring that the pipeline remains maintainable and easy to understand. When reviewing a pull request, it is important to ensure that the proposed changes adhere to the team's coding standards.

### 🔑 Keywords to look out for:

1. Where are static variables stored?
2. Is the code following the naming conventions and the styleguides?
3. Are the column namings following a standard? `start_date` vs `start date`

## Code review feedback

Finally, it is important to provide constructive feedback when reviewing a pull request. Code reviews are an opportunity to catch errors and identify areas for improvement, and providing helpful feedback can help ensure that the pipeline remains robust, efficient, and maintainable over time.

## Conclusion

In conclusion, reviewing pull requests for data or ETL pipelines requires careful consideration of a range of factors, from data integrity and performance to documentation and compliance. By keeping these key points in mind, team members can work together effectively to ensure that the pipeline remains efficient, reliable, and secure over time.
