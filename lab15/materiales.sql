BULK INSERT a1705777.a1705777.[Materiales]
	FROM 'e:\wwwroot\rcortese\materiales.csv'
	WITH
	(
	CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
	ROWTERMINATOR = '\n'
    );

SELECT * FROM Materiales