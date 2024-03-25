export const getFullYear = () => {
  return new Date().getFullYear().toString();
};

export const getFooterCopy = (isIndex=true) => {
  return isIndex === true ? 'Holberton School' : 'Holberton School main dashboard';
}

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD'
}
