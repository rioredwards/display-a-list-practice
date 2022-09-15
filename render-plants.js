export function renderPlants(plants) {
    const li = document.createElement('li');
    li.classList.add('plant-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = plants.name;

    const pEl = document.createElement('p');
    pEl.textContent = plants.light + plants.water;

    li.append(headerEl, pEl);
}
