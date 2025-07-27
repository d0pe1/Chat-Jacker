// Content script for Chat-Jacker
// Placeholder selectors until DOM dumps provided

function sendPromptToPage(prompt) {
  const input = document.querySelector('textarea'); // TODO: replace with real selector
  if (input) {
    input.value = prompt;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    const form = input.closest('form');
    if (form) form.dispatchEvent(new Event('submit', { bubbles: true }));
  }
}

function checkCompletion() {
  // TODO: implement detection based on DOM
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'executePrompt') {
    sendPromptToPage(message.prompt);
  }
});

const observer = new MutationObserver(() => {
  if (checkCompletion()) {
    const response = document.body.innerText; // TODO: refine selection
    chrome.runtime.sendMessage({ type: 'responseCaptured', text: response });
  }
});

observer.observe(document.body, { childList: true, subtree: true });
