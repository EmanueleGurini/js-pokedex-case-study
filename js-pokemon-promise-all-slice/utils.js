'use strict'

const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

/**
 * Return the id formatted as following # 000 
 * @param {number} n
 * @returns id
 */
const getId = (n) => {
	if (!n) return null;

	let id = n;
	if (id < 10) {
		id = '00' + id
	} else if (id < 100) {
		id = '0' + id
	}
	return id;
}

/**
 * Create a card with dynamic color
 * 
 * @param {HTMLElement} parent 
 * @param {string}} imgLink 
 * @param {string} pokemonName 
 * @param {string} id 
 * @param {string} type 
 */
const createCard = (parent, imgLink, pokemonName, id, type) => {
	const card = c('div');
	const nameEl = c('h2');
	const idEl = c('span');
	const imgEl = c('img');
	const typeEl = c("p");

	card.className = "card"
	card.classList.add(type);

	imgEl.setAttribute('alt', pokemonName);
	imgEl.setAttribute('src', imgLink)

	nameEl.textContent = pokemonName
	idEl.textContent = `# ${getId(id)}`;
	typeEl.textContent = `Type: ${type ? type : ""}`

	card.append(imgEl, nameEl, idEl, typeEl);
	parent.appendChild(card);
}

export { c, createCard, q, getId };