import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect, should} from 'chai';

/** Component **/
import  Products  from '../../src/components/Products/Products';

var dataBaseProducts = [
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

describe('<Products />', () => {

    it('should have a list of products', function () {
        const wrapper = shallow(<Products products={dataBaseProducts} />);
        //console.log("wrapper =>", wrapper );
        expect(wrapper.unrendered.props.products).to.equal(dataBaseProducts);
        expect(wrapper.find(".list-product").length).to.equal(dataBaseProducts.length);
    });

});