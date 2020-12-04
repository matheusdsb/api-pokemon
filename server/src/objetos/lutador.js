const { calculaPorcentagem } = require('../helpers/calculo.helper')

class Lutador{

    PROBABILIDADE_MINIMA = 1

    constructor(pokemon) {
        this.pokemon = pokemon
        this.probabilidadeVencer = 0
    }

    get nivel() {
        return this.pokemon.nivel
    }

    get id() {
        return this.pokemon.id
    }
    
    calculaProbabilidadeVencer(totalAmostragem) {
        const porcentagem = calculaPorcentagem(this.nivel, totalAmostragem)
        
        this.probabilidadeVencer = porcentagem > this.PROBABILIDADE_MINIMA ? 
            Math.round(porcentagem) : 
            this.PROBABILIDADE_MINIMA
    }
}

module.exports = Lutador;