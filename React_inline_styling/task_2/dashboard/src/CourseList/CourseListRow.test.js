import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';


describe("CourseListRow component", () => {
    it('renders a single cell with collspan=2 when Header is true and textSecondCell is null', () => {
        const wrapper = shallow(<CourseListRow isHeader={ true } textFirstCell='Header Text' />);

        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').props().colSpan).toBe(2);
    });

    it("renders 2 cells when isHeader is true and textSecondCell is present", () => {
        const wrapper = shallow(<CourseListRow isHeader={ true } textFirstCell='Header Text' textSecondCell='Second Cell' />)
        
        expect(wrapper.find('th')).toHaveLength(2);
    });

    it('renders 2 cells within a tr when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow textFirstCell='First Cell Text' textSecondCell='Second Cell Text' />);

        expect(wrapper.find('tr')).toHaveLength(1);
        expect(wrapper.find('td')).toHaveLength(2);
    });
});
