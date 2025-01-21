fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('ipaddress').textContent = data.ip;
    })
    .catch(error => console.error('Error:', error));