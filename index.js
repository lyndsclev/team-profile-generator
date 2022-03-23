// required

const fs = require('fs'); 
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer'); 
const Intern = require('./lib/Intern'); 

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
    });
};



// add employee or finish team option 

const buildTeam = () => {}

// engineer prompts

const addEngineer = () => {}

// push engineer to teamArr 

// intern prompts 

const addIntern = () => {}

// push intern to teamArr 

// write HTML file using template 

// call function to start application 
addManager()
.then(buildTeam); 

