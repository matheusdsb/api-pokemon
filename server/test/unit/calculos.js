const chai = require('chai');
const { calculaPorcentagem, retornaIndexAleatorio } = require('../../src/helpers/calculo.helper');

describe('Cálculos', () => {
    it('Cálculo de porcentagem - espera 60', () => {
        const amostragem = 30
        const total = 50

        const porcentagem = calculaPorcentagem(amostragem, total)
        chai.expect(porcentagem).to.equal(60)
    })

    it('Sorteio de index no array - espera ser um índice existente', () => {
        const array = [1,1,1,2,2,4,5]
        const indexSorteado = retornaIndexAleatorio(array)

        chai.expect(indexSorteado).to.greaterThan(-1)
        chai.expect(indexSorteado).to.lessThan(array.length)
    })    
})