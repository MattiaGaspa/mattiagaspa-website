---
title: Introduction to SQL
description: "These notes are based of the book <a href='https://amzn.eu/d/fiPevMq' target='_blank' rel='noopener'><i>Learning SQL: Generate, Manipulate, and Retrieve Data</i></a> by Alan Beaulieu"
language: SQL
published: true
---

## Background

### Type of databases

Originally databases where represented with _hierarchical database system_:

![](/SQL/1.png)

This structure is also known as _single-parent hierarchy_ since every account has its own transactions.

Another implementation is given by the _network database system_:

![](/SQL/2.png)

To find Sue's money market account transactions, you would need to:

1. Find Sue's record;
2. Follow the link from Sue to her list of accounts;
3. Traverse the chain of accounts until you find the money market account;
4. Follow the link from the money market record to its list of transactions.

The _relational model_, proposed in 1970, represents data in tables:

![](/SQL/3.png)

Each table represents an entity, and each table records specific data that is useful to the entity.

Each table contains a column that contains a value that identifies the identity, called the _primary key_. It is called a _compound key_ when the primary key consists of two or more columns. A primary key is said to be:

- Surrogate: when the value of the information is not derived from the entity. For example: a randomly chosen number;
- Natural: when the value of the information represents the identity. For example: the person's name.

Keys that are used to navigate to another table are called _foreign keys_.

### Terminologies

- Entity: something of interest that is to be saved in the database;
- Column: a piece of data that is saved in the database;
- Row: a set of columns that, together, represent the entity. Also called a _record_;
- Table: a set of rows that reside in memory;
- Result set: the result of an _SQL query_;
- Primary key: one or more columns that are used as a unique identifier for the entity;
- Foreign key: one or more columns that can be used to identify a row in another column.

## Create and populate a database

First, you need to install a version of the `MySQL` server.
For this chapter, you must load the sample database _Sakila_: [link](https://dev.mysql.com/doc/index-other.html). The database is loaded on the MySQL console using the commands

```sql
source /path/to/sakila-schema.sql;
source /path/to/sakila-data.sql;
```

You can see all available databases with:

```sql
show databases;
```

To use the `sakila` database type:

```sql
use sakila;
```

You can also access the sakila database directly from the command line:

```shell
mysql -u root -p sakila
```

To get the current time type:

```sql
SELECT now();
```

### Datatypes

The data types present in MySQL, which are usually found in the vast majority of other SQL servers, are:

- Characters: these can be either `char(n)`, with `n` fixed-length characters, or `varchar(n)`, with `n` characters of variable length. The maximum size of `char()` is 255 bytes, while for `varchar()` it is 65535 bytes.
  Since the size of characters in `char()` and `varchar()` is fixed at 1 byte per character, other character sets called _multibyte character sets_ are required to display other languages. All available character sets can be viewed with the command:
  ```sql
  SHOW CHARACTER SET;
  ```
- Text: these are the types to use when exceeding the 64KiB limit of `varchar()`. The types that fall into this category are:
  - `tinytext`: with a maximum size of 25B. Now obsolete;
  - `text`: with a maximum size of 65535B. Now obsolete;
  - `mediumtext`: with a maximum size of 16777215B;
  - `longtext`: with a maximum size of 4294967295B.

  If you try to insert a larger test, it will be truncated. If you sort `text` data, only the first 1024 bytes are considered. These data types are unique to MySQL.

- Numbers: in MySQL, they can be signed or unsigned. The available types are:
  - `tinyint`: from -128 to 127 or from 0 to 255;
  - `smallint`: from -32768 to 32767 or from 0 to 65535;
  - `mediumint`: from −8388608 to 8388607 or from 0 to 16777215;
  - `int`: from −2147483648 to 2147483647 or from 0 to 4294967295;
  - `bigint`: from -2^63 to 2^63-1 or from 0 to 2^64-1.

  Floating point numbers, on the other hand, can be:
  - `float(p, s)`: with a range from −3.402823466E+38 to −1.175494351E-38 and from 1.175494351E-38 to 3.402823466E+38;
  - `double(p, s)`: with a range from −1.7976931348623157E+308 to −2. 2250738585072014E-308 and from 2.2250738585072014E-308 to 1.7976931348623157E+308.
    With floating point numbers, it is also possible to specify the precision `p` and scale `s`, but these values are not required.

- Dates and time: the available types are:
  - `date`: with default format `YYYY-MM-DD`, with a range from January 1, 1000 to December 31, 9999;
  - `datetime`: with default format `YYYY-MM-DD HH:MI:SS`, with a range from midnight on January 1, 1000 to midnight on December 31, 9999;
  - `timestamp`: same as `datetime` but with a range from midnight on January 1, 1970 to 22:14:07.999 on January 18, 2038;
  - `year`: with format `YYYY`, with range 1901 to 2155;
  - `time`: with format `HHH:MI:SS`, with range -838:59:59 to 838:59:59.
    To enter a value in these types, you must provide a string in the specified format.
    ![](/SQL/4.png)

### Creating a table

When creating a table, it is a good idea to note down:

- What you want to save;
- The types of data needed to represent what you want to save;
- The values available for these types of data.
  Once this is done, the concept of _normalization_ is applied: duplicate values or composite keys are removed from the table. For example, first names are separated from last names, instead of having a single column for both.

  In this step, you can add a column containing the primary key of the row, in most cases an unsigned integer. A table for storing data about people could be:

  ![](/SQL/5.png)

The MySQL command to create this table is therefore:

```sql
CREATE TABLE person
 (person_id SMALLINT UNSIGNED,
  fname VARCHAR(20),
  lname VARCHAR(20),
  eye_color CHAR(2),
  birth_date DATE,
  street VARCHAR(30),
  city VARCHAR(20),
  state VARCHAR(20),
  country VARCHAR(20),
  postal_code VARCHAR(20),
  CONSTRAINT pk_person PRIMARY KEY (person_id)
);
```

To ensure that the eyes can only take on the colors `BR`, `BL`, or `GR`, you can:

- Create a check: MySQL allows this operation but does not enforce it;
  ```sql
  eye_color CHAR(2) CHECK (eye_color IN(`BR`, `BL`, `GR`)),
  ```
- An `ENUM` is created.
  ```sql
  eye_color ENUM(`BR`, `BL`, `GR`),
  ```

Once the command has been entered, MySQL will return `Query OK` and the number of rows affected (obviously 0).
You can obtain a description of the parameters of the `person` table with the command:

```sql
desc person;
```

Where:

- First column `Field`: shows the name of the field;
- Second column `Type`: shows the type;
- Third column `Null`: specifies whether the field can be empty or not;
- Fourth column `Key`: specifies whether the field is a _primary key_ or a _foreign key_;
- Fifth column `Default`: specifies whether the field has a default value, if none is provided;
- Sixth column `Extra`: shows other information relevant to the column.

### Populate and edit tables

Data is inserted using the `INSERT` statement. The statement requires the name of the table where the data is to be inserted, the names of the columns to be populated, and the values to be inserted.
The values in the primary keys of a table can be generated:

- Adding one to the key with the highest value: complicated, however, when two users create a new entry at the same time;
- Leaving the choice of value to the database.

MySQL has an _auto-increment_ function where the database takes care of incrementing the value. To modify the `person` database so that it uses auto-increment, write:

```sql
ALTER TABLE person MODIFY person_id SMALLINT UNSIGNED AUTO_INCREMENT;
```

You can see if a primary key has auto-increment by looking at the `Extra` column of `desc`.

Data insertion with `INSERT` is done with:

```sql
INSERT INTO person
  (person_id, fname, lname, eye_color, birth_date)
  VALUES (null, 'William', 'Turner', 'BR', '1972-05-27');
```

If the operation is successful, the following message will appear: `Query OK, 1 row affected`. You can verify that the row has been correctly inserted with:

```sql
SELECT person_id, fname, lname, birth_date FROM person
```

Note that the primary key will be `1`. To view all entries that have `person_id = 1`, write:

```sql
SELECT (person_id, lname, fname, birth_date)
  FROM person
  WHERE person_id = 1;
```

You can export the contents of a database to XML format with the command:

```shell
mysql -u lrngsql -p --xml bank
```

To modify the data associated with `William Turner`, you must write:

```sql
UPDATE person
  SET street = '1225 Tremont St.',
    city = 'Boston',
    state = 'MA',
    country = 'USA',
    postal_code = '02138'
  WHERE person_id = 1;
```

You could also specify `WHERE person_id < 10` to modify all persons with an ID less than 10.
Data is deleted from the table using:

```sql
DELETE FROM person
  WHERE person_id = 1;
```

Some errors that may occur when executing these commands are:

- Entering a non-unique primary key: if you try to enter a non-unique key (specifying the value 1 in `VALUES`), MySQL returns `ERROR 1062 (23000): Duplicate entry ‘1’ for key ‘PRIMARY’`;
- Foreign key does not exist: if a table contains a column `CONSTRAINT fk_fav_food_person_id FOREIGN KEY (person_id)` and you insert an ID that is not present in the `person` table, MySQL will return: `ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (‘sakila’.'favorite_food', CONSTRAINT ‘fk_fav_food_person_id’ FOREIGN KEY (‘person_id’) REFERENCES ‘person’ (‘person_id’));
- Violation of possible values: if you try to set an eye color that is not allowed, for example `ZZ`, MySQL returns: `ERROR 1265 (01000): Data truncated for column ‘eye_color’ at row 1`;
- Date entered the wrong format: if the string containing the date is formatted incorrectly, MySQL will return: `ERROR 1292 (22007): Incorrect date value: ‘DEC-21-1980’ for column ‘birth_date’ at row 1`.

## Query Primer
