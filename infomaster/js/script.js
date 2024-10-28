const deviceInfoElement = document.getElementById('device-info');
const browserInfoElement = document.getElementById('browser-info');

// Function to get and display device information
function getDeviceInfo() {
  const deviceInfo = {
    "Operating System": navigator.platform,
    "Device Type": /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
    "Screen Resolution": `${screen.width} x ${screen.height}`,
    "Viewport": `${window.innerWidth} x ${window.innerHeight}`,
    "Pixel Ratio": window.devicePixelRatio,
    "Available Memory": `${(navigator.deviceMemory || 0).toFixed(1)} GB`, // In GB
    "Hardware Concurrency": navigator.hardwareConcurrency,
    "Max Touch Points": navigator.maxTouchPoints,
    "Connection Type": navigator.connection?.effectiveType || "Unknown",
    "Online Status": navigator.onLine ? "Online" : "Offline",
    "Language": navigator.language,
    "Languages": navigator.languages.join(", "),
    "Do Not Track": navigator.doNotTrack || "Not Specified",
    "Geolocation": navigator.geolocation ? "Available" : "Not Available",
    "Cookie Enabled": navigator.cookieEnabled ? "Yes" : "No",
    "Java Enabled": navigator.javaEnabled() ? "Yes" : "No",
    "Product": navigator.product,
    "Product Sub": navigator.productSub,
    "Vendor": navigator.vendor,
    "Vendor Sub": navigator.vendorSub
  };

  let infoHTML = '';
  for (const key in deviceInfo) {
    infoHTML += `<p>${key}: ${deviceInfo[key]}</p>`;
  }
  deviceInfoElement.innerHTML = infoHTML;
}

// Function to get and display browser information
function getBrowserInfo() {
  const browserInfo = {
    "Browser Name": navigator.appName,
    "Browser Version": navigator.appVersion,
    "User Agent": navigator.userAgent,
    "Code Name": navigator.appCodeName,
    "Platform": navigator.platform,
    "Cookies Enabled": navigator.cookieEnabled ? "Yes" : "No",
    "Product": navigator.product,
    "Product Sub": navigator.productSub,
    "Vendor": navigator.vendor,
    "Vendor Sub": navigator.vendorSub,
  };

  let infoHTML = '';
  for (const key in browserInfo) {
    infoHTML += `<p>${key}: ${browserInfo[key]}</p>`;
  }
  browserInfoElement.innerHTML = infoHTML;
}

// Get device and browser info on page load
getDeviceInfo();
getBrowserInfo();