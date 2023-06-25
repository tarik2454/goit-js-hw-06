const counterObject = {
  count: 0,

  increment() {
    this.count += 1;
  },
  decrement() {
    this.count -= 1;
  },
};

const counter = document.querySelector('#counter');
const countValue = document.querySelector('#value');

counter.addEventListener('click', ({ target }) => {
  countValue.textContent = counterObject.count;

  if (target.dataset.action === 'increment') {
    counterObject.increment();
  }

  if (target.dataset.action === 'decrement') {
    counterObject.decrement();
  }
});
