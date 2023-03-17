function pasteText() {
  const chatInputSelector = 'textarea[data-id]';
  const chatInput = document.querySelector(chatInputSelector);

  if (chatInput) {
    const textToPaste = 'AI: For this entire conversation, please provide concise and informative answers without any politeness, apologies, or additional context.';
    chatInput.value = textToPaste;

    setTimeout(clickSendButton, 100); // Adjust the timeout value as needed
  }
}

function clickSendButton() {
  const chatInputSelector = 'textarea[data-id]';
  const chatInput = document.querySelector(chatInputSelector);
  
  if (chatInput) {
    const sendButton = chatInput.nextElementSibling;

    if (sendButton) {
      sendButton.click();
    }
  }
}

setTimeout(pasteText, 1000); // Adjust the timeout value as needed

