# Mongodb-project


This is our backend. You need front-end to run this project. Alternatively, use Postman to monitor the request and response.

### Step 1 – Clone this project to www or htdocs folder


git clone https://github.com/19wdwu07/Mongodb-project.git


### Step 2 – Install packages

npm i


### Step 3 – Mongodb

*You should have a mongodb account. The URI connection string needs username, password and cluster name with attached id. If not, create an account and get the uri string from https://www.mongodb.com/*

Copy the config-copy.json file and rename it to config.json and add your username, password and clustername with its id.

### Step 4 - Run the project

*You should have installed nodemon globally. if not run **npm install nodemon -g***

###### use the legacy version in vagrant set up
nodemon -L index.js


###### use this in non-vagrant set up
nodemon index.js


### Step 5 - To see the home page

192.168.33.10:3000/


### Step 6 - Endpoints

**Endpoints**       | **Description**             |**Acceptable values**| **Method**|
--------------------|-----------------------------|---------------------|-----------|
|/allProducts       | get all products from json file|                  | GET       |
|/products/p=       | get product by id from json file|number           | GET       |
|/registerUser      | post the new user to db     |                     | POST      |
|/allUSers          | get all users from db       |                     | GET       |
|/loginUser         | check for  existing  userto login |               | POST      |


### Step 7 - mongodb

To see data being posted, click on cluster->collections->shop->users
