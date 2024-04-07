import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';


const wrapper = shallow(<Login />);

test("Login renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
});

test("Login renders 2 labels elements and 2 inputs elements", () => {
    const labels = wrapper.find('label');
    const inputs = wrapper.find('input');

    expect(labels.length).toBe(2);
    expect(inputs.length).toBe(2);
})