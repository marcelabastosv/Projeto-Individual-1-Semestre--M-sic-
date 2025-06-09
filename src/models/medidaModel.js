var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = `SELECT Genero,count(idResultado_Usuario) AS totalGenero FROM Quiz_Resultado_Usuario GROUP BY Genero;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `SELECT Genero,count(idResultado_Usuario) AS totalGenero FROM Quiz_Resultado_Usuario GROUP BY Genero;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarkpisDash(idUsuario){
        var instrucaoSql = ` SELECT
    (SELECT COUNT(*) FROM Quiz_Resultado_Usuario) AS totalUsuarios,
    (SELECT Genero FROM Quiz_Resultado_Usuario GROUP BY Genero ORDER BY COUNT(*) ASC LIMIT 1) AS menorGenero,
    (SELECT Genero FROM Quiz_Resultado_Usuario GROUP BY Genero ORDER BY COUNT(*) DESC LIMIT 1) AS maiorGenero,
    (SELECT Genero FROM Quiz_Resultado_Usuario WHERE fkUsuario = ${idUsuario} LIMIT 1) AS generoUsuario;`
    
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
    buscarkpisDash,
    buscarfkUsuario
}
