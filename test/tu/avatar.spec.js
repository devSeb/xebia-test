import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect, should} from 'chai';

import Avatar from '../../lib/avatar';

describe('<Avatar/>', function () {
    it('should have an image to display the gravatar', function () {
        const wrapper = shallow(<Avatar/>);
        expect(wrapper.find('img')).to.have.length(1);
    });

    it('should have a image src on the component', function () {
        const srcImage = "https://upload.wikimedia.org/wikipedia/commons/6/67/USS_Bowfin_img.JPG";
        const wrapper = shallow(<Avatar src={srcImage} />);
        //console.log("wrapper.find('img') ", wrapper.find('img').node.props.src);
        //expect(wrapper.find('img').node.props.src).equal(srcImage);
    });


    it('should have props for email and src', function () {
        const wrapper = shallow(<Avatar/>);
        expect(wrapper.props().email).to.be.defined;
        expect(wrapper.props().source).to.be.defined;
    });
});