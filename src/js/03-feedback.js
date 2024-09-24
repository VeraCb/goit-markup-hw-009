const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageTextarea = document.querySelector('textarea[name="message"]');

form.addEventListener('input', _.throttle(function() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));

window.addEventListener('load', function() {
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedFormData) {
    emailInput.value = savedFormData.email;
    messageTextarea.value = savedFormData.message;
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
});