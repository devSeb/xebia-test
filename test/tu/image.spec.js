import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect, should} from 'chai';

/** Component **/
import Image from '../../src/components/Image/Image';

describe('<Image />', () =>  {

    it("Should have an image sources in props", () => {
        let srcProps = "https://upload.wikimedia.org/wikipedia/commons/6/67/USS_Bowfin_img.JPG";
        let wrapper = shallow(<Image source={srcProps} />);
        expect(wrapper.unrendered.props.source).to.be.defined;
        expect(wrapper.unrendered.props.source).equal(srcProps);

    });
    it("Should have an image sources render ", () => {
        let srcProps = "https://upload.wikimedia.org/wikipedia/commons/6/67/USS_Bowfin_img.JPG";
        let wrapper = render( <Image source={srcProps} /> );
        expect(wrapper.find("#img-cpn")[0].attribs.src).equal(srcProps);
    });


    it("Should have multiple className in props", () => {
        let classNamesProps = "img col-md-1";
        let wrapper = shallow( <Image classList={classNamesProps} /> );
        expect(wrapper.unrendered.props.classList).to.be.defined;
        expect(wrapper.unrendered.props.classList).equal(classNamesProps);
    });

    it("Should have an image className render ", () => {
        let classNamesProps = "img col-md-1";
        let wrapper = render( <Image classList={classNamesProps} /> );
        expect(wrapper.find("#img-cpn")[0].attribs.class).equal(classNamesProps);
    });
});