import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect, should} from 'chai';

/** Component **/
import  NavBar  from '../../src/components/NavBar/NavBar';

describe('<NavBar />', () => {

    it('should have a navbar-brand title', function () {
        const wrapper = render(<NavBar />);
        //console.log("Element =>", wrapper.find(".navbar-brand")[0].children[0].data );
        expect( wrapper.find(".navbar-brand")[0].children[0].data).to.contain("XEBIA TEST");
    });

});