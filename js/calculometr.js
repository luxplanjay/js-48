class Calculometr {
  constructor({ selector }) {
    this.root = document.querySelector(selector);
    this.form = this.root.querySelector('form');
    this.output = this.root.querySelector('.output');
    this.bindEvents();
  }

  bindEvents() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(this.form);
      let total = 0;
      for (const entry of formData) {
        total += Number(entry[1]);
      }
      this.form.reset();
      this.output.textContent = total;
    });
  }
}

new Calculometr({
  selector: '#c-1',
});

new Calculometr({
  selector: '#c-2',
});
