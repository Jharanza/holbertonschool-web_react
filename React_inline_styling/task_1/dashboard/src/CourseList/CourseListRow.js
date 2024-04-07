import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {

    const rowStyle = {
        backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab',
        width: isHeader ? '100%' : '100%'
    }
    return (
        <tr style={ rowStyle }>
            {isHeader ? (
                textSecondCell ? (
                    <>
                    <th className={css(styles.headerTh)}>{ textFirstCell }</th>
                    <th>{ textSecondCell }</th>
                    </>
                ) : (
                    <th colSpan={ 2 }>{ textFirstCell }</th>
                )
            ) : (
                <>
                <td className={ css(styleBody.tbody )}>{ textFirstCell }</td>
                { textSecondCell && <td className={ css(styleBody2.tbody2)}>{ textSecondCell }</td>}
                </>
            )}
        </tr>
    )
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

const styles = StyleSheet.create({
    headerTh: {
        width: '60%',
        alignItems: 'start'
    }
});

const styleBody = StyleSheet.create({
    tbody: {
        width: '100%',
        alignItems: 'start'
    }
})

const styleBody2 = StyleSheet.create({
    tbody2: {
        // alignItems: 'baseline',
        justifyContent: 'initial'
    }
})

export default CourseListRow;
