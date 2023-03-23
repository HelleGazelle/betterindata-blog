---
title: 'Analytics: Word count'
draft: false
summary: Count the most used words in jokes
weight: 3
emoji: 🔢
---

## Enrich the data
Group the jokes by humor topic:

### Add a word count
Find out which words are used most frequent when Reddit Users build a joke:

#### Create a new table
You can create a new table in the adminer service by executing a SQL script

```sql {.codeblock}
CREATE TABLE most_used_words (
  word TEXT,
  frequency INTEGER
);
```

#### Count the words by usage
Execute this script afterwards.

```sql {.codeblock}
INSERT INTO most_used_words (word, frequency)
SELECT word, COUNT(*) AS frequency
FROM (
  SELECT unnest(string_to_array(selftext, ' ')) AS word
  FROM jokes
) words
GROUP BY word
ORDER BY frequency DESC;
```

<img class="post-image" src="/projects/002-reddit-jokes/img/adminer_command_screenshot.jpg"/>

#### Inspect the data in Metabase
If you cannot see the new schema in Metabase you have to enter the **Admin settings** and trigger the schema schema for the database:

<img class="post-image" src="/projects/002-reddit-jokes/img/metabase_admin_menu_screenshot.jpg"/>

The Stop Words are not filtered out in this simple SQL commands. So you will find a lot of filling words like "the", "is" and so on. But still you can see some words that are used frequently:
<img class="post-image" src="/projects/002-reddit-jokes/img/words_screenshot.jpg"/>