var database = require("../database/config");

function listar() {
    console.log("ACESSEI O MODEL listar()");
    var instrucaoSql = `
        SELECT 
            r.idRecomendacao_Usuario AS idRecomendacao,
            r.NomeMusica,
            r.Cantor,
            r.Descricao,
            r.dtHora,
            r.fkUsuarioRem,
            u.idUsuario,
            u.NomeUsuario,
            u.Email,
            u.Senha
        FROM Recomendacao_Usuario r
         JOIN Usuario u
            ON r.fkUsuarioRem = u.idUsuario ORDER BY dtHora DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O MODEL pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            r.idRecomendacao_Usuario AS idRecomendacao,
            r.NomeMusica,
            r.Cantor,
            r.Descricao,
            r.dtHora,
            r.fkUsuarioRem,
            u.idUsuario,
            u.NomeUsuario,
            u.Email,
            u.Senha
        FROM Recomendacao_Usuario r
         JOIN Usuario u
            ON r.fkUsuarioRem = u.idUsuario
        WHERE r.Descricao LIKE '%${texto}%';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O MODEL listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            r.idRecomendacao_Usuario AS idRecomendacao,
            r.NomeMusica,
            r.Cantor,
            r.Descricao,
            r.dtHora,
            r.fkUsuarioRem,
            u.idUsuario,
            u.NomeUsuario,
            u.Email,
            u.Senha
        FROM Recomendacao_Usuario r
         JOIN Usuario u
            ON r.fkUsuarioRem = u.idUsuario
        WHERE u.idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(nomeMusica, cantor, descricao, idUsuario) {
    console.log("ACESSEI O MODEL publicar(): ", nomeMusica, cantor, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO Recomendacao_Usuario (NomeMusica, Cantor, Descricao, fkUsuarioRem) 
        VALUES ('${nomeMusica}', '${cantor}', '${descricao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar
}
