// Content script for Chat-Jacker
// Handles DOM interaction for ChatGPT and Codex

function isCodexMainPage() {
  const heading = document.querySelector('h1');
  return heading && /What are we coding/i.test(heading.textContent);
}

function isCodexTaskWindow() {
  return document.querySelector('[aria-label="Composer to enter a follow up prompt to the task"]');
}

function getCodexInput() {
  return document.getElementById('prompt-textarea') ||
         document.querySelector('textarea[name="prompt-textarea"]');
}

function getCodexSendButton() {
  if (isCodexTaskWindow()) {
    return document.querySelector('[data-testid="code-button"]') ||
           Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Code');
  }
  return document.querySelector('[data-testid="ask-button"]') ||
         Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Ask');
}

function getCodexMessageContainer() {
  return document.querySelector('[data-testid="conversation-panel"]') || document.querySelector('main');
}

function isChatGPTPage() {
  return location.hostname.includes('chat.openai.com') ||
         location.hostname.includes('chatgpt.com');
}

function getChatGPTInput() {
  return document.querySelector('textarea[name="prompt-textarea"]');
}

function getChatGPTSendButton() {
  const input = getChatGPTInput();
  return input?.closest('form')?.querySelector('button[type="submit"]');
}

function getChatGPTMessageContainer() {
  return document.querySelector('main');
}

function getSidebarChats() {
  const sidebar = document.querySelector('nav');
  if (!sidebar) return [];
  return Array.from(sidebar.querySelectorAll('a[href*="/c/"]')).map(a => {
    const href = a.getAttribute('href');
    const id = href ? href.split('/c/')[1] : null;
    return { id, title: a.textContent.trim(), element: a };
  });
}

function selectChat(chatIdOrTitle) {
  const chats = getSidebarChats();
  const chat = chats.find(c => c.id === chatIdOrTitle || c.title === chatIdOrTitle);
  if (chat && chat.element) {
    chat.element.click();
    return true;
  }
  return false;
}

function startNewChat() {
  const evt = new KeyboardEvent('keydown', {
    key: 'O',
    code: 'KeyO',
    ctrlKey: true,
    shiftKey: true,
    bubbles: true,
    cancelable: true
  });
  document.dispatchEvent(evt);
  const btn = document.querySelector('a,button[aria-label="New chat"]');
  if (btn) btn.click();
}

function sendPromptToPage(prompt) {
  if (isChatGPTPage()) {
    const input = getChatGPTInput();
    const button = getChatGPTSendButton();
    if (input) {
      input.focus();
      input.value = prompt;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      if (button) setTimeout(() => button.click(), 100);
    }
    return;
  }

  const input = getCodexInput();
  const button = getCodexSendButton();
  if (input) {
    input.focus();
    input.value = prompt;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    if (button) {
      setTimeout(() => button.click(), 100);
    }
  }
}

function checkCompletion() {
  if (isChatGPTPage()) {
    const container = getChatGPTMessageContainer();
    if (!container) return false;
    return !container.querySelector('.result-streaming');
  }
  const container = getCodexMessageContainer();
  if (!container) return false;
  return !container.querySelector('.result-streaming,[data-testid="bot-spinner"],.animate-spin');
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'executePrompt') {
    sendPromptToPage(message.prompt);
  }
});

let debounceTimer;
const observer = new MutationObserver(() => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    if (checkCompletion()) {
      let container, messages, response;
      if (isChatGPTPage()) {
        container = getChatGPTMessageContainer();
        messages = container?.querySelectorAll('.markdown') || [];
      } else {
        container = getCodexMessageContainer();
        messages = container?.querySelectorAll('[data-testid="message"]') || [];
      }
      response = messages[messages.length - 1]?.innerText || '';
      chrome.runtime.sendMessage({ type: 'responseCaptured', text: response });
    }
  }, 200);
});

observer.observe(document.body, { childList: true, subtree: true });

window.chatJacker = {
  getSidebarChats,
  selectChat,
  startNewChat,
  sendPromptToPage
};
