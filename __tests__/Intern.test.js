const Intern = require('../lib/Intern'); 

test('creates a new intern object', () => {
    const intern = new Intern('bob', 1, 'test@123.com', 'NCSU'); 

    expect(intern.name).toEqual(expect.any(String));  
    expect(intern.id).toEqual(expect.any(Number)); 
    expect(intern.email).toEqual(expect.any(String)); 
    expect(intern.school).toEqual(expect.any(String)); 

    console.log(intern);
}); 

test('gets intern school', () => {
    const intern = new Intern('bob', 1, 'test@123.com', 'NCSU'); 

    expect(intern.getSchool()).toEqual(expect.any(String)); 
    
    console.log(intern.getSchool()); 
});

test('gets intern role', () => {
    const intern = new Intern('bob', 1, 'test@123.com', 'NCSU');  

    expect(intern.getRole()).toEqual('Intern'); 
    
    console.log(intern.getRole()); 
});