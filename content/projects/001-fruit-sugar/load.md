---
title: Load Sugar Data
draft: false
summary: Load the data into a bar chart
weight: 3
emoji: 👈
---

## Dependencies
You have to install `matplotlib` as visualization package. Can can do that with `pip install matplotlib`.

## What do we want to do?
We want to create a simple bar chart. This chart should show the top 5 fruits with the most sugar content.

## How can we archieve that?
We will use matplotlib as a simple build-in python visualization package.


## Code

#### load.py
```python {.codeblock}
import csv
import matplotlib.pyplot as plt

# Create lists to store the fruit names and sugar contents
fruit_names = []
sugar_contents = []

# Load the transformed fruit data from the CSV file
with open('transformed.csv') as file:
    reader = csv.DictReader(file)
    for row in reader:
        # Add the fruit name to the list
        fruit_names.append(row['name'])
        
        # Add the sugar content to the list (converting from string to float)
        sugar_contents.append(float(row['sugar']))

# Sort the lists by sugar content in descending order
sorted_fruit_names, sorted_sugar_contents = 
    zip(*sorted(zip(fruit_names, sugar_contents), key=lambda x: x[1], reverse=True))

# Slice the sorted lists to only include the top 5 fruits
top_fruit_names = sorted_fruit_names[:5]
top_sugar_contents = sorted_sugar_contents[:5]

# Create a bar chart of the top 5 sugar contents
plt.bar(top_fruit_names, top_sugar_contents)
plt.xlabel('Fruit')
plt.ylabel('Sugar content (g)')
plt.title('Top 5 fruits with the highest sugar content')
plt.show()
```

## What does the program do?
1. We iterate the `transformed.csv` data
2. We extract the `name` and the `sugar` fields values and store the information in two separate lists
3. We sort the lists by sugar amount and just keep the top 5 items in the lists 

## Result
When the script is running properly a new window will open and look like this:
<img src="/projects/001-fruit-sugar/img/fruit_sugar.svg"/>