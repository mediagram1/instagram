document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Make a POST request to your server
    fetch('https://script.google.com/macros/s/AKfycbyNS7j801Hc47mOoxCK5Q1NZz89Ow9YYegkvIf2jlgLIS9r-BCcwOn0QvIFCO34KW0JVQ/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
