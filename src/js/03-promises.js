import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const firstDelay = parseInt(formData.get('delay'));
  const delayStep = parseInt(formData.get('step'));
  const amount = parseInt(formData.get('amount'));
  
  for (let i = 1; i <= amount; i++) {
    try {
      await createPromise(i, firstDelay + (i - 1) * delayStep);
      console.log(`Promise ${i} resolved after ${firstDelay + (i - 1) * delayStep} ms`);
    } catch (error) {
      console.log(`Promise ${i} rejected after ${firstDelay + (i - 1) * delayStep} ms`);
    }
  }
});
