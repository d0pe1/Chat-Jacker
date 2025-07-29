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

ADD 01: 
## **Project Scope: Chat-Jacker CLI**

### **Project Name:**  
**Chat-Jacker CLI** – Fully headless browser automation for ChatGPT & Codex, no extensions required.

---

## **1. Project Goals**

1. **Run ChatGPT and Codex hijacks fully headless:**  
   - Launch browser from CLI (no UI).  
   - Navigate to correct pages, detect landing vs chat/task pages.  
   - Trigger tasks (new chat, search, run commands).  

2. **Reuse existing DOM logic & selectors from Chat-Jacker:**  
   - Inject Chat-Jacker’s logic (selectors, scraping) directly into the page context.  
   - Maintain compatibility with changes in site structure (easy selector updates).  

3. **Make it Agent/CLI-friendly:**  
   - `python chatjacker_cli.py --target chatgpt --action search --query "agent orchestration"`
   - Output results as structured JSON.  
   - Support chaining actions (multi-step workflows).  

4. **Eliminate browser extension dependencies.**

---

## **2. Features & Tasks**

### **A) Core CLI Framework**
- Build a Python entrypoint (`chatjacker_cli.py`) using **Playwright**.
- Accept CLI args:  
  ```bash
  --target chatgpt|codex  
  --action search|new_chat|send|list_chats|list_tasks  
  --query <string>  
  --chat_id <uuid>  
  --task_id <uuid>
  ```
- Output logs & results in structured JSON.

---

### **B) Headless Browser Launcher**
- Use Playwright (Firefox/Chromium) in **headless** mode.
- Persist session/cookies (so login persists between runs).  
- Auto-detect if login is required; prompt once (manual login) then save cookies.

---

### **C) ChatGPT Support**
- **Landing vs chat pages:**  
  - Detect landing page: `https://chatgpt.com/`  
  - Detect chat page: `https://chatgpt.com/c/<uuid>`  
- **Supported actions:**  
  1. `list_chats`: scrape sidebar for all chat IDs & titles.  
  2. `new_chat`: trigger hotkey (Ctrl+Shift+O) → capture new chat ID.  
  3. `search`: trigger hotkey (Ctrl+K) → scrape live feed of results.  
  4. `send`: open a chat, send message, wait for completion, capture response.

---

### **D) Codex Support**
- **Landing vs task pages:**  
  - Landing page: `https://chatgpt.com/codex`  
  - Task page: `https://chatgpt.com/codex/tasks/task_e_<uuid>`  
- **Supported actions:**  
  1. `list_tasks`: scrape task list.  
  2. `open_task`: navigate directly to task page and capture DOM.  
  3. `send`: submit instructions to Codex tasks (if interactive).  

---

### **E) Selector Layer (Injectable DOM Hooks)**  
- Create a `selectors.py` or JS snippet with all DOM query selectors used by Chat-Jacker.  
- Inject via Playwright’s `page.evaluate()` when needed:  
  ```python
  page.evaluate("window.ChatJackerHooks.sendMessage('Hello')")
  ```

---

### **F) Output Layer**  
- Results return as JSON:
  ```json
  {
    "status": "success",
    "target": "chatgpt",
    "action": "send",
    "chat_id": "688942f5-2bf4-8324-aa1f-f3571b9ca925",
    "message": "Hello!",
    "response": "Hi, how can I help you?"
  }
  ```
- Easy for chaining with agents.

---

### **G) Agent Integration Hooks**
- Build a `--plan` mode:  
  - Accept task files (`agent_tasks.md`)  
  - Perform sequences (e.g., search → select chat → send prompt → export response).  

---

## **3. Stretch Goals**
- Add **parallel execution** (multiple headless browser contexts).  
- Add **stealth mode** to evade bot detection.  
- Build **modular task templates** for agentic workflows.  
- Integrate with **GitHub tooling** (e.g., auto-fetch Codex outputs into repos).  

---

## **4. Dependencies**
- **Playwright**: `pip install playwright`  
- **python-dotenv**: for token/cookie paths  
- **rich**: for pretty CLI logging  
- Optional: `typer` or `click` for cleaner CLI arg parsing.

---

## **5. Timeline**
**Week 1:**  
- Core CLI + Playwright setup.  
- Persistent login/session storage.  
- ChatGPT actions: list_chats, new_chat, send, search.  

**Week 2:**  
- Codex actions: list_tasks, open_task, send.  
- JSON output layer.  
- Agent chaining & selectors refactor.  
- Stretch: parallel execution.

---

## **6. Deliverables**
1. `chatjacker_cli.py` (main CLI entrypoint).  
2. `targets/chatgpt.py` & `targets/codex.py` (target-specific actions).  
3. `selectors.js` (DOM hooks).  
4. JSON output for every command.  
5. Documentation & examples:
   ```bash
   python chatjacker_cli.py --target chatgpt --action search --query "dag orchestration"
   ```

