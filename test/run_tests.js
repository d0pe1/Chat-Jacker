import { JSDOM } from 'jsdom';
import vm from 'vm';
import { readFileSync } from 'fs';

const snippet = `<nav>
  <a href="/c/123">Chat One</a>
  <a href="/c/456">Chat Two</a>
  <a aria-label="New chat" href="/new">New chat</a>
</nav>`;
const dom = new JSDOM(snippet, { url: 'https://chat.openai.com' });
const { window } = dom;
const context = {
  MutationObserver: class { constructor(){} observe(){} disconnect(){} },
  window,
  document: window.document,
  KeyboardEvent: window.KeyboardEvent,
  chrome: { runtime: { onMessage: { addListener: () => {} }, sendMessage: () => {} } }
};
context.global = context;
vm.createContext(context);
const script = readFileSync('extension/content.js', 'utf8');
vm.runInContext(script, context);

const chats = window.chatJacker.getSidebarChats();
if (chats.length !== 2 || chats[0].id !== '123' || chats[0].title !== 'Chat One') {
  console.error('getSidebarChats failed');
  process.exit(1);
}
if (!window.chatJacker.selectChat('456')) {
  console.error('selectChat failed');
  process.exit(1);
}
window.chatJacker.startNewChat();
console.log('All tests passed');
