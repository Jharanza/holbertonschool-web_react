import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

const wrapper = shallow(<NotificationItem />);

test("NotificationItem renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
});

test("NotificationItem renders correct HTML with types and value props", () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);

    expect(wrapper.type()).toEqual('li');
    expect(wrapper.prop('data-notification-type')).toEqual('default');
});

test("NotificationItem renders correct HTML with html prop", () => {
    const html = { __html: 'test' };
    const wrapper = shallow(<NotificationItem type='urgent' html={ html } />);

    expect(wrapper.type()).toEqual('li');
    expect(wrapper.prop('data-notification-type')).toEqual('urgent');
})