function sendMessage() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const messageStatus = document.getElementById('message-status');
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
  
    if (name === '' || email === '' || message === '') {
      messageStatus.textContent = 'Please fill out all fields.';
      messageStatus.style.color = 'red';
      return;
    }
  
    if (!isValidEmail(email)) {
      messageStatus.textContent = 'Please enter a valid email address.';
      messageStatus.style.color = 'red';
      return;
    }
  
    // Simulate sending a message (in a real application, you would send this data to a server)
    messageStatus.textContent = 'Sending message...';
    messageStatus.style.color = 'orange';
  
    // Simulate a successful send after a short delay
    setTimeout(() => {
      messageStatus.textContent = 'Message sent successfully!';
      messageStatus.style.color = 'green';
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    }, 1500);
  }
  
  function isValidEmail(email) {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }