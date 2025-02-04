---
sidebar_position: 1
---

# Pillars of SkySaver

# Let's discover the pillars of our project !

Reminder : for this project, we will try to use AWS as much as possible to improve our skills on it !

Our project will consist in a process in 6 distinct steps as follows :
- <kbd>**Data retrieval**</kbd> thanks to an API for example ;
- <kbd>**Data storage**</kbd> by using S3 and more ;
- <kbd>**Transformation and data processing**</kbd> with Glue for example ;
- <kbd>**Analysis and visualization**</kbd> with QuickSight ;
- <kbd>**Implementing notifications**</kbd> to be informed of low prices ;
- Last one, <kbd>**Automation and deployment**</kbd> with Terraform or AWS CloudFormation.

Here is an rapid overview of our AWS components and their interactions :
- <kbd>**Lambda function**</kbd> → Collecting the data from a public API ;
- <kbd>**S3**</kbd> → Storage of raw data ;
- <kbd>**AWS Glue**</kbd> → Data cleaning and data transformation ;
- <kbd>**Athena**</kbd> → Data analysis to extract insights ;
- <kbd>**RDS/DynamoDB**</kbd> → Threshold and alert management ;
- <kbd>**QuickSight**</kbd> → Datavisualization to highlight trends ;
- <kbd>**SNS with Lambda**</kbd> → Automatic notifications.



