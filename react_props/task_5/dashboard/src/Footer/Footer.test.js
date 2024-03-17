import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

test("Footer renders without crsahing", () => {
    expect(wrapper.exists()).toBe(true);
});

test("Footer renders the string Copyright", () => {
    expect(wrapper.text()).toContain('Copyright');
});