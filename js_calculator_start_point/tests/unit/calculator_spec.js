var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add 1 to 4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5)
  })

  it('can subtract 4 from 7 and get 3' , function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('can multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.strictEqual(calculator.runningTotal, 15)
  })

  it('can divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('can concatenate multiple button clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    assert.strictEqual(calculator.runningTotal, 123)
  })

  it('can chain multiple operations together', function(){
    calculator.numberClick(2)
    calculator.operatorClick("+");
    calculator.numberClick(5)
    calculator.operatorClick("=");
    assert.strictEqual(calculator.runningTotal, 7)
  })

  it('can clear the running total without affecting calculation', function(){
    calculator.numberClick(2)
    calculator.operatorClick("*");
    calculator.numberClick(4)
    calculator.clearClick();
    calculator.numberClick(5)
    calculator.operatorClick("=");
    assert.strictEqual(calculator.runningTotal, 10)
  })



});
