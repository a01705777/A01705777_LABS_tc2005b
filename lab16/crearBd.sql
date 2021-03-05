-- DROP TABLE Entregan, Materiales, Proyectos, Proveedores 

-- Crear tablas
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')
DROP TABLE Materiales

CREATE TABLE Materiales (
	Clave NUMERIC(5) NOT NULL, 
	Descripcion VARCHAR(50), 
	Costo NUMERIC(8, 2)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')
DROP TABLE Proveedores

CREATE TABLE Proveedores (
	RFC CHAR(13) NOT NULL, 
	RazonSocial VARCHAR(50)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')
DROP TABLE Proyectos

CREATE TABLE Proyectos (
	Numero NUMERIC(5) NOT NULL, 
	Denominacion VARCHAR(50)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')
DROP TABLE Entregan

CREATE TABLE Entregan (
	Clave NUMERIC(5) NOT NULL, 
	RFC CHAR(13) NOT NULL, 
	Numero NUMERIC(5) NOT NULL, 
	Fecha DateTime NOT NULL, 
	Cantidad NUMERIC(8, 2)
)


--Poblar tablas
BULK INSERT a1705777.a1705777.[Materiales]
  FROM 'e:\wwwroot\rcortese\materiales.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

BULK INSERT a1705777.a1705777.[Proyectos]
	FROM 'e:\wwwroot\rcortese\proyectos.csv'
	WITH
	(
	 CODEPAGE = 'ACP',
	 FIELDTERMINATOR = ',',
	 ROWTERMINATOR = '\n'
	)

BULK INSERT a1705777.a1705777.[Proveedores]
  FROM 'e:\wwwroot\rcortese\proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

 SET DATEFORMAT dmy -- especificar formato de la fecha
 BULK INSERT a1705777.a1705777.[Entregan]
  FROM 'e:\wwwroot\rcortese\Entregan.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

SELECT * FROM Materiales
SELECT * FROM Proveedores
SELECT * FROM Entregan
SELECT * FROM Proyectos