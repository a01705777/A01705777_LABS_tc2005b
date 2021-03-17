SET DATEFORMAT dmy -- especificar formato de la fecha  
BULK INSERT a1705777.a1705777.[Entregan]
	FROM 'e:\wwwroot\rcortese\entregan.csv'
	WITH
	(
	CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
	ROWTERMINATOR = '\n'
    );

SELECT * FROM Entregan
