
ORM back end Ecommerce

GIVEN a functional Express.js API


WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize


WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data


WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database


WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON


WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database

![ExpressPic](https://github.com/seth20smith/eCom_backEnd_13/assets/91171134/17c46b7a-9aba-40a2-8482-6da710b6beff)


+--------------------+
| Database           |
+--------------------+
| employees          |
| information_schema |
| inventory_db       |
| mysql              |
| performance_schema |
| sys                |
+--------------------+

I used: MySQL, Express.js (Api), Insomnia, JSON.
