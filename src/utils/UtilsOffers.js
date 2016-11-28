

var self;

function UtilsOffers() {
    self = this;
}

UtilsOffers.prototype.defineBestOffers = function ( products, offers ) {

    var bestOffer = 0;

    if ( products !== null && offers !== null ) {

        let pourcentOffer = null;
        let pourcentValue = null;

        let minusOffer = null;
        let minusValue = null;

        let sliceOffer = null;
        let sliceOfferValue = null;
        let sliceValue = null;

        let totalPrice = null;
        let resOffers = [];

        for ( let product of products ) {
            totalPrice = totalPrice + product.price;
        }


        for ( let offer of offers["offers"]) {
            let offerItem = offer;
            if (offerItem.type == "percentage" ) {
                pourcentValue = offerItem.value;
            }

            if (offerItem.type == "minus" ) {
                minusValue = offerItem.value;
            }

            if (offerItem.type == "slice" ) {
                sliceValue = offerItem.sliceValue;
                sliceOfferValue = offerItem.value;
            }
        }


        if ( sliceValue && sliceOfferValue ) {
            let sliceTotalDecimal = (totalPrice / 100).toString();
            let sliceTotal = Number(sliceTotalDecimal.split(".")[0]) * 12;
            sliceOffer = totalPrice - sliceTotal;
            if ( sliceOffer !== null ) {
                resOffers.push(sliceOffer)
            }
        }
        if ( pourcentValue  ) {
            pourcentOffer = totalPrice * ( 1 - pourcentValue/100);
            if ( pourcentOffer !== null ) {
                resOffers.push(pourcentOffer)
            }
        }
        if ( minusValue ) {
            minusOffer = totalPrice  - minusValue;
            if ( minusOffer !== null ) {
                resOffers.push(minusOffer)
            }
        }

        bestOffer = resOffers[0];
        for ( let element of resOffers ) {
            if ( element <  bestOffer) {
                bestOffer = element;
            }
        }
    }

    return bestOffer;
}

module.exports = UtilsOffers;

