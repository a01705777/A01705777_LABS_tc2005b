BULK INSERT a1705777.a1705777.[Proyectos]
	FROM 'e:\wwwroot\rcortese\proyectos.csv'
	WITH
	(
	CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
	ROWTERMINATOR = '\n'
    );

	SELECT * FROM Proyectos