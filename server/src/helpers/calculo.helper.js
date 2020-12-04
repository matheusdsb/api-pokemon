function retornaIndexAleatorio(array) {	
	return Math.floor(Math.random() * array.length);
}

function calculaPorcentagem(amostragem, total) {	
	return (100 * amostragem) / total;
}

module.exports = { calculaPorcentagem, retornaIndexAleatorio }

