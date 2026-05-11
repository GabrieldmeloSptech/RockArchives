var dashModel = require("../models/dashModel")




function listarPontuacao(req, res) {
    dashModel.pontuacao_bandas().then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function tentativas(req, res) {
    dashModel.tentativas().then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function somakpi(req,res){
    dashModel.somakpi().then(function(resultado) {
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage)
})
}

function partidaskpi(req,res) {
    dashModel.partidaskpi().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage)
    })
}

module.exports = {
    listarPontuacao,
    tentativas,
    somakpi,
    partidaskpi
}