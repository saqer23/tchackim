const  KeyWord  = require('../model/KeyWord.model.js');

class KeyWordRepository {

    

    async getKeyWords() {
        const keyWords = await KeyWord.find();
        return keyWords;
    }

    async getKeyWord(keyWordId) {
        const keyWord = await KeyWord.findOne({keyWordId});
        return keyWord;
    }

    async createKeyWord(keyWord) {
        let data = {};
        try {
            data = await KeyWord.create(keyWord);
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async updateKeyWord(keyWord) {
        let data = {};
        try {
            data = await KeyWord.findByIdAndUpdate(keyWord.params.keyWordId,{$set:keyWord.body})
        } catch(err) {
            console.log('Error::' + err);
        }
        return data;
    }

    async deleteKeyWord(keyWordId) {
        let data = {};
        try {
            data = await KeyWord.findByIdAndDelete(keyWordId);
        } catch(err) {
            console.log('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new KeyWordRepository();