import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

test('Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.exists()).toBe(true);
});


test('Notifications renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const textElement = wrapper.find('p').filterWhere(n => n.text() === 'Here is the list of notifications')

    expect(textElement.length).toBe(1)
})
