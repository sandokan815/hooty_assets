var callNewsAPI = require('../helpers/newsApi');


var source = 'the-verge';

async function GetNews() {
    try {
        await callNewsAPI(source);
        return;
    } catch (e) {
        console.log(e);
        throw Error(e);
    }

}



module.exports = GetNews;