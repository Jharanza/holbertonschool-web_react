import React from "react";
import { shallow } from 'enzyme';
import App from "./App";
import Notifications from "./Notifications/Notifications";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Footer from "./Footer/Footer";
import CourseList from "./CourseList/CourseList";


const wrapper = shallow(<App />);

test('App renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
});

test('App renders Notifications component', () => {
    expect(wrapper.contains(<Notifications />)).toBe(true);
});

test('App renders Header component', () => {
    expect(wrapper.contains(<Header />)).toBe(true);
});

test('App renders Footer component', () => {
    expect(wrapper.contains(<Footer />)).toBe(true);
});

test('App renders Login component if isLoggedIn is false', () => {
    expect(wrapper.contains(<Login />)).toBe(true);
});

test('App renders CourseList if isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={ true } />);

    expect(wrapper.contains(<CourseList />)).toBe(true)
})
