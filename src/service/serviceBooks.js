
/** Request to the server :   load one character  :  API_BASE_URL(@param)  **/

function loadDistantBook(BASE_URL) {
    return new Promise(function (resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.onload = function (event) {
            resolve( JSON.parse(xhr.responseText));
            //console.log("=> ", xhr.responseText);
        };
        xhr.onerror = function (err) {
            reject(null);
        };
        xhr.open('GET', BASE_URL, true);
        xhr.send(null);

    });
}



export function search_books() {
    //console.log("search_CharacterInfo ", _id);

    let promise  = new Promise(function (resolve, reject) {
        let API_BASE_URL = "http://henri-potier.xebia.fr/books";
        loadDistantBook( API_BASE_URL ).then(function (content) {
            //console.info('loadDistantArticles !', content.results);
            resolve(content);

        }).catch(function (err) {
            console.error('Err !', err);
            reject(err);
        });

    });

    return promise;
}

