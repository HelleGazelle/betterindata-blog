---
title: Transform Fuits
draft: false
summary: Flatten the data and bring it into a column based structure
weight: 2
emoji: 🎰
---

## Why do we need to transform the data?
The data is in JSON format. This makes it hard for most analysis tools to read the data. We will bring the data in a tabular structure and save it as CSV.


## Code

#### transform.py
```python {.myclass}
import csv
import json

# Load the fruit data from a JSON file
with open('staging.json') as file:
    fruit_data = json.load(file)

# Create a list to store the transformed data
transformed_data = []

# Loop over each fruit in the data
for fruit in fruit_data:
    # Create a dictionary to store the transformed data for this fruit
    transformed_fruit = {}
    
    # Extract the fruit name
    transformed_fruit['name'] = fruit['name']
    
    # Extract the fruit family
    transformed_fruit['family'] = fruit['family']
    
    # Extract the fruit genus
    transformed_fruit['genus'] = fruit['genus']
    
    # Extract the fruit order
    transformed_fruit['order'] = fruit['order']
        
    # Extract the nutrition facts
    nutritions = fruit['nutritions']
    transformed_fruit['carbohydrates'] = nutritions['carbohydrates']
    transformed_fruit['protein'] = nutritions['protein']
    transformed_fruit['fat'] = nutritions['fat']
    transformed_fruit['calories'] = nutritions['calories']
    transformed_fruit['sugar'] = nutritions['sugar']
    
    # Add the transformed fruit data to the list
    transformed_data.append(transformed_fruit)

# Write the transformed data to a CSV file
with open('transformed.csv', 'w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=
        ['name', 'colors', 'family', 'genus', 'order', 'carbohydrates', 'protein', 'fat', 'calories', 'sugar'])
    writer.writeheader()
    writer.writerows(transformed_data)

```

## What does the script do?

1. We open the staged data when we open the file `staging.json`
2. We iterate the JSON objects and create a 2-dimensional data object. We set column by column and also extract the nested `nutrition` fields
3. We write the data to an out file `transformed.csv` for further processing