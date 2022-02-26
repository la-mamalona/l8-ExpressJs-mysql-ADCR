# ExpressJs - MySql
This repository will enable us to learn how to connect a Mysql database to our expressJs api

## Install dependecies
```bash
cd backend
npm install
```

## Create database, schema and data
```bash
cd ../  
# At repository entry folder
mysql -h [HOST] -u [USER] -p < database/schema.sql
```
or connect to mysql and paste the contents of database/schema.sql

## Mysql troubleshooting
Where is my config file
mysqld --help --verbose
or 
mysql --help | grep -A 1 "Default options"

Add skip-grant-tables under [mysqld] block and save the changes.

restart mysql

mysql -u root

FLUSH PRIVILEGES;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyNewPass';

revert config

restart mysql
