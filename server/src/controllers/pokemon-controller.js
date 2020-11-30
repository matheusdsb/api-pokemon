module.exports = {
    async listar(req, res) {
        try {              
            return res.json('listando pokemons')
        } catch(e) {
            res.status(400).send(e.message)
        }
    }    
}