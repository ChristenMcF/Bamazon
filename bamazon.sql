DROP DATABASE IF EXISTS Bamazon_db;
CREATE DATABASE Bamazon_db;
USE Bamazon_db;
CREATE TABLE Products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(20) NOT NULL,
  price DECIMAL(5,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (id)
);
insert into Products (product_name, department_name, price, stock_quantity) values (
'Saucony Kinvara 8',
'Athletic Shoes',
'110.00',
15);

insert into Products (product_name, department_name, price, stock_quantity) values (
'Apple iPad Pro',
'Electronics',
'899.99',
6);

insert into Products (product_name, department_name, price, stock_quantity) values (
'Garmin Running Watch',
'Electronics',
'599.99',
11);

insert into Products (product_name, department_name, price, stock_quantity) values (
'Queen Size Comforter',
'Home',
'89.99',
13);

insert into Products (product_name, department_name, price, stock_quantity) values (
'Nikon Camera Bag',
'Electronics',
'59.99',
25);

insert into Products (product_name, department_name, price, stock_quantity) values (
'Zip-up Hoodie',
'Clothing',
'35.99',
22);

