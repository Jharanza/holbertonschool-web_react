import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

test('Header renders without crashing', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBe(true);
});

test("Header renders a img element", () => {
    const wrapper = shallow(<Header />);
    
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
});
