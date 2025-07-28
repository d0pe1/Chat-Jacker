# Usage Examples

This document shows how to interact with the Chat-Jacker extension from any page.

1. Load the `extension` directory as an unpacked extension in your Chromium based browser.
2. In a tab with ChatGPT or Codex open, open the developer console and run:
   ```javascript
   chrome.runtime.sendMessage({type: 'enqueuePrompt', prompt: 'Hello world'});
   ```
   The extension will send the prompt to the active page and capture the response.
3. Captured outputs are POSTed to `http://localhost:5000/agent-response` where the agent framework can process them.
4. Multiple prompts may be enqueued; the extension will wait for completion before sending the next.

See `README.md` for an overview of the repository structure.
