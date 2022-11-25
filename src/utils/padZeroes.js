const padZeroes = (number) => {
    let newNum = number;

    if (newNum < 100) newNum = `0${number}`;
    if (newNum < 10) newNum = `00${number}`;

    return `#${newNum}`;
}

export default padZeroes;