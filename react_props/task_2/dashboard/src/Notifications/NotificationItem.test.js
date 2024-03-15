import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

const wrapper = shallow(<NotificationItem />);

test("NotificationItem renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
})