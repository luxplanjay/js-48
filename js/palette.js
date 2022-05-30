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

createPalette(100);

colorPalette.addEventListener('click', onPaletteClick);

function onPaletteClick(event) {
  const { color } = event.target.dataset;
  if (color) {
    output.textContent = color;
    output.style.color = color;
  }
}

function createPalette(numberOfItems) {
  const items = [];
  for (let i = 0; i < numberOfItems; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement('button');
    item.classList.add('item');
    item.dataset.color = color;
    item.style.backgroundColor = color;
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
