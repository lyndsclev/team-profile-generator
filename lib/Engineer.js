const Employee = require('./Employee'); 

class Engineer extends Employee {
    constructor(name) {
        super(name); 
        
        this.github = github; 
    }

    getGitHub() {}

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer; 
