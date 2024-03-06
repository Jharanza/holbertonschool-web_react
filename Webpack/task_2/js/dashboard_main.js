import $ from 'jquery';
const _ = require('lodash');
import '../css/main.css';

let count = 0
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`)
}

$(document).ready(() => {
    $('body').append(`
        <p>Holberton Dashboard</p>
        <p>Dashboard data for the students</p>
        <button>Click here to get started</button>
        <p id='count'></p>
        <p>Copyright - Holberton School</p>
    `)

    const debouncedUpdateCounter = _.debounce(updateCounter, 500);
    $('button').click(debouncedUpdateCounter)
});



