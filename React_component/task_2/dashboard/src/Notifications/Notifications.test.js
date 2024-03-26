import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

const wrapper = shallow(<Notifications displayDrawer={ true } />);

test('Notifications renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
});


test('Notifications renders the text "Here is the list of notifications"', () => {
    const textElement = wrapper.find('p').filterWhere(n => n.text() === 'Here is the list of notifications')

    expect(textElement.length).toBe(1)
});


test('Notifications not renders the NotificationItem componenty if displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={ false } />);

    expect(wrapper.find('.Notifications').exists()).toBe(false);
})

