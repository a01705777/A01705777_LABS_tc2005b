SELECT * FROM Materiales

-- Selección
SELECT * 
FROM Materiales 
WHERE Clave = 1000

--Proyeccion
SELECT Clave, RFC, Fecha
FROM Entregan

--Reunion Natural 
SELECT * 
FROM Materiales, Entregan
WHERE Materiales.Clave = Entregan.Clave

-- Reunión con criterio específico
SELECT *
FROM Entregan, Proyectos
WHERE Entregan.Numero <= Proyectos.Numero

--Unión (se ilustra junto con selección)
SELECT *
FROM Entregan 
WHERE Clave = 1450
UNION
SELECT * 
FROM Entregan
WHERE Clave = 1300

-- Misma consulta sin union con OR 
SELECT *
FROM Entregan 
WHERE Clave = 1450 OR Clave = 1300

-- Interseccion
(SELECT clave 
FROM entregan 
WHERE numero=5001)
INTERSECT
(SELECT clave 
FROM entregan 
WHERE numero=5018)

-- Diferencia (se ilustra con selección )
SELECT Clave 
FROM Entregan 
WHERE Clave != 1000

-- Producto Cartesiano
SELECT *
FROM Entregan, Materiales

-- Construcción de consultas a partir de una especificación
SET DATEFORMAT dmy
SELECT Descripcion, Fecha
FROM Materiales, Entregan
WHERE Fecha <= '31/12/2000' AND Fecha >= '01/01/2000'

-- Disctint
SET DATEFORMAT dmy
SELECT DISTINCT Descripcion, Fecha
FROM Materiales, Entregan
WHERE Fecha <= '31/12/2000' AND Fecha >= '01/01/2000'

-- Ordenamientos
SELECT P.Numero, Denominacion, Fecha, Cantidad
FROM Proyectos as P, Entregan
ORDER BY P.Numero ASC, Fecha DESC

-- Uso de expresiones

-- Operadores de cadena
SELECT * 
FROM Materiales
WHERE Descripcion LIKE 'Si%'

-- Declare
DECLARE @foo varchar(40); 
DECLARE @bar varchar(40);
SET @foo = '¿Que resultado';
SET @bar = '¿¿¿???';
SET @foo += 'obtienes?';
PRINT @foo + @bar;

SELECT RFC FROM Entregan WHERE RFC LIKE '[A-B]%';
SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';
SELECT Numero FROM Entregan WHERE Numero LIKE '___6';

-- Operadores compuestos
-- +=, -=, *=, /=, %=

-- Operadores logicos
SELECT Clave, RFC, Numero, Fecha, Cantidad
FROM Entregan
WHERE Numero Between 5000 AND 5010;

set dateformat dmy;
SELECT Clave, RFC, Numero, Fecha, Cantidad
FROM Entregan
WHERE Fecha Between '01/01/2000' AND '31/12/2000';

-- Exists
SELECT RFC, Cantidad, Fecha, Numero
FROM [Entregan]
WHERE [Numero] Between 5000 AND 5010 AND 
EXISTS (SELECT [RFC] 
		FROM [Proveedores]
		WHERE RazonSocial LIKE 'La%' 
			AND [Entregan].[RFC] = [Proveedores].[RFC])

-- IN esta mal
SELECT RFC, Cantidad, Fecha, Numero
FROM [Entregan]
WHERE [Numero] Between 5000 AND 5010 AND 
IN (SELECT [RFC] 
		FROM [Proveedores]
		WHERE RazonSocial LIKE 'La%' 
			AND [Entregan].[RFC] = [Proveedores].[RFC])

			
-- Ejercicios 
/* 1. Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos".*/
SELECT M.Clave, M.Descripcion
FROM Materiales as M, Entregan as E
WHERE M.Clave = E.Clave
AND E.Numero = (Select P.Numero 
				FROM Proyectos as P 
				WHERE Denominacion = 'Mexico sin ti no estamos completos')

/* 2. Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools".*/
SELECT M.Clave, M.Descripcion
FROM Materiales as M, Entregan as E
WHERE M.Clave = E.Clave 
AND E.RFC = (SELECT PR.RFC 
			 FROM Proveedores as PR
			 WHERE RazonSocial = 'Acme tools');

/* 3. El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales.*/
SET DATEFORMAT dmy;
SELECT RFC
FROM  Entregan 
WHERE Fecha BETWEEN '01/01/2000' AND '31/12/2000'
GROUP BY RFC
HAVING AVG(Cantidad) >= 300

/* 4. El Total entregado por cada material en el año 2000. */
SET DATEFORMAT dmy;
SELECT Clave, SUM(Cantidad) as 'Suma'
FROM Entregan 
WHERE Fecha BETWEEN '01/01/2000' AND '31/12/2000'
GROUP BY Clave 

/* 5. La Clave del material más vendido durante el 2001. */
Create view Sumas (Clave, Cantidad_Vendida)
AS (SELECT Clave, SUM(Cantidad)
	FROM Entregan	
	WHERE Fecha BETWEEN '01/01/2001' AND '31/12/2001'
	GROUP BY clave)

SELECT Clave
FROM Sumas
WHERE Cantidad_Vendida = (SELECT MAX(Cantidad_Vendida) 
						  FROM Sumas)


SELECT * FROM Materiales
SELECT * FROM Proveedores
SELECT * FROM Entregan
SELECT * FROM Proyectos


/* 6. Denominación y suma del total a pagar para todos los proyectos. */
--Falta...
-- Suma de cada entrega
SELECT E.Clave, RFC, Numero, Fecha, Cantidad, Cantidad * M.Costo
FROM Entregan as E, Materiales as M
WHERE E.Clave = M.Clave

