function generateRandomText() {
  const randomText = getRandomText();
  const randomTextElement = document.getElementById('randomText');
  randomTextElement.textContent = randomText;

  const copyButton = document.getElementById('copyButton');
  copyButton.disabled = false;
}

function copyText() {
  const randomTextElement = document.getElementById('randomText');
  const textToCopy = randomTextElement.textContent;

  const tempInput = document.createElement('input');
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);

  tempInput.select();
  tempInput.setSelectionRange(0, 99999); 

  document.execCommand('copy');

  document.body.removeChild(tempInput);

  alert('Text copied to clipboard!');
}

function getRandomText() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-+=~`|{}[]:;<>?,./';
  let randomText = '';
   

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
}
