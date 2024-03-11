import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

test('getFullYear returns current year', () => {
    const currentYear = new Date().getFullYear().toString();
    const fullYear = getFullYear();

    expect(fullYear).toBe(currentYear);
});

test('getFooterCopy returns "Holberton School" if parameter is true', () => {
    const isIndex = true;
    const msg = 'Holberton School';
    const footerCopy = getFooterCopy(isIndex);

    expect(footerCopy).toBe(msg);
});

test('getFooterCopy returns "Holberton School main dashboard" if paramenter is false', () => {
    const isIndex = false;
    const msg = 'Holberton School main dashboard';
    const footerCopy = getFooterCopy(isIndex);

    expect(footerCopy).toBe(msg);
});

test('getLastestNotification returns the mesage <strong>Urgent requirement</strong> - complete by EOD', () => {
    const msg = '<strong>Urgent requirement</strong> - complete by EOD';
    const latestNotification = getLatestNotification();

    expect(latestNotification).toBe(msg);
});
