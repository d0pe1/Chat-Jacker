# Chat-Jacker Usage Guide

This guide explains how to install the Chat-Jacker browser extension and run the accompanying agent framework.

## Prerequisites
- **Node.js** 18 or later for running tests and the agent framework.
- A Chromium based browser (Chrome, Brave, Edge).
- Optional: a local service listening on `http://localhost:5000/agent-response` to consume captured outputs.

## Installing Dependencies
1. Clone this repository.
2. Run `npm install` in the project root to install the test dependencies.

### Firefox
Run `npm run firefox` to start the extension in Firefox using web-ext.
Use `npm run test:firefox` to run the test suite and launch Firefox automatically.

## Loading the Extension
1. Open your browser's extensions page and enable *Developer Mode*.
2. Choose **Load unpacked** and select the `extension` directory from this repo.
3. The extension will appear as **Chat-Jacker**.

## Sending Prompts
Use the browser console or another extension to send messages to the active page:
```javascript
chrome.runtime.sendMessage({ type: 'enqueuePrompt', prompt: 'Hello world' });
```
The script queues the prompt, dispatches it to ChatGPT or Codex, waits for the response, and forwards the captured text to `http://localhost:5000/agent-response`.

Multiple prompts may be queued. The extension ensures each response is received before submitting the next one.

### Chat Management APIs
The content script exposes helper methods via `window.chatJacker`:
- `getSidebarChats()` – list available chats with ids and titles.
- `selectChat(idOrTitle)` – open a chat by id or visible title.
- `startNewChat()` – start a new conversation using ChatGPT's shortcut.
- `sendPromptToPage(text)` – inject and send a prompt immediately.

These utilities allow custom scripts to manage conversations or recover from DOM changes.

## Running Tests
Execute `npm test` to run the jsdom-based tests under `test/`. All tests should pass before creating a release package.

## Releasing
1. Update `extension/manifest.json` with an appropriate version number.
2. Verify tests pass and documentation is up to date.
3. Package the `extension` directory as a zip file for distribution or load it unpacked during development.

The repository contains a complete history of tasks and planning files. Refer to `DevDiary.md` for the chronology of development decisions.
