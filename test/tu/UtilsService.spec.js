

var chai = require('chai');
var should = require('chai').should();
var sinon = require('sinon');
var UtilsServiceArray = require('../../src/utils/Utils');

var mockArrayWithoutDuplicate = [
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

var utilsServiceArrayWithArray;

describe('UtilsServiceArray', function() {
   before(function() {
       utilsServiceArrayWithArray = new UtilsServiceArray();
       //console.log(utilsServiceArrayWithArray);
   });

    describe('Constructor', function () {
        it('should get a arrayWithoutDuplicate', function () {
            return utilsServiceArrayWithArray.arrayWithoutDuplicate.should.be.present;
        });
    });

    describe('Test_With_Valid_Array', () => {

            it('should get a array without duplicate', function () {
                let arrayRes = utilsServiceArrayWithArray.arrayWithoutDuplicate(mockArrayWithoutDuplicate);
                should.equal( arrayRes.length, 2);
            });

            it('should get a product with multiple quantities', function () {
                let arrayRes = utilsServiceArrayWithArray.arrayWithoutDuplicate(mockArrayWithoutDuplicate);
                should.equal( arrayRes[0].qte, 2);
            });
    });

    describe('Test_With_Not_Valid_Array', () => {

        it('should get a empty array without duplicate', function () {
            let arrayRes = utilsServiceArrayWithArray.arrayWithoutDuplicate(null);
            should.equal( arrayRes, null);
        });
    });

});




