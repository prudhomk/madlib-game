// IMPORT MODULES under test here:
import { sync } from '../dom-utilities.js';

const test = QUnit.test;

test('sync input to element', (expect) => {
    //Arrange
    const input = document.createElement('input');
    const expected = 'banana';
    const span = document.createElement('span');
    input.value = expected;
    
    //Act 
    sync(input, span);

    //Expect
    expect.equal(expected, span.textContent);
});

