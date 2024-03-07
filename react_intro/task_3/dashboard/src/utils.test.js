import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear function returns a string year', () => {
    const yearExpected = new Date().getFullYear().toString();
    const yearFunction = getFullYear();

    expect(yearFunction).toBe(yearExpected);
});

test('getFooterCopy return a string with the text Holberton School if true', () => {
    const isIndex = true;
    const stringExpected = 'Holberton School';
    const stringFunction = getFooterCopy(isIndex);

    expect(stringFunction).toBe(stringExpected);
});

test('getFooterCopy return a string with the text Holberton School main dashboard', () => {
    const isIndex = false;
    const stringExpected = 'Holberton School main dashboard';
    const stringFunction = getFooterCopy(isIndex);

    expect(stringFunction).toBe(stringExpected);
});

test('getLatestNotification function returns "<strong>Urgent requirement</strong> - complete by EOD"', () => {
    const stringExpected = '<strong>Urgent requirement</strong> - complete by EOD';
    const stringFunction = getLatestNotification();

    expect(stringFunction).toBe(stringExpected);
});
