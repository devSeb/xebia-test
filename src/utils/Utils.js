
/**
 * Constructor
 */

var self;
function UtilsServiceArray() {
    self = this;
}


/**
 * Define a array without duplicate product
 * @param products
 * @returns {Array}
 */
UtilsServiceArray.prototype.arrayWithoutDuplicate = function(products) {

    let boolValidation = false;
    let arrFinal = [];

    if ( products !== null ) {
        let element = {
            cover: products[0].cover,
            isbn: products[0].isbn,
            price: products[0].price,
            title: products[0].title,
            qte: 1
        };
        arrFinal.push(element);

        var i = 1;
        var j = 0;
        for (i = 1; i <= products.length - 1; i++) {
            boolValidation = false;
            for (j = 0; j <= arrFinal.length - 1; j++) {

                if (products[i].title === arrFinal[j].title) {

                    arrFinal[j].qte = arrFinal[j].qte + 1;
                    boolValidation = true;
                }
            }
            /** if the product isn't in the arrFinal, i add it **/
            if (boolValidation == false) {
                arrFinal.push(
                    {
                        cover: products[i].cover,
                        isbn: products[i].isbn,
                        price: products[i].price,
                        title: products[i].title,
                        qte: 1
                    }
                )
            }
        }
    }
    //console.log("array final ", arrFinal);
    return (arrFinal.length >= 1) ? arrFinal : null;
};

module.exports = UtilsServiceArray;
