export function renderFrog(frogs) {
    const li = document.createElement('li');
    li.classList.add('frog-item');

    const headerEl = document.createElement('h2');
    headerEl.textContent = frogs.name;

    const imgEl = document.createElement('img');
    imgEl.src = `./assets/frogs/${frogs.img}`;
    imgEl.alt = `A ${frogs.name}`;

    const pEl = document.createElement('p');
    pEl.textContent = `${frogs.name}'s live in: `;
    for (let habitat of frogs.habitat) {
        pEl.textContent += `${habitat}, `;
    }

    li.append(headerEl, pEl);

    return li;
}
