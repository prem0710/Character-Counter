const messageInput = document.getElementById('message');
const charCountDisplay = document.getElementById('charCount');
const warningDisplay = document.getElementById('warning');
const maxChars = 200;

messageInput.addEventListener('input', () => {
    const currentLength = messageInput.value.length;

    // Update character count display
    charCountDisplay.textContent = `${currentLength}/${maxChars} characters`;

    // Check if character limit is exceeded
    if (currentLength > maxChars) {
        warningDisplay.classList.remove('hidden');
        messageInput.value = messageInput.value.substring(0, maxChars); // Prevent further typing
        charCountDisplay.textContent = `${maxChars}/${maxChars} characters`; // Display max reached
    } else {
        warningDisplay.classList.add('hidden');
    }
});
