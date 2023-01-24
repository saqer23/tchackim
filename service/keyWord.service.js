const keyWordRepository  = require('../repository/keyWord.repository');

class KeyWordService {

    constructor() {}

    async getKeyWords() {
        return await keyWordRepository.getKeyWords();
    }

    async createKeyWord(keyWord) {
        return await keyWordRepository.createKeyWord(keyWord);
    }

    async updateKeyWord(keyWord) {
        return await keyWordRepository.updateKeyWord(keyWord);
    }

    async deleteKeyWord(keyWordId) {
        return await keyWordRepository.deleteKeyWord(keyWordId);
    }

    async getKeyWord(keyWordId) {
        return await keyWordRepository.getKeyWord(keyWordId);
    }
}

module.exports = new KeyWordService();