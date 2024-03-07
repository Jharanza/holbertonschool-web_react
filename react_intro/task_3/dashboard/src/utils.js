const getFullYear = () => new Date().getFullYear().toString();

const getFooterCopy = (isIndex) => isIndex === true ? 'Holberton School' : 'Holberton School main dashboard';

const getLatestNotification = () => '<strong>Urgent requirement</strong> - complete by EOD';

module.exports = { getFullYear, getFooterCopy, getLatestNotification}
