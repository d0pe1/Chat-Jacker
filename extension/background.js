// Background script for Chat-Jacker
// Handles queued prompts and messaging with content scripts

// uuid: dbbd0a3f
const api = typeof browser !== 'undefined' ? browser : chrome;
const promptQueue = [];
let active = false;
const responses = [];

api.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'enqueuePrompt') {
    const tabId = sender.tab ? sender.tab.id : null;
    promptQueue.push({ prompt: message.prompt, tabId });
    processQueue();
  } else if (message.type === 'responseCaptured') {
    console.log('Captured response:', message.text);
    active = false;
    responses.push({ text: message.text, tabId: sender.tab ? sender.tab.id : null });
    sendToAgentFramework(message.text);
    processQueue();
  } else if (message.type === 'domMismatch') {
    console.warn('DOM mismatch reported:', message.info);
    sendToAgentFramework('DOM mismatch: ' + message.info);
  }
});

function processQueue() {
  if (active || promptQueue.length === 0) return;
  active = true;
  const item = promptQueue.shift();
  const send = (tabId) => {
    api.tabs.sendMessage(tabId, { type: 'executePrompt', prompt: item.prompt });
  };
  if (item.tabId) {
    send(item.tabId);
  } else {
    api.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs[0]) send(tabs[0].id);
    });
  }
}

function sendToAgentFramework(text) {
  fetch('http://localhost:5000/agent-response', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ response: text })
  }).catch(err => console.error('Failed to send to agent framework', err));
}
