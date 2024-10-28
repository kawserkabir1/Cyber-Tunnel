const ipInputElement = document.getElementById('ip-input');
const trackButton = document.getElementById('track-button');
const ipAddressElement = document.getElementById('ip-address');
const locationInfoElement = document.getElementById('location-info');

// Function to fetch and display IP details
function getIPDetails(ipAddress) {
  ipAddressElement.innerText = `IP Address: ${ipAddress}`;

  fetch(`https://ipapi.co/${ipAddress}/json/`)
    .then(response => response.json())
    .then(locationData => {
      locationInfoElement.innerHTML = `
                <p>Country: ${locationData.country_name}</p>
                <p>Region: ${locationData.region}</p>
                <p>City: ${locationData.city}</p>
                <p>Latitude: ${locationData.latitude}</p>
                <p>Longitude: ${locationData.longitude}</p>
            `;
    })
    .catch(error => {
      console.error('Error fetching location:', error);
      locationInfoElement.innerText = 'Unable to fetch location details.';
    });
}
console.log('Author : @K4BIRR \n Powered By: Cyber Tunnel \n Made in 2K24 in BD');

// Get user's IP address
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    ipInputElement.value = data.ip; // Set the IP in the input field
    getIPDetails(data.ip); // Fetch and display details for the user's IP
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
    ipAddressElement.innerText = 'Unable to fetch IP address.';
  });

trackButton.addEventListener('click', () => {
  const ipAddress = ipInputElement.value;
  getIPDetails(ipAddress); // Fetch and display details for the entered IP
});