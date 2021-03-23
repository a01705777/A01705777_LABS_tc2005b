-- Rafael Hinojosa López 
-- A01705777

/*
Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

/*La suma de las cantidades e 
importe total de todas las entregas realizadas durante el 97. */

SELECT SUM(Cantidad) as 'Cantidad Total', SUM(Cantidad * (Costo + Costo *PorcentajeImpuesto)) as 'Importe Total'
FROM Materiales M INNER JOIN Entregan E ON E.Clave = M.Clave
WHERE YEAR(Fecha) = 1997;


/*
Para cada proveedor, obtener la razón social del proveedor, 
número de entregas e importe total de las entregas realizadas.
*/
SELECT P.RazonSocial AS 'Proveedor', COUNT(E.RFC) AS 'Numero entregas', SUM(E.Cantidad*M.Costo +  (M.Costo * M.PorcentajeImpuesto / 100)) AS 'Importe total'
FROM Materiales M, Proveedores P, Entregan E
WHERE P.RFC = E.RFC AND M.Clave = E.Clave	
GROUP BY P.RazonSocial


/*
Por cada material obtener la clave y descripción del material, 
la cantidad total entregada, la mínima cantidad entregada, 
la máxima cantidad entregada, el importe total de las entregas de 
aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.
*/
SELECT E.Clave, Descripcion, SUM(Cantidad) as 'Cantidad Total Entregada', 
MIN(Cantidad) as 'Mínima Cantidad Entregada', MAX(Cantidad) as 'Máxima Cantidad Entregada', 
SUM(Cantidad * (Costo + Costo * PorcentajeImpuesto/100)) as 'Importe Total'
FROM Materiales M INNER JOIN Entregan E ON M.Clave = E.Clave
GROUP BY E.Clave, Descripcion
HAVING AVG(Cantidad) > 400

/*
Para cada proveedor, indicar su razón social y mostrar la cantidad 
promedio de cada material entregado, detallando la clave y descripción 
del material, excluyendo aquellos proveedores para los que la cantidad 
promedio sea menor a 500.
*/
SELECT P.RazonSocial AS 'Proveedor', AVG(E.Cantidad) AS 'Cantidad_promedio', M.Clave, M.descripcion
FROM Materiales M, Proveedores P, Entregan E
WHERE P.RFC = E.RFC AND M.Clave = E.Clave
GROUP BY P.RazonSocial, M.Clave, M.descripcion
HAVING AVG(E.Cantidad) > 500


/*
Mostrar en una sola consulta los mismos datos que en la consulta 
anterior pero para dos grupos de proveedores: aquellos para los que la 
cantidad promedio entregada es menor a 370 y aquellos para los que la 
cantidad promedio entregada sea mayor a 450.
*/
SELECT P.RazonSocial AS 'Proveedor', AVG(E.Cantidad) AS 'Cantidad_promedio', M.Clave, M.descripcion
FROM Materiales M, Proveedores P, Entregan E
WHERE P.RFC = E.RFC AND M.Clave = E.Clave
GROUP BY P.RazonSocial, M.Clave, M.descripcion
HAVING AVG(E.Cantidad) < 370 OR AVG(E.Cantidad) > 450

/*
Considerando que los valores de tipos CHAR y VARCHAR deben ir encerrados entre apóstrofes, los valores numéricos se escriben directamente y los de fecha, 
como '1-JAN-00' para 1o. de enero del 2000, inserta cinco nuevos materiales.
*/
INSERT INTO Materiales VALUES(1440, 'Cemento Gris 50kg', 185)
INSERT INTO Materiales VALUES(1450, 'Calidra 25kg', 70)
INSERT INTO Materiales VALUES(1460, 'Yeso Blanco 30kg', 65)
INSERT INTO Materiales VALUES(1470, 'Granito', 45)
INSERT INTO Materiales VALUES(1480, 'Adoquín Rojo', 20)

/*Clave y descripción de los materiales que nunca han sido entregados.*/
SELECT M.Clave, Descripcion
FROM Materiales M
LEFT JOIN Entregan E
ON M.Clave = E.Clave
WHERE E.Clave IS NULL


/* 
Razón social de los proveedores que han realizado entregas tanto al proyecto 
'Vamos México' como al proyecto 'Querétaro Limpio'.
*/
SELECT RFC, RazonSocial 
FROM Proveedores 
WHERE Proveedores.RFC IN (
	SELECT RFC
	FROM Proyectos, Entregan 
	WHERE Proyectos.Numero = Entregan.Numero
	AND (Denominacion = 'Queretaro Limpio' OR Denominacion = 'Vamos Mexico')
)

/*
Descripción de los materiales 
que nunca han sido entregados al proyecto 'CIT Yucatán'.
*/
SELECT M.Descripcion
FROM Entregan E, Materiales M
WHERE M.Clave = E.Clave 
AND NOT E.Numero = (SELECT Numero FROM Proyectos WHERE Denominacion = 'CIT Yucatan')
GROUP BY M.descripcion

/*
Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al
promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.
*/
SELECT RazonSocial, AVG(Cantidad) as 'Cantidad Entregada Promedio'
FROM Proveedores P INNER JOIN Entregan E 
ON P.RFC = E.RFC
GROUP BY E.RFC, RazonSocial
HAVING AVG(Cantidad) > (SELECT AVG(Cantidad)
						FROM Entregan 
						WHERE RFC = 'VAGO780901' GROUP BY RFC)


/* RFC, razón social de los proveedores que participaron en el proyecto 
'Infonavit Durango' 
y cuyas cantidades totales entregadas en 2000 fueron mayores a las cantidades 
totales entregadas en el 2001. */
DROP VIEW VistaCant2000
DROP VIEW VistaCant2001

SELECT * FROM VistaCant2000
SELECT * FROM VistaCant2001

CREATE VIEW VistaCant2000 (Cantidad2000, RFC) 
AS 
	SELECT SUM(Cantidad), RFC 
	FROM Entregan	
	WHERE YEAR(Fecha) = 2000
	GROUP BY RFC;

CREATE VIEW VistaCant2001 (Cantidad2001, RFC)
AS 
	SELECT SUM(Cantidad), RFC
	FROM Entregan	
	WHERE YEAR(Fecha) = 2001
	GROUP BY RFC;

SELECT Proveedores.RFC, RazonSocial
FROM Proveedores, Proyectos, Entregan
WHERE Proveedores.RFC = Entregan.RFC
AND Proyectos.Numero = Entregan.Numero 
AND Denominacion = 'Infonavit Durango'
AND Proveedores.RFC IN (SELECT VistaCant2000.RFC
						FROM VistaCant2000, VistaCant2001
						WHERE Cantidad2000 > Cantidad2001);
