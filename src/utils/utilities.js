export const getFeet = (dm) => Math.round((dm / 3.048)) + "'";

export const getPounds = (hg) => Math.round((hg * 0.2204622622)) + ' lbs';

export const capitalize = (str) => str.replace(str.charAt(0), str.charAt(0).toUpperCase());

export const getStatPercentage = (stat) => Math.round((stat / 255) * 100);

export const padZeroes = (number) => {
    let newNum = number;

    if (newNum < 100) newNum = `0${number}`;
    if (newNum < 10) newNum = `00${number}`;

    return `#${newNum}`;
}

