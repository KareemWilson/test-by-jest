const capitalize = require('./capitalize')

it('capitalized', () => {
    expect(capitalize('hello')).toBe('Hello')
})