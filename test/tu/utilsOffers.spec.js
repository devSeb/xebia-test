

var chai = require('chai');
var should = require('chai').should();
var sinon = require('sinon');
var UtilsOffers = require('../../src/utils/UtilsOffers');

var Offer = {
    "offers": [
        {   "type":"percentage",
            "value":4
        }
    ]
};


var threeOffers = {
    "offers":[
        {   "type":"percentage",
            "value":4
        },{
            "type":"minus",
            "value":15
        },{
            "type":"slice",
            "sliceValue":100,
            "value":12
        }
    ]
};

var oneProduct = [
    {
        "isbn":"c8fabf68-8374-48fe-a7ea-a00ccd07afff",
        "title":"Henri Potier à l'école des sorciers",
        "price":35,
        "cover":"http://henri-potier.xebia.fr/hp0.jpg"
    }
];

var twoProducts = [
    {
        "isbn":"c8fabf68-8374-48fe-a7ea-a00ccd07afff",
        "title":"Henri Potier à l'école des sorciers",
        "price":35,
        "cover":"http://henri-potier.xebia.fr/hp0.jpg"
    },{
        "isbn":"a460afed-e5e7-4e39-a39d-c885c05db861",
        "title":"Henri Potier et la Chambre des secrets",
        "price":30,
        "cover":"http://henri-potier.xebia.fr/hp1.jpg"
    }
];

var threeProducts = [
    {
        "isbn":"c8fabf68-8374-48fe-a7ea-a00ccd07afff",
        "title":"Henri Potier à l'école des sorciers",
        "price":35,
        "cover":"http://henri-potier.xebia.fr/hp0.jpg"
    },{
        "isbn":"a460afed-e5e7-4e39-a39d-c885c05db861",
        "title":"Henri Potier et la Chambre des secrets",
        "price":30,
        "cover":"http://henri-potier.xebia.fr/hp1.jpg"
    },{
        "isbn":"fcd1e6fa-a63f-4f75-9da4-b560020b6acc",
        "title":"Henri Potier et le Prisonnier d'Azkaban",
        "price":30,
        "cover":"http://henri-potier.xebia.fr/hp2.jpg"
    }
];

var utilsServiceOffers;

describe('UtilsOffers', function() {
    before(function() {
        utilsServiceOffers = new UtilsOffers();
        //arrFinal = utilsServiceArray.arrayWithoutDuplicate(this.props.store);
        //priceTot = utilsServiceOffers.defineBestOffers(this.props.store, this.state.offers);
        //console.log(utilsServiceArrayWithArray);
    });

    describe('defineBestOffers', function () {
        it('should get a defineBestOffers method', function () {
            return utilsServiceOffers.defineBestOffers.should.be.present;
        });
    });

    describe('defineBestOffers test', function () {

        it('should get a defineBestOffers for one product and one offer', function () {
            let resBestOffer = utilsServiceOffers.defineBestOffers(oneProduct, Offer);
            let resTh = oneProduct[0].price * ( 1 - Offer.offers[0].value/100);
            should.equal( resBestOffer, resTh);
        });

        it('should get a defineBestOffers for two products and three offers ', function () {
            let resBestOffer = utilsServiceOffers.defineBestOffers(twoProducts, threeOffers);
            let resTh = ( twoProducts[0].price + twoProducts[1].price ) - ( threeOffers.offers[1].value);
            should.equal( resBestOffer, resTh);
        });

        it('should get a defineBestOffers for three products and three offers ', function () {
            let resBestOffer = utilsServiceOffers.defineBestOffers(threeProducts, threeOffers);
            let resTh = ( threeProducts[0].price + threeProducts[1].price + threeProducts[2].price ) - ( threeOffers.offers[1].value);
            should.equal( resBestOffer, resTh);
        });
    });





});




