DROP DATABASE IF EXISTS `labs_tc2005b`;
CREATE DATABASE `labs_tc2005b`; 
 
SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;


IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Usuario')
DROP TABLE   Usuario

-- Usuario
CREATE TABLE Usuario (
    id_usuario INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(32),
    edad INT, 
    imagen VARCHAR(1200),

    PRIMARY KEY(id_usuario)
);

INSERT INTO Usuario (id_usuario, nombre, edad, imagen) VALUES('1', 'Spiderman', '19', 'https://imagenes.20minutos.es/files/article_amp/uploads/2020/11/28/spiderman.jpeg');
INSERT INTO Usuario (id_usuario, nombre, edad, imagen) VALUES('3', 'Capitán América', '89', 'https://www.tonica.la/__export/1586802483581/sites/debate/img/2020/04/13/captain_america_portada.jpg_423682103.jpg');
INSERT INTO Usuario (id_usuario, nombre, edad, imagen) VALUES('4', 'Iron Man', '41', 'https://flxt.tmsimg.com/assets/p170620_p_v10_an.jpg');

