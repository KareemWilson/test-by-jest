const Calculator = require('./Calculator')

describe('Calculator methods', () => {
    const x = 5;
    const y = 5
    test('add', () => {
        expect(Calculator.add(x,y)).toBe(10)
    })
    test('subtract', () => {
        expect(Calculator.subtract(x,y)).toBe(0)
    })
    test('multiply', () => {
        expect(Calculator.multiply(x,y)).toBe(25)
    })
    test('divide', () => {
        expect(Calculator.divide(x,y)).toBe(1)
    })
});