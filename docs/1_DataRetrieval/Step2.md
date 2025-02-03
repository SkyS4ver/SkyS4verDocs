---
sidebar_position: 4
---

# Step 2 : Creation of a zip for the Lambda Layer

# First question is why ?
Advantages of using Layers:\
**Reduction in the size of the ZIP of the Lambda function**: You can keep your ZIP file light by separating the dependencies.\
**Reuse**: If you use amadeus in several Lambda functions, you can reuse the same Layer without having to re-include amadeus in each ZIP.

This step must therefore be carried out locally. Create a folder called <kbd>my-layer</kbd> and create inside this folder a new one called <kbd>python</kbd>.

Then we're going to install the dependencies in this directory using the command :
```yaml
pip install amadeus -t my-layer/python/
```
Then, after installing all the dependencies in the <kbd>python</kbd> directory, we need to zip all the elements inside using these commands : 
```yaml
cd my-layer
zip -r amadeus-layer.zip python/
```
This zip will be the zip we will use in aws to allow our lambda function to use the Amadeus API.