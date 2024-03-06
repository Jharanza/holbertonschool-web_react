import $ from 'jquery';
import _, {constant} from 'lodash';

let count = 0;

$(document).ready(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append("<p id='count'></p>");
  $('body').append('<p>Copyright - Holberton School</p>');

  $('button').click(_.debounce(function() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  }, 500));
});
