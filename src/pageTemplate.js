
// create employee cards 
const employeeCards = (data) => {
    
    // set empty array for cards 
    let cardsArr = []; 

    data.forEach(employee => {
        
        // destruct object 
        const {name, id, email, role, github, officeNumber, school} = employee; 

        // conditional statement for non-common key/value pairs
        let uniqueField = ''; 
        let uniqueFieldVal; 

        if(github) {
            uniqueField = 'GITHUB:'; 
            uniqueFieldVal = `<a href="https://github.com/${github}" target="_blank">${github}</a>`; 
        } else if(school) {
            uniqueField = 'SCHOOL:'; 
            uniqueFieldVal = school; 
        } else if(officeNumber) {
            uniqueField = 'OFFICE:'; 
            uniqueFieldVal = officeNumber; 
        }; 
        
        // html for cards 
        let card = `
        <div class="column">
            <div class="card has-background-primary-light">

                <header class="card-header has-background-primary">
                    <p class="card-header-title has-text-white is-size-3">${name}<p>
                </header>

                <div class="card-content">
                    <div class="content">
                        <div class="box p-4 m-3">ROLE: ${role}</div>
                        <div class="box p-4 m-3">ID: ${id}</div>
                        <div class="box p-4 m-3">EMAIL: <a href="mailto:${email}">${email}</a></div>
                        <div class="box p-4 m-3">${uniqueField} ${uniqueFieldVal}</div>
                    </div>
                </div>
            </div>
        </div>
        `;

        // push card to array 
        cardsArr.push(card); 
    });

    // return cards
    return cardsArr.join(''); 
};

// function to write page 
const generatePage = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Our Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>
    <body>
    
    <header class="hero is-link">
        <div class="hero-body has-text-centered">
          <p class="title is-2">Meet Our Team!</p>
        </div>
    </header>

    <main>
        <div class="columns is-desktop is-justify-content-center m-4">
        ${employeeCards(data)}
        </div>
    </main>
        
    </body>
    </html>
    `
}; 

// export function to index.js 
module.exports = generatePage; 