
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
            uniqueField = 'GitHub'; 
            uniqueFieldVal = github; 
        } else if(school) {
            uniqueField = 'School'; 
            uniqueFieldVal = school; 
        } else if(officeNumber) {
            uniqueField = 'Office #'; 
            uniqueFieldVal = officeNumber; 
        }; 
        
        // html for cards 
        let card = `
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <p>${name}</p>
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
    
    <header>
    </header>

    <main>
    <p>Hello World!</p>
    <p>${employeeCards(data)}</p>
    </main>

    <footer>
    </footer>
        
    </body>
    </html>
    `
}; 

// export function to index.js 
module.exports = generatePage; 