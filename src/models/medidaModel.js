var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT Genero,count(idResultado_Usuario) FROM Quiz_Resultado_Usuario GROUP BY Genero;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `SELECT Genero,count(idResultado_Usuario) FROM Quiz_Resultado_Usuario GROUP BY Genero;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarkpis(){
        var instrucaoSql = `SELECT 
     (SELECT count(idResultado_Usuario) FROM Quiz_Resultado_Usuario) AS totalUsuarios,
     (SELECT MIN(Genero) FROM Quiz_Resultado_Usuario) AS menorGenero,
     (SELECT MAX(Genero) FROM Quiz_Resultado_Usuario) AS maiorGenero,
     (SELECT Genero FROM Quiz_Resultado_Usuario WHERE fkUsuario = ${idUsuario}) AS generoUsuario;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarfkUsuario(idUsuario) {
    var instrucaoSql = `SELECT idUsuario FROM Usuario JOIN Quiz_Resultado_Usuario WHERE fkUsuario = ${idUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarkpis,
    buscarfkUsuario
}
