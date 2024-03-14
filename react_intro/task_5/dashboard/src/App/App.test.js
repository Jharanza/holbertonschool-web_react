import React from "react";
import { shallow } from 'enzyme';
import App from "./App";

test('App renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
});

test('App contains a div component with the class App-header', () => {
    const wrapper = shallow(<App />);
    const headerElement = wrapper.find('.App-header');

    expect(headerElement.length).toBe(1);
    expect(headerElement.hasClass('App-header')).toBe(true);
});

test('App contains a div component with the class App-body', () => {
    const wrapper = shallow(<App />);
    const bodyElement = wrapper.find('.App-body');

    expect(bodyElement.length).toBe(1);
    expect(bodyElement.hasClass('App-body')).toBe(true);
});

test('App contains a div component with the class App-footer', () => {
    const wrapper = shallow(<App />);
    const footerElement = wrapper.find('.App-footer');
    
    expect(footerElement.length).toBe(1);
    expect(footerElement.hasClass('App-footer')).toBe(true);
})

