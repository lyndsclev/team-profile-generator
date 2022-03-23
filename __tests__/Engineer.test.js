const Engineer = require('../lib/Engineer'); 

test('creates a new engineer object', () => {
    const engineer = new Engineer('bob', 1, 'test@123.com', 'username'); 

    expect(engineer.name).toEqual(expect.any(String));  
    expect(engineer.id).toEqual(expect.any(Number)); 
    expect(engineer.email).toEqual(expect.any(String)); 
    expect(engineer.github).toEqual(expect.any(String)); 

    console.log(engineer);
}); 

test('gets engineer github username', () => {
    const engineer = new Engineer('bob', 1, 'test@123.com', 'username'); 

    expect(engineer.getGitHub()).toEqual(expect.any(String)); 
    
    console.log(engineer.getGitHub()); 
});

test('gets engineer role', () => {
    const engineer = new Engineer('bob', 1, 'test@123.com', 'username'); 

    expect(engineer.getRole()).toEqual('Engineer'); 
    
    console.log(engineer.getRole()); 
});