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

counter.addEventListener('click', event => {
  const { action } = event.target.dataset;
  countValue.textContent = counterObject.count;

  if (action === 'increment') {
    counterObject.increment();
  }

  if (action === 'decrement') {
    counterObject.decrement();
  }
});
