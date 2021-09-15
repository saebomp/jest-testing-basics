const functions = require('./functions');

//toBe 
//functions add 라는 메소드에 2,2를 pass하면 4가 되어야한다
test('Adds 2 + 2 to equal 4', ()=> {
    expect(functions.add(2,2)).toBe(4);
})

//not to be
test('Adds 2 + 2 to not equal 5', ()=> {
    expect(functions.add(2,2)).not.toBe(5);
})

//to be null
test('Should be null', ()=> {
    expect(functions.isNull()).toBeNull();
})

//to be falsy
test('Should be falsy', ()=> {
    expect(functions.checkValue(null)).toBeFalsy();
})

test('User should be Brad Traversy object', ()=> {
    expect(functions.createUser()).toBe({
        firstName: 'Brad',
        lastName:'Traversy'
    });
})


//npm test