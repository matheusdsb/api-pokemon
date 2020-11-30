const tiposPermitidos = ['charizard', 'mewtwo', 'pikachu'];

function carregarDadosRequest(body) {
    return {
        tipo: body.tipo,
        treinador: body.treinador
    }
}

function validarDadosCriacao(input) {
    validarInput(input)

    if(!input.tipo) {
        throw new Error('Tipo de pokemon não informado')
    }

    if(!tiposPermitidos.find(el => el === input.tipo)) {
        throw new Error('Tipo de pokemon informado não é pemitido. Os tipos permitidos são: "charizard", "mewtwo" ou "pikachu"')
    }

    validarTreinador(input)

    return true
}

function validarInput(input) {
    if(!input) {
        throw new Error('Dados de entrada não informados')
    }
    return true
}

function validarTreinador(input) {
    if(!input.treinador) {
        throw new Error('Treinador não informado')
    }

    if(input.treinador.length > 50) {
        throw new Error('O nome do Treinador deve possuir no máximo 50 caracteres')
    }
}

function validarDadosEdicao(input) {
    
    validarInput(input)

    return validarTreinador(input)    
}

module.exports = { tiposPermitidos, validarDadosCriacao, validarDadosEdicao, carregarDadosRequest  }