CREATE DATABASE jazida;
GO

CREATE TABLE jazida.dbo.Pokemons (
	id int IDENTITY(1,1) PRIMARY KEY,
	iipo nvarchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	treinador nvarchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS NOT NULL,
	nivel int NOT NULL
); 
GO
