// required
const fs = require('fs'); 
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer'); 
const Intern = require('./lib/Intern'); 

// team array 
const teamArr = []; 

// manager prompts 
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'text', 
            name: 'name', 
            message: "Enter the team manager's name (required).", 
            validate: managerName => {
                if(managerName) {
                    return true; 
                } else {
                    console.log("Please enter the team manager's name."); 
                    return false; 
                }
            }
        },
        {
            type: 'text', 
            name: 'id', 
            message: "Enter the manager's ID number (required).",
            validate: managerId => {
                if(managerId) {
                    return true; 
                } else {
                    console.log("Please enter the manager's ID number."); 
                    return false; 
                }
            }

        }, 
        {
            type: 'text', 
            name: 'email', 
            message: "Enter the manager's email address (required).", 
            validate: managerEmail => {
                if(managerEmail) {
                    return true; 
                } else {
                    console.log("Please enter the manager's email address."); 
                    return false; 
                }
            }
        },
        {
            type: 'text', 
            name: 'officeNumber', 
            message: "Enter the manager's office number (required).", 
            validate: managerOffice => {
                if(managerOffice) {
                    return true; 
                } else {
                    console.log("Please enter the manager's office number."); 
                    return false; 
                }
            }
        }
    ])

    // push manager to teamArr 
    .then(data => {
        const { name, id, email, officeNumber } = data; 
        teamArr.push(new Manager(name, id, email, officeNumber));
        
        // confirm manager is added to teamArr 
        console.log(teamArr); 
    }); 
};

// add employee or finish team option 
const buildTeam = () => {
    return inquirer.prompt([
        {
            type: 'list', 
            name: 'newTeamMember', 
            message: 'would you like to add another team member?',
            choices: ['Yes, add an Engineer', 'Yes, add an Intern', 'No, the team is complete!']
        }
    ]) .then(answer => {
        if(answer.newTeamMember === 'Yes, add an Engineer') {
            addEngineer(); 
        } else if (answer.newTeamMember === 'Yes, add an Intern') {
            addIntern(); 
        } else {

            // write HTML file using template 
        }
    });
};

// engineer prompts
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'text', 
            name: 'name', 
            message: "Enter the engineer's name (required).", 
            validate: engineerName => {
                if(engineerName) {
                    return true; 
                } else {
                    console.log("Please enter the engineer's name."); 
                    return false; 
                }
            }
        },
        {
            type: 'text', 
            name: 'id', 
            message: "Enter the engineer's ID number (required).",
            validate: engineerId => {
                if(engineerId) {
                    return true; 
                } else {
                    console.log("Please enter the engineer's ID number."); 
                    return false; 
                }
            }

        }, 
        {
            type: 'text', 
            name: 'email', 
            message: "Enter the engineer's email address (required).", 
            validate: engineerEmail => {
                if(engineerEmail) {
                    return true; 
                } else {
                    console.log("Please enter the engineer's email address."); 
                    return false; 
                }
            }
        },
        {
            type: 'text', 
            name: 'github', 
            message: "Enter the engineer's GitHub username (required).", 
            validate: engineerGithub => {
                if(engineerGithub) {
                    return true; 
                } else {
                    console.log("Please enter the engineer's GitHub username."); 
                    return false; 
                }
            }
        },
    ]) 

    // push engineer to teamArr
    .then(data => {
        const { name, id, email, github } = data; 
        teamArr.push(new Engineer(name, id, email, github));
        
        // confirm engineer is added to teamArr 
        console.log(teamArr); 
    }); 
};


// intern prompts 
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'text', 
            name: 'name', 
            message: "Enter the intern's name (required).", 
            validate: internName => {
                if(internName) {
                    return true; 
                } else {
                    console.log("Please enter the intern's name."); 
                    return false; 
                }
            }
        },
        {
            type: 'text', 
            name: 'id', 
            message: "Enter the intern's ID number (required).",
            validate: internId => {
                if(internId) {
                    return true; 
                } else {
                    console.log("Please enter the intern's ID number."); 
                    return false; 
                }
            }

        }, 
        {
            type: 'text', 
            name: 'email', 
            message: "Enter the intern's email address (required).", 
            validate: internEmail => {
                if(internEmail) {
                    return true; 
                } else {
                    console.log("Please enter the intern's email address."); 
                    return false; 
                }
            }
        },
        {
            type: 'text', 
            name: 'school', 
            message: "Enter the intern's school (required).", 
            validate: internSchool => {
                if(internSchool) {
                    return true; 
                } else {
                    console.log("Please enter the intern's school."); 
                    return false; 
                }
            }
        },
    ]) 

    // push intern to teamArr
    .then(data => {
        const { name, id, email, school } = data; 
        teamArr.push(new Intern(name, id, email, school));
        
        // confirm intern is added to teamArr 
        console.log(teamArr); 
    }); 
}




// call function to start application 
addManager()
.then(buildTeam); 

