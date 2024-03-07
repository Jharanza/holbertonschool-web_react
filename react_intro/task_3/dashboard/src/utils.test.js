import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear function returns current year', () => {
    const year = new Date().getFullYear().toString();
    const functionYear = getFullYear();

    expect(functionYear).toBe(year);
});

test('getFooterCopy function returns Holberton School if isIndex is true', () => {
    const isIndex = true;
    const string = 'Holberton School';
    const functionString = getFooterCopy(isIndex);

    expect(functionString).toBe(string);
});

test('getFooterCopy function returns Holberton School main dashboard if isIndex is false', () => {
    const isIndex = false;
    const string = 'Holberton School main dashboard';
    const functionString = getFooterCopy(isIndex);

    expect(functionString).toBe(string);
});

test('getLatestNotification function returns <strong>Urgent requirement</strong> - complete by EOD', () => {
    const string = '<strong>Urgent requirement</strong> - complete by EOD';
    const functionHtml = getLatestNotification();

    expect(functionHtml).toBe(string)
})

