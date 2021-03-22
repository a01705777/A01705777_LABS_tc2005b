SET Dateformat dmy;
SELECT SUM(Cantidad) as 'Total Cantidades', SUM(Costo + (Costo * PorcentajeImpuesto / 100)) as 'Costo Total'
FROM Materiales, Entregan
WHERE Fecha <= '31/12/1997' AND Fecha >= '01/01/1997'

/*

Materiales(Clave, Descripción, Costo, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)

Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada 
material entregado, detallando la clave y descripción del material, 
excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.
*/

SELECT RazonSocial, AVG(Cantidad) as 'Cantidad Promedio', 
FROM Proveedores, Entregan, Materiales
GROUP BY Cantidad