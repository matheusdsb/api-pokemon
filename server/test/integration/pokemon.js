const chai = require('chai');
const chaiHttp = require('chai-http');
const {POKEMON_VALIDO, POKEMON_INVALIDO} = require('./data.json');

chai.use(chaiHttp);
chai.should();

describe('Pokemon - Endpoints', () => {
    describe('POST /pokemons', () => {
        it ('deve retornar usuário criado - 200', done => {
            chai.request('http://localhost:3001')
            .post('/pokemons')
            .send(POKEMON_VALIDO)
            .end((err, res) => {
                chai.assert.isNull(err)
                chai.assert.isNotEmpty(res.body)
                res.should.have.status(200)            
                res.body.should.have.property('id')
                res.body.should.have.property('treinador')
                res.body.should.have.property('nivel').equal(1)
                done()
            });
        });
        it ('deve retornar lista de pokemons - 200', done => {
            chai.request('http://localhost:3001')
            .get('/pokemons')
            .send()            
            .end((err, res) => {
                chai.assert.isNull(err)
                chai.assert.isNotEmpty(res.body)
                res.should.have.status(200)
                done()
            });
        });
        it ('deve retornar treinador inválido - 400', done => {
            chai.request('http://localhost:3001')
            .post('/pokemons')
            .send(POKEMON_INVALIDO)
            .end((err, res) => {
                res.should.have.status(400)
                done()
            });
        });
    });
});