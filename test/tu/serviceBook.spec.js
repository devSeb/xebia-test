/**
 * Created by Administrateur on 28/11/2016.
 */

import * as serviceBookService from '../../src/service/serviceBooks';
var chai = require('chai');
var should = require('chai').should();


describe('serviceBook', () => {

    it('Should get a valid url', () => {
        serviceBookService.search_books()
            .then(function (content) {
                //console.log("content ", content);
                res = true;
                should.equal(res, true);
            })
            .then( function(err) {
                //console.log("err = ", err);
                res = false;
                should.equal(res, true);
            })
    });

    it('should get a good structure isbn ', () => {
        serviceBookService.search_books()
            .then(function (content) {
                let res_isbn = true;
                var data = JSON.parse(content);
                for (let element of data) {
                    if ( element.hasOwnProperty('isbn') ) {
                        if ( element.isbn !== null && typeof element.isbn !== "string" ) {
                            res_isbn = false;
                        }
                    }
                }
                should.equal(res_isbn, true);
            })
    });

    it('should get a good structure title ', () => {
        serviceBookService.search_books()
            .then(function (content) {
                let res_title = true;
                var data = JSON.parse(content);
                for (let element of data) {
                    if ( element.hasOwnProperty('title') ) {
                        if ( element.title !== null && typeof element.title !== "string" ) {
                            res_title = false;
                        }
                    }
                }
                should.equal(res_title, true);
            })
    });

    it('should get a good structure price ', () => {
        serviceBookService.search_books()
            .then(function (content) {
                let res_price = true;
                var data = JSON.parse(content);
                for (let element of data) {
                    if ( element.hasOwnProperty('title') ) {
                        if ( element.title !== null && typeof element.title !== "string" ) {
                            res_price = false;
                        }
                    }
                }
                should.equal(res_price, true);
            })
    });

    it('should get a good structure cover ', () => {
        serviceBookService.search_books()
            .then(function (content) {
                let res_cover = true;
                var data = JSON.parse(content);
                for (let element of data) {
                    if ( element.hasOwnProperty('cover') ) {
                        if ( element.cover !== null && typeof element.cover !== "string" ) {
                            res_cover = false;
                        }
                    }
                }
                should.equal(res_cover, true);
            })
    });

});