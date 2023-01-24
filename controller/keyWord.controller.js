const keyWordService  = require('../service/keyWord.service.js');


class KeyWordController {

    async getKeyWords() {
        return await keyWordService.getKeyWords();
    }

    async createKeyWord(keyWord) {
        return await keyWordService.createKeyWord(keyWord);
    }

    async updateKeyWord(keyWord) {
        return await keyWordService.updateKeyWord(keyWord);
    }

    async deleteKeyWord(keyWordId) {
        return await keyWordService.deleteKeyWord(keyWordId);
    }

    async getKeyWord(keyWordId) {
        return await keyWordService.getKeyWord(keyWordId);
    }
}
module.exports = new KeyWordController();