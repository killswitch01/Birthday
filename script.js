const submitButton = document.getElementById('submitName');
const nameInput = document.getElementById('nameInput');
const errorMsg = document.getElementById('errorMsg');
const inputContainer = document.getElementById('inputContainer');
const messageContainer = document.getElementById('messageContainer');

submitButton.addEventListener('click', () => {
  const name = nameInput.value.trim().toLowerCase();

  if (name === 'simran') {
    inputContainer.style.display = 'none';
    messageContainer.classList.remove('hidden');
  } else {
    errorMsg.textContent = "Oops! That's not the right name. Try again.";
  }
});
