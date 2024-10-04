const repositoryDeck = require('../repositories/repositoryDeck');
const containsSpecialCharacters = require('../utils/validation')

class serviceDeck{
    async getDeck(){
        return repositoryDeck.findAll();
    }

    async createDeck(text){
        if(Deck.Descricao.lenght < 30 || Deck.Descricao.lenght > 300){
            throw new Error('Descrição deve ter de 30 a 300 caracteres');
        }

        if(Deck.NomeDoDeck.lenght > 60){
            throw new Error('Nome do deck deve conter até 60 caracteres ');
        }

        return repositoryDeck.createDeck({deck});
    }
    
}

module.exports = new serviceDeck();