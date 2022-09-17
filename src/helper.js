const convertToNum = (val) => parseInt(val);

const convertToFarenheit = (celsius) => convertToNum(celsius) * (9 / 5) + 32;

export {
    convertToNum,
    convertToFarenheit
};