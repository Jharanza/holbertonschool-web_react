import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';


describe('Course list component', () => {
    it('renders without crashing', () => {
        shallow(<CourseList />)
    });

    it ('renders 3 CourseListRows', () => {
        const wrapper = shallow(<CourseList />);

        expect(wrapper.find(CourseListRow)).toHaveLength(3);
    });
});