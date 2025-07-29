Building Chat-Jacker
The super nosey totally intended way to use ChatGPT!

Goal: Build a browser extension that can control ChatGPT and Codex via DOM API.

Requirements:
- Must read and write into the chat input fields in both UIs
- Can detect message completion (when ChatGPT or Codex finishes typing)
- Can pull response text and return it to the agent framework
- Can queue multiple prompts without user intervention
- All interactions must be fully headless (background script + manifest v3)

Note: 
if required, Agents can Ask user for brower dumps / site source

Firefox Support Goal:
- Mirror Chrome extension functionality under Firefox.
- Use browser.* APIs or polyfills for cross-browser messaging.
- Provide a Firefox-optimized manifest with browser_specific_settings.
- Setup web-ext for testing and packaging.
- Ensure background scripts and content scripts behave the same.

