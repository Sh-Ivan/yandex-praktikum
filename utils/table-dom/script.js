'use strict';

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
	const rows = table.rows;
	for (let i = 0; i < rows.length; i++) {
		const [name, age, gender, role] = rows[i].cells;
		if (role.dataset.role === 'regular') {
			rows[i].classList.add('regular');
		} else if (role.dataset.role === 'admin') {
			rows[i].classList.add('admin');
		} else {
			rows[i].setAttribute('hidden', true);
		}

		if (gender.textContent === 'm') {
			rows[i].classList.add('male');
		} else if (gender.textContent === 'f') {
			rows[i].classList.add('female');
		}

		if (+age.textContent < 18) {
			rows[i].style.textDecoration = 'line-through';
		}
	}
}
