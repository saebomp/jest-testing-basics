// https://www.youtube.com/watch?v=7r4xVDI2vho   21:26

const functions = {
    add: (num1, num2) => num1 + num2, 
    isNull: ()=> null,
    checkValue: x => x,
    createUser: () => {
        const user = { firstName: 'Brad'}
        user['lastName'] = 'Traversy';
        return user;
    }
}

module.exports = functions;