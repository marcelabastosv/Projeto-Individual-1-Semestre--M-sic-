CREATE DATABASE Masic;
USE Masic;

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY auto_increment,
NomeUsuario VARCHAR(125),
Email VARCHAR(255),
Genero_Favorito VARCHAR(45),
Senha VARCHAR(45)
);

CREATE TABLE Quiz_Resultado_Usuario(
idResultado_Usuario INT PRIMARY KEY auto_increment,
nPergunta INT,
Genero VARCHAR(45)
);

CREATE TABLE Quiz_Sessao_Usuario(
idQuiz_S_U INT auto_increment,
fkUsuario INT,
fkResposta INT,
dt_inicio DATETIME, 
dt_encerramento DATETIME,
PRIMARY KEY (idQuiz_S_U, fkUsuario, fkResposta),
CONSTRAINT chkUser FOREIGN KEY (fkUsuario)
references Usuario(idUsuario),
CONSTRAINT chkResp FOREIGN KEY (fkResposta)
references Quiz_Resultado_Usuario(idResultado_Usuario)
);


CREATE TABLE Recomendacao_Usuario(
idRecomendacao_Usuario INT PRIMARY KEY,
NomeMusica VARCHAR (45),
Cantor VARCHAR (45),
Descricao VARCHAR (355),
dtHora DATETIME DEFAULT current_timestamp,
fkUsuarioRem INT,
CONSTRAINT chkRU FOREIGN KEY (fkUsuarioRem)
references Usuario(idUsuario)
);



