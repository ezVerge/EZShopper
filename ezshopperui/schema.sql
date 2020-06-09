USE master;

IF EXISTS (SELECT * FROM sys.databases WHERE name = N'ezshopper')
BEGIN
  	DROP DATABASE ezshopper;
	IF @@ERROR = 0 PRINT 'Dropped ezshopper';
END;

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = N'ezshopper')
BEGIN
	CREATE DATABASE ezshopper;
	IF @@ERROR = 0 PRINT 'Created ezshopper';
END;

GO

USE ezshopper;

IF NOT EXISTS (SELECT * FROM SYSOBJECTS WHERE name = 'user' AND xtype='U')
BEGIN
	CREATE TABLE [user] (
		id INT IDENTITY(1, 1) PRIMARY KEY,
		username NVARCHAR(200),
		[password] NVARCHAR(255),
		[name] NVARCHAR(50),
		preferredStoreId INT,
		joined DATETIME2,
		[enabled] BIT
	);
	IF @@ERROR = 0 PRINT 'Created table user';
END

IF NOT EXISTS (SELECT * FROM SYSOBJECTS WHERE name = 'state' AND xtype='U')
BEGIN
	CREATE TABLE [state] (
		id INT IDENTITY(1, 1) PRIMARY KEY,
		code NVARCHAR(2),
		[name] NVARCHAR(50)
	);
	IF @@ERROR = 0 PRINT 'Created table state';
END

IF NOT EXISTS (SELECT * FROM SYSOBJECTS WHERE name = 'store' AND xtype='U')
BEGIN
	CREATE TABLE store (
		id INT IDENTITY(1, 1) PRIMARY KEY,
		[name] NVARCHAR(50),
		street NVARCHAR(50),
		city NVARCHAR(50),
		stateId INT,
		zip NVARCHAR(9),
		userId INT,
		totalAisles INT,
		CONSTRAINT fk_store_state FOREIGN KEY (stateId) REFERENCES [state] (id),
		CONSTRAINT fk_store_user FOREIGN KEY (userId) REFERENCES [user] (id)
	);
	IF @@ERROR = 0 PRINT 'Created table store';
END

IF NOT EXISTS (SELECT * FROM SYSOBJECTS WHERE name = 'aisle' AND xtype='U')
BEGIN
	CREATE TABLE aisle (
		id INT IDENTITY(1, 1) PRIMARY KEY,
		item NVARCHAR(50),
		aisle INT,
		storeId INT,
		CONSTRAINT fk_aisle_store FOREIGN KEY (storeId) REFERENCES store (id)
	);
	IF @@ERROR = 0 PRINT 'Created table aisle';
END

IF NOT EXISTS (SELECT * FROM SYSOBJECTS WHERE name = 'dept' AND xtype='U')
BEGIN
	CREATE TABLE dept (
		id INT IDENTITY(1, 1) PRIMARY KEY,
		[name] NVARCHAR(50),
		grocery BIT,
		storeId INT,
		CONSTRAINT fk_dept_store FOREIGN KEY (storeId) REFERENCES store (id)
	);
	IF @@ERROR = 0 PRINT 'Created table dept';
END

IF NOT EXISTS (SELECT * FROM SYSOBJECTS WHERE name = 'item' AND xtype='U')
BEGIN
	CREATE TABLE item (
		id INT IDENTITY(1, 1) PRIMARY KEY,
		item NVARCHAR(50),
		aisle INT,
		userId INT,
		storeId INT,
		deptId INT,
		CONSTRAINT fk_item_user FOREIGN KEY (userId) REFERENCES [user] (id),
		CONSTRAINT fk_item_store FOREIGN KEY (storeId) REFERENCES store (id),
		CONSTRAINT fk_item_dept FOREIGN KEY (deptId) REFERENCES dept (id)
	);
	IF @@ERROR = 0 PRINT 'Created table item';
END

IF NOT EXISTS (SELECT * FROM SYSOBJECTS WHERE name = 'path' AND xtype='U')
BEGIN
	CREATE TABLE [path] (
		id INT IDENTITY(1, 1) PRIMARY KEY,
		aisle INT,
		[sequence] INT,
		deptId INT,
		storeId INT,
		CONSTRAINT fk_path_dept FOREIGN KEY (deptId) REFERENCES dept (id),
		CONSTRAINT fk_path_store FOREIGN KEY (storeId) REFERENCES store (id)
	);
	IF @@ERROR = 0 PRINT 'Created table path';
END

IF NOT EXISTS (SELECT * FROM SYSOBJECTS WHERE name = 'list' AND xtype='U')
BEGIN
	CREATE TABLE list (
		id INT IDENTITY(1, 1) PRIMARY KEY,
		quantity INT,
		[name] NVARCHAR(50),
		comments NVARCHAR(MAX),
		added DATETIME2,
		active BIT,
		userId INT,
		storeId INT,
		CONSTRAINT fk_list_user FOREIGN KEY (userId) REFERENCES [user] (id),
		CONSTRAINT fk_list_store FOREIGN KEY (storeId) REFERENCES store (id),
	);
	IF @@ERROR = 0 PRINT 'Created table list';
END

SET NOCOUNT ON;

IF NOT EXISTS (SELECT * FROM [user] WHERE username = 'steveverge@gmail.com')
BEGIN
	INSERT INTO [user] (username, [password], [name], preferredStoreId, joined, [enabled])
	VALUES ('steveverge@gmail.com', 'stevev', 'Steve', 1, CONVERT(DATETIME2, '1968-11-18'), 1);
	IF @@ERROR = 0 PRINT 'Inserted initial user';
END
