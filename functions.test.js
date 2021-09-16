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

//toEqual
test('User should be Brad Traversy object', ()=> {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName:'Traversy'
    });
})

//Less than and greater than  (toBeLessThan , toBeLessThanOrEqual)
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

//Regex
test('There is no I in team', ()=> {
    expect('team').not.toMatch(/I/);
    //team 이라는 단어에 I있는지 확인. case sensitive 라서 expect('teami') 인 경우 패스됨
})

//Arrays
test('Admin should be in usernames', ()=> {
    usernames = ['john', 'admin', 'doe'];
    expect(usernames).toContain('admin')
})


//npm test