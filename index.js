// Possible names and occupations //

const names = ['Alice', 'Bob', 'Carol', 'David', 'Eve'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Consultant'];

// Initial array of freelancers //

let freelancers = [
    { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
    { name: 'Bob', occupation: 'Teacher', startingPrice: 50 },
    { name: 'Carol', occupation: 'Programmer', startingPrice: 70 },
];


// Function to render initial freelancer data //

function renderFreelancers() {
    const freelancersList = document.getElementById('freelancers-list');
    freelancersList.innerHTML = '';
    const freelancersBorder = document.getElementById('freelancers-border').style.border = "thick solid #000";
    const freelancersBorderRadius = document.getElementById('freelancers-border').style.borderRadius = "10px";
    const freelancersTextAlign = document.getElementById('freelancers-border').style.textAlign = "center";

    freelancers.forEach(freelancer => {
        const listItem = document.createElement('ul');
        listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - Starting Price: $${freelancer.startingPrice}`;
        freelancersList.appendChild(listItem);
    });
}

// Function to generate a new random freelancer //

function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100
    const newFreelancer = { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
    freelancers.push(newFreelancer);
    renderFreelancers();
    updateAveragePrice();
}

// Function to calculate the average starting price //

function calculateAveragePrice() {
    const totalStartingPrice = freelancers.reduce((acc, freelancer) => acc + freelancer.startingPrice, 0);
    return (totalStartingPrice / freelancers.length).toFixed(2);
}

// Function to update the displayed average price message //
function updateAveragePrice() {
    const averagePriceSpan = document.querySelector('#average-price');
    averagePriceSpan.textContent = calculateAveragePrice();
}
// Initial render //
renderFreelancers();
updateAveragePrice();

// Add new freelancers every few seconds //
setInterval(generateRandomFreelancer, 5000);
