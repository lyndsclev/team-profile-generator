const Manager = require('../lib/Manager'); 

test('creates a new manager object', () => {
    const manager = new Manager('bob', 1, 'test@123.com', 1); 

    expect(manager.name).toEqual(expect.any(String));  
    expect(manager.id).toEqual(expect.any(Number)); 
    expect(manager.email).toEqual(expect.any(String)); 
    expect(manager.officeNumber).toEqual(expect.any(Number)); 

    console.log(manager);
}); 

test('gets manager role', () => {
    const manager = new Manager('bob', 1, 'test@123.com', 1); 

    expect(manager.getRole()).toEqual('Manager'); 
    
    console.log(manager.getRole()); 
});
