/**
 * 1. Написать функцию createPalette(n), которая создает
 * n кнопок внутри контейнера div.color-palette. У каждой кнопки
 * должен быть атрибут data-color такой же как цвет её фона.
 * Цвет каждой кнопки составляется динамически, вызовом функции getRangomColor.
 *
 * 2. При клике на элемент палитры, в поле p.output должно отображаться
 * hex значение цвета элемента. Цвет текста должен быть такой же как выбранный.
 */
const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output > span');

function getRangomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
