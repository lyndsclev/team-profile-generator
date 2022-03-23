const Employee = require('../lib/Employee.js'); 

test('creates a new employee object', () => {
    const employee = new Employee('bob', 1, 'test@123.com'); 

    expect(employee.name).toEqual(expect.any(String));  
    expect(employee.id).toEqual(expect.any(Number)); 
    expect(employee.email).toEqual(expect.any(String)); 

    console.log(employee);
}); 

test('gets employee name', () => {
    const employee = new Employee('bob', 1, 'test@123.com');

    expect(employee.getName()).toEqual(expect.any(String)); 
    
    console.log(employee.getName()); 

});

test('gets employee id', () => {
    const employee = new Employee('bob', 1, 'test@123.com');

    expect(employee.getId()).toEqual(expect.any(Number)); 
    
    console.log(employee.getId()); 

});

test('gets employee email', () => {
    const employee = new Employee('bob', 1, 'test@123.com');

    expect(employee.getEmail()).toEqual(expect.any(String)); 
    
    console.log(employee.getEmail()); 

});

test('gets employee role', () => {
    const employee = new Employee('bob', 1, 'test@123.com');

    expect(employee.getRole()).toEqual('Employee'); 
    
    console.log(employee.getRole()); 

});



