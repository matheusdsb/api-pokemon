const chai = require('chai');
const Batalha = require("../../src/objetos/batalha")

describe('Batalha', () => {
    it('Batalhar - deve retornar vencedor e perdedor', () => {
        const pokemonA = {
             id: 1, 
             tipo: 'pikachu', 
             treinador: 'João',
             nivel: 10
        }

        const pokemonB = {
            id: 2, 
            tipo: 'mewtwo', 
            treinador: 'Paulo',
            nivel: 4
        }        

        const batalha = new Batalha(pokemonA, pokemonB)
        const resultado = batalha.batalhar()

        chai.expect(resultado).to.have.property('vencedor')
        chai.expect(resultado).to.have.property('perdedor')
    })
})