---
sidebar_position: 5
---

# Step 3 : Retrieving data from AWS

We're going to use AWS for this step.\
First step in S3, create a new bucket that we'll call <kbd>bucket-sky-saver</kbd>.\
Next, we'll use Lambda, where we have several tasks to perform: 
- Create a new Layer using the zip we created in the previous step.
- Create a new function, specifying <kbd>Python</kbd> as the Runtime and using <kbd>Create a new role with basic Lambda permissions</kbd> as the execution role.
- In the Layer section of this function, we add the previously created layer.
- In the configuration tab, we go to environment variables to add the <kbd>API Key</kbd> and the <kbd>API Secret</kbd> from Amadeus.
- Then we write our lambda function with a test request, here is the code below :
```yaml
import json
import os
import boto3
from amadeus import Client, ResponseError
from datetime import datetime

# Récupérer les clés API depuis les variables d'environnement Lambda
CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')

# Initialize using parameters
amadeus = Client(
    client_id=CLIENT_ID,
    client_secret=CLIENT_SECRET
)

#Initialiser le client S3
s3_client = boto3.client('s3')
S3_BUCKET_NAME = 'bucket-sky-saver'

def lambda_handler(event, context):
    try:
        response = amadeus.shopping.flight_offers_search.get(
            originLocationCode='MAD',
            destinationLocationCode='ATH',
            departureDate='2025-03-01',
            adults=1
        )

        # Créer un fichier JSON avec les données de la réponse
        filename = f"{datetime.now().strftime('%Y/%m/%d')}/flightOffers_{datetime.now().strftime('%H%M%S')}.json"
        file_content = json.dumps(response.data)

        # Télécharger le fichier JSON dans le bucket S3
        s3_client.put_object(
            Bucket=S3_BUCKET_NAME,
            Key=filename,
            Body=file_content,
            ContentType='application/json'
        )

        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': 'Fichier JSON cree et envoye dans S3 avec succes!',
                'filename': filename
            })
        }

    except ResponseError as error:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': str(error)}),
        }
```
One important thing to notice in our code is the name of the JSON file that will be created in S3 is using **prefixes**. This will result in an organisation like this in S3 :\
![OrgaBucketS3](../assets/bucketPref.png)\
This will create folders by year and within the folders by year, folders by month and within folders by day. Folders corresponding to days will contain JSON files. This will make it easier to analyse the data afterwards.

:::info
Finally and before running our lambda function, we need one more task to do. We need to allow our lambda function to access our S3 bucket. For this, we will use IAM to add a permission policies to the existing role of our lambda function. You can add different roles depending on your needs. We have chosen to add <kbd>**AmazonS3FullAccess**</kbd>.
:::
Now, we are ready to go.\
We can analyse the different API queries available and choose which ones we want. All we have to do is adapt the code of our lambda function.