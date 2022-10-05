const stringLength = require('./stringLength')

it('Valid Length(It Should be more than 1 char and less than or equal 10 chars)', () => {
    expect(stringLength("hellfdfd")).toBe(8);
});

