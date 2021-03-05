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

-- Ejercicio 2
INSERT INTO Materiales VALUES(1000, 'xxx' 1000)
 
-- No se pudo insertar porque la Clave = 1000 ya existe

DELETE FROM Materiales WHERE Clave = 1000 and Costo = 1000

-- No se elimino nada porque no existia ese registro

-- Hacer Clave PK 
ALTER TABLE Materiales ADD CONSTRAINT llaveMateriales PRIMARY KEY (Clave)

INSERT INTO Materiales values(1000, 'xxx', 1000)

sp_helpconstraint Materiales
-- El constraint es la PK llaveMateriales

ALTER TABLE Proyectos ADD CONSTRAINT llaveProyectos PRIMARY KEY (Numero)
ALTER TABLE Proveedores ADD CONSTRAINT llaveProveedores PRIMARY KEY (RFC)
ALTER TABLE Entregan ADD CONSTRAINT llavesEntregan PRIMARY KEY (Clave, RFC, Numero)

-- ALTER TABLE Entregan drop constraint llavesEntregan

--Ejercicio 3

INSERT INTO Entregan values (0, 'xxx', 0, '1-jan-02', 0) ;

--Particularidad: Son als que se insertaron pero no siguen el patron de las demas
--El sistema lo inserta tal como lo pedimos

DELETE FROM Entregan WHERE Clave = 0

ALTER TABLE Entregan add constraint cfentreganclave
FOREIGN KEY(Clave) REFERENCES Materiales (Clave);

-- INSERT INTO Entregan values (0, 'xxx', 0, '1-jan-02', 0) ;
-- Ya no se puede insertar por el constraint hecho

ALTER TABLE Entregan add constraint cfentreganrfc
FOREIGN KEY(RFC) REFERENCES Proveedores (RFC);

ALTER TABLE Entregan add constraint cfentregannumero
FOREIGN KEY(Numero) REFERENCES Proyectos (Numero);

SELECT * FROM Materiales
SELECT * FROM Proveedores
SELECT * FROM Entregan
SELECT * FROM Proyectos

sp_helpconstraint Materiales
sp_helpconstraint Proveedores
sp_helpconstraint Entregan
sp_helpconstraint Proyectos

-- Las columnas indican las llaves Primarias o Foraneas que la tabla tiene y en caso de ser 
-- foraneas, de donde se referencian

INSERT INTO Entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);
-- En GETDATE se puso la fecha y hora del momento en que se ejecuto el query
-- NO tiene sentido cantidad 0 porque seria hacer una entrega de nada. 

DELETE FROM Entregan WHERE Cantidad = 0

-- Evitar cantidades 0
ALTER TABLE Entregan add constraint cantidad check (cantidad > 0) ;

