
export function uniqueArray_Store(products) {
    console.log("products =", products);
    let boolValidation = false;
    let arrFinal = [];
    let element = {
        cover: products[0].cover,
        isbn: products[0].isbn,
        price: products[0].price,
        title: products[0].title,
        qte : 1
    };
    arrFinal.push(element);

    var i = 1;
    var j = 0;
    for ( i = 1 ; i <= products.length -1; i++) {
        boolValidation = false;
        for ( j = 0 ; j <= arrFinal.length-1 ; j++ ) {

            if ( products[i].title === arrFinal[j].title ) {

                arrFinal[j].qte = arrFinal[j].qte + 1;
                boolValidation = true;
            }
        }
        /** if the product isn't in the arrFinal, i add it **/
        if ( boolValidation == false ) {
            arrFinal.push (
                {
                    cover: products[i].cover,
                    isbn: products[i].isbn,
                    price: products[i].price,
                    title: products[i].title,
                    qte : 1
                }
            )
        }
    }
    //console.log("array final ", arrFinal);
    return arrFinal;
}

/** Test mock **/
export function test_uniqueArray_store() {
    console.log("test");
    let mock = [
        {
            "isbn":"c8fabf68-8374-48fe-a7ea-a00ccd07afff",
            "title":"Henri Potier à l'école des sorciers",
            "price":35,
            "cover":"http://henri-potier.xebia.fr/hp0.jpg"
        }, {
            "isbn":"a460afed-e5e7-4e39-a39d-c885c05db861",
            "title":"Henri Potier et la Chambre des secrets",
            "price":30,
            "cover":"http://henri-potier.xebia.fr/hp1.jpg"
        }, {
            "isbn":"c8fabf68-8374-48fe-a7ea-a00ccd07afff",
            "title":"Henri Potier à l'école des sorciers",
            "price":35,
            "cover":"http://henri-potier.xebia.fr/hp0.jpg"
        }
    ];

    let res_th = true;
    let res_pr = null;
    let arr_test = uniqueArray_Store(mock);
    if ( arr_test.length == 2 ) {
        if ( arr_test[0].title == "Henri Potier à l'école des sorciers" && arr_test[0].qte == 2) {
            res_pr = true;
        }
    } else {
        res_pr = false;
    }


    console.log( (res_th == res_pr) ? "test true" : " test false" );
}