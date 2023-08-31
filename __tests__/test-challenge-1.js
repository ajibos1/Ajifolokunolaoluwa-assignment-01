const assignment = require('../src/assignment.js');

const { sumOfNumbersTo } = assignment;
const maybe = sumOfNumbersTo === undefined ? test.skip : test;

maybe(
    'Challenge - 1 : my sumOfNumbersTo function can sum an array of numbers',
    () => {
        expect(sumOfNumbersTo(10)).toBe(55);
    }
)

function sumOfNumbersTo(destination) {
    let sum = 0;
    for (let i = 1; i <= destination; i++) {
        sum += i;
    }
    return sum;
}

module.exports = {
    sumOfNumbersTo,
};