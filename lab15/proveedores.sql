BULK INSERT a1705777.a1705777.[Proveedores]
	FROM 'e:\wwwroot\rcortese\proveedores.csv'
	WITH
	(
	CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
	ROWTERMINATOR = '\n'
    );

SELECT * FROM Proveedores