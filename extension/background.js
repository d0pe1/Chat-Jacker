// Background script for Chat-Jacker
// Handles queued prompts and messaging with content scripts

const promptQueue = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'enqueuePrompt') {
    promptQueue.push(message.prompt);
    processQueue();
  } else if (message.type === 'responseCaptured') {
    console.log('Captured response:', message.text);
    processQueue();
  }
});

function processQueue() {
  if (promptQueue.length === 0) return;
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (tabs[0]) {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'executePrompt', prompt: promptQueue.shift() });
    }
  });
}
