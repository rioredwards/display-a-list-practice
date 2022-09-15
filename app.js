// import functions and grab DOM elements
import { plants } from './plants-data.js';
import { renderPlant } from './render-plant.js';
import { frogs } from './frogs-data.js';
import { renderFrog } from './render-frog.js';

const frogsList = document.getElementById('frogs-list');
const plantsList = document.getElementById('plants-list');

function displayPlants() {
    plantsList.innerHTML = '';

    for (let plant of plants) {
        const plantEl = renderPlant(plant);
        plantsList.append(plantEl);
    }
}

function displayFrogs() {
    frogsList.innerHTML = '';

    for (let frog of frogs) {
        const frogEl = renderFrog(frog);
        frogsList.append(frogEl);
    }
}

displayPlants();
displayFrogs();
