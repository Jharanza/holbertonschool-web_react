const getFullYear = () => new Date().getFullYear().toString();

const getFooterCopy = (isIndex) => isIndex === true ? 'Holberton School' : 'Holberton School main dashboard';

module.exports = { getFullYear, getFooterCopy}
