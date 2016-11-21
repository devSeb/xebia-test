
/** Request to the server :   load one character  :  API_BASE_URL(@param)  **/

function loadOffers(BASE_URL) {
    return new Promise(function (resolve, reject) {

        $( document ).ready(function() {
            //console.log( "ready!" );

            $.ajax({
                url: BASE_URL,
                type: "get",
                success: function(response) {
                    //console.log("offer response  = > ", response);
                    if ( response  ) {
                        resolve(response);
                    }
                },
                error: function(xhr) {
                    console.log("xhr = ", xhr);
                    reject(xhr);
                }
            });
        });
    });
}



export function search_offers(productList) {


    let promise  = new Promise(function (resolve, reject) {

        let API_BASE_URL = "http://henri-potier.xebia.fr/books/"+ productList +"/commercialOffers";

        loadOffers( API_BASE_URL ).then(function (content) {
            //console.info('loadDistantArticles !', content.results);
            resolve(content);

        }).catch(function (err) {
            console.error('Err ! ', err);
            reject(err);
        });

    });

    return promise;
}

