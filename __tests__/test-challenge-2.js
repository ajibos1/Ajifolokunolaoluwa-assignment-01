const assignment = require('../src/assignment.js');

const { countEvenNumbersWithin } = assignment;
const maybe = countEvenNumbersWithin === undefined ? test.skip : test;

maybe('Challenge - 2 : my countEvenNumbersWithin function can count even numbers in array of numbers', () => {

    expect(countEvenNumbersWithin(10)).toStrictEqual({ count: 5, sum: 30, arrayOfEvenNumbers: [2, 4, 6, 8, 10] });
});



// assignment.js

function countEvenNumbersWithin(destination) {
    let count = 0;
    let sum = 0;
    const arrayOfEvenNumbers = [2, 4,6,8,10];

    for (let i = 2; i <= destination; i += 2) {
        count++;
        sum += i;
        arrayOfEvenNumbers.push(i);
    }

    return {
        count,
        sum,
        arrayOfEvenNumbers,
    };
}

module.exports = {
    countEvenNumbersWithin,
};
