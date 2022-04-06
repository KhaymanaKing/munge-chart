// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { customerFreq } from '../munge-utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});




test('takes in customer frequency and returns a countMap', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const countMap = {
        Often: 126,
        Once: 107,
        Daily: 142,
        Yearly: 128,
        Monthly: 123,
        Weekly: 122,
        Seldom: 129,
        Never: 123,
    };
    const expected = countMap;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = customerFreq();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});