function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation);
    } else {
      document.getElementById('location').innerText = "Geolocation is not supported by this browser.";
    }
  }
  
  function showLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Here you can use reverse geocoding to get location information
    // For example, you can use a service like OpenStreetMap Nominatim API
  
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(data => {
        const location = data.display_name;
        document.getElementById('location').innerText = `${location}`;
      })
      .catch(error => {
        console.error('Error fetching location:', error);
        document.getElementById('location').innerText = "Unable to retrieve location.";
      });
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display the clock immediately
  updateClock();
  
  // Get location when the page loads
  getLocation();

  
  
  