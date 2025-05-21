CREATE DATABASE Masic; 
USE Masic;

CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    NomeUsuario VARCHAR(125),
    Email VARCHAR(255),
    Genero_Favorito VARCHAR(45),
    Senha VARCHAR(45)
);

CREATE TABLE Quiz_Resultado_Usuario (
    idResultado_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    Genero VARCHAR(45),
    fkUsuario INT UNIQUE,
        FOREIGN KEY (fkUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Recomendacao_Usuario (
    idRecomendacao_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    NomeMusica VARCHAR(45),
    Cantor VARCHAR(45),
    Descricao VARCHAR(355),
    dtHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkUsuarioRem INT,
    CONSTRAINT chkRU FOREIGN KEY (fkUsuarioRem)
        REFERENCES Usuario(idUsuario)
);

