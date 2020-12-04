const { retornaIndexAleatorio } = require('../helpers/calculo.helper')
const Lutador = require('./lutador')

function populaArray(lutadorA, lutadorB) {
    return [
        ...Array.from({length: lutadorA.probabilidadeVencer}, () => lutadorA.id),
        ...Array.from({length: lutadorB.probabilidadeVencer}, () => lutadorB.id)
    ]
}

function sortearIndexVencedor(lutadorA, lutadorB) {
    const candidatos = populaArray(lutadorA, lutadorB)    
    const indexSorteado = retornaIndexAleatorio(candidatos)
    return candidatos[indexSorteado]
}

class Batalha {

    constructor(pokemonA, pokemonB) {
        this.lutadorA = new Lutador(pokemonA)
        this.lutadorB = new Lutador(pokemonB)
    };

    batalhar() {
        const totalAmostragem = this.lutadorA.nivel + this.lutadorB.nivel
        
        this.lutadorA.calculaProbabilidadeVencer(totalAmostragem)
        this.lutadorB.calculaProbabilidadeVencer(totalAmostragem)
        
        const idSorteado = sortearIndexVencedor(this.lutadorA, this.lutadorB)

        if(idSorteado == this.lutadorA.id) {
            return {
                vencedor: this.lutadorA.pokemon,
                perdedor: this.lutadorB.pokemon,
            }
        } else  {
            return {
                vencedor: this.lutadorB.pokemon,
                perdedor: this.lutadorA.pokemon,
            }
        }
    }
}

module.exports = Batalha;