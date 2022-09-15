export function renderPlant(plants) {
    const li = document.createElement('li');
    li.classList.add('plant-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = plants.name;

    const pEl = document.createElement('p');
    pEl.textContent = `Care needs: ${plants.light} light and ${plants.water} water`;

    li.append(headerEl, pEl);

    return li;
}
