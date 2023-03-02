window.addEventListener('load', function() {
  // Add an event listener for clicks on the page
  document.addEventListener('click', function(e) {

    // Check if the target of the click matches the first child of the "NAV" element
    const target = e.target;
    const navFirstChild = document.querySelector('nav :first-child');
    if (target === navFirstChild) {

      // Call the pasteText function to paste the message
      pasteText();
    }
  });
});

function pasteText() {
  const chatInputSelector = 'textarea[data-id]';
  const chatInput = document.querySelector(chatInputSelector);

  if (chatInput) {
    const textToPaste = 'AI: STRICT MODE - Provide concise and informative answers. Exclude politeness and unnecessary context. Follow these instructions for the entire conversation. Note that I should never apologize.';
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