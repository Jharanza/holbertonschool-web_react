import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import './CourseList.css';


const CourseList = ({ listCourses }) => {

    if (listCourses === undefined) listCourses = [];

    return (
        <table id='CourseList' className={css(styles.courseList)}>
            <thead className={css(styleHeaderList.headerCourseList)}>
                <CourseListRow textFirstCell='Available courses' isHeader={ true } />
                <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={ true } />
            </thead>
            <tbody>
                { listCourses.length === 0 && (
                    <CourseListRow textFirstCell='No course available yet' isHeader={ false } key='no-courses' />
                )}
                { listCourses.map((course) => 
                    <CourseListRow 
                        key={ course.id }
                        textFirstCell={ course.name }
                        textSecondCell={ course.credit }
                        isHeader={ false }
                    />
                )}
            </tbody>
        </table>
    )
}

const styles = StyleSheet.create({
    courseList: {
        display: 'flex',
        flexDirection: 'column',
        height: '450px',
        padding: '5%'
    }
});

const styleHeaderList = StyleSheet.create({
    headerCourseList: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        border: '0.5px dotted gray'
    }
})

export default CourseList;