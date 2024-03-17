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

test("Notifications renders 3 Notifications components", () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
});

test("Notifications renders the first NotificationItem with 'New course available' content", () => {
    const firstNotificationItem = wrapper.find(NotificationItem).first();

    expect(firstNotificationItem.props().type).toBe('default');
    expect(firstNotificationItem.props().value).toBe('New course available');
});

test('Notifications not renders the NotificationItem componenty if displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={ false } />);

    expect(wrapper.find('.Notifications').exists()).toBe(false);
})

