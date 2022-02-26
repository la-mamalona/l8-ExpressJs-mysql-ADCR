CREATE DATABASE plat_web;

USE plat_web;

CREATE TABLE artists (
  id int primary key auto_increment,
  name varchar(50)
);

INSERT INTO artists (name) values("Mac Quayle");

CREATE TABLE songs (
  id int primary key auto_increment,
  name varchar(100),
  id_artist int, 
  foreign key (id_artist) references artists(id)
);

INSERT INTO songs (name, id_artist) values ("3.1_5-sandbox.dts", 1);
