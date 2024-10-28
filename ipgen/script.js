// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate IP based on range
function generateRandomIp() {
  const range = document.getElementById('ipRange').value;
  let ipAddress = '';

  if (range === 'private') {
    // Private IP: 192.168.0.0 - 192.168.255.255
    ipAddress = `192.168.${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}`;
  } else if (range === 'public') {
    // Public IP: 1.0.0.0 - 223.255.255.255
    ipAddress = `${getRandomNumber(1, 223)}.${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}`;
  } else {
    // Random IP: 0.0.0.0 - 255.255.255.255
    ipAddress = `${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}.${getRandomNumber(0, 255)}`;
  }

  document.getElementById('ipAddress').innerText = ipAddress;
}
console.log('Product of Cyber Tunnel \n Developer: K4BIRR');
// Function to copy IP to clipboard
function copyToClipboard() {
  const ipText = document.getElementById('ipAddress').innerText;
  navigator.clipboard.writeText(ipText).then(() => {
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.classList.remove('hidden'); // Show the success message
    setTimeout(() => {
      copyMessage.classList.add('hidden'); // Hide the message after 3 seconds
    }, 3000);
  });
}

// Event listeners
document.getElementById('generateBtn').addEventListener('click', generateRandomIp);
document.getElementById('copyIcon').addEventListener('click', copyToClipboard);
