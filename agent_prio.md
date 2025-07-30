# Active Subtasks

### ***Example:***
---
- uuid: < unique name or UUID >
  parent: <Parent Task/Milestone UUID>
  description: Describe the task and how it plugs into other tasks
  why: what should function if this is done?
  depends_on: [Blocker Task UUID]
  status: [x]
---

### ***Agent Prio Tasks:***
---
- uuid: cd6121a1
  parent: bc756a2e
  description: Parse projectscope and design milestones
  why: Break down goals into actionable items
  depends_on: []
  status: [x]
---
- uuid: 0e733c6b
  parent: bc756a2e
  description: Update task files, metrics, and state
  why: Record initial planning information
  depends_on: [cd6121a1]
  status: [x]
---
- uuid: e19adce7
  parent: bc756a2e
  description: Generate initial taskmap.svg
  why: Visual reference of project timeline
  depends_on: [0e733c6b]
  status: [x]
---
- uuid: 96a1b336
  parent: 55b22049
  description: Request ChatGPT DOM dump from user
  why: Need accurate selectors for automation
  depends_on: []
  status: [x]
---
- uuid: a20ccaaa
  parent: 55b22049
  description: Request Codex DOM dump from user
  why: Need accurate selectors for automation
  depends_on: []
  status: [x]
---
- uuid: a057f02e
  parent: 55b22049
  description: Analyze DOM dumps and document selectors
  why: Provide reliable hooks for scripts
  depends_on: [96a1b336, a20ccaaa]
  status: [x]
---
- uuid: b79cc393
  parent: 8d468653
  description: Create extension manifest using MV3
  why: Chrome/Firefox extension base configuration
  depends_on: [a057f02e]
  status: [x]
---
- uuid: 532b4a5c
  parent: 8d468653
  description: Scaffold background script
  why: Manage headless interactions and queue
  depends_on: [b79cc393]
  status: [x]
---
- uuid: 885bad7c
  parent: 8d468653
  description: Scaffold content script
  why: Interface with page DOM
  depends_on: [b79cc393]
  status: [x]
---
- uuid: 649d87e9
  parent: 8d468653
  description: Update repository manifest with extension files
  why: Track new artifacts for agents
  depends_on: [532b4a5c, 885bad7c]
  status: [x]
---
- uuid: 0572df48
  parent: 8d468653
  description: Run MetaStateChecker after skeleton implementation
  why: Verify milestone integration
  depends_on: [649d87e9]
  status: [x]
---
- uuid: b35f9be0
  parent: e8e121d2
  description: Implement ChatGPT read/write helpers
  why: Allow extension to send and receive prompts
  depends_on: [a057f02e, 649d87e9]
  status: [x]
---
- uuid: 8968c023
  parent: e8e121d2
  description: Detect ChatGPT response completion
  why: Know when to capture output and send next prompt
  depends_on: [b35f9be0]
  status: [x]
---
- uuid: a6d5ea2f
  parent: e8e121d2
  description: Capture ChatGPT output text
  why: Return generated responses to agent framework
  depends_on: [8968c023]
  status: [x]
---
- uuid: bbfc3e82
  parent: e8e121d2
  description: Run MetaStateChecker for ChatGPT handlers
  why: Ensure reliability before continuing
  depends_on: [a6d5ea2f]
  status: [x]
---
- uuid: 7045ec12
  parent: 295fe504
  description: Implement Codex read/write helpers
  why: Automate Codex interactions
  depends_on: [a057f02e, 649d87e9]
  status: [x]
---
- uuid: d4a56894
  parent: 295fe504
  description: Detect Codex response completion
  why: Trigger capture and next prompt
  depends_on: [7045ec12]
  status: [x]
---
- uuid: 5ee32f69
  parent: 295fe504
  description: Capture Codex output text
  why: Provide responses back to agent framework
  depends_on: [d4a56894]
  status: [x]
---
- uuid: 7146df7c
  parent: 295fe504
  description: Run MetaStateChecker for Codex handlers
  why: Validate DOM automation stage
  depends_on: [5ee32f69]
  status: [x]
---
- uuid: bd305eed
  parent: a57eb7aa
  description: Implement shared prompt queue manager
  why: Coordinate multiple prompts across platforms
  depends_on: [bbfc3e82, 7146df7c]
  status: [x]
---
- uuid: 89f8dcf4
  parent: a57eb7aa
  description: Integrate completion detection with queue
  why: Automatically issue next prompt when ready
  depends_on: [bd305eed]
  status: [x]
---
- uuid: 71a3f231
  parent: a57eb7aa
  description: Send captured outputs to agent framework
  why: Provide data for higher-level automation
  depends_on: [89f8dcf4]
  status: [x]
---
- uuid: 62540b33
  parent: a57eb7aa
  description: Run MetaStateChecker for queue manager
  why: Confirm stable automation loop
  depends_on: [71a3f231]
  status: [x]
---
- uuid: 6946d58d
  parent: 7be14b8e
  description: Finalize documentation and examples
  why: Help users understand extension usage
  depends_on: [62540b33]
  status: [x]
---
- uuid: 3cbba0f3
  parent: 7be14b8e
  description: Update metrics and state for project completion
  why: Record final task statuses and graph hash
  depends_on: [6946d58d]
  status: [x]
---
- uuid: 40927029
  parent: 7be14b8e
  description: Run final MetaStateChecker
  why: Verify repository consistency before closing
  depends_on: [3cbba0f3]
  status: [x]
---
- uuid: 6e369182
  parent: 5a2f75cd
  description: Parse sidebar DOM for chat ids and titles
  why: Provide chat listing via getSidebarChats
  depends_on: []
  status: [x]
---
- uuid: ba6917bf
  parent: 5a2f75cd
  description: Implement selectChat to open chat by id or title
  why: Allow agents to switch conversations
  depends_on: [6e369182]
  status: [x]
---
- uuid: d274812e
  parent: 5a2f75cd
  description: Implement startNewChat via keyboard shortcut
  why: Enable automated new conversation creation
  depends_on: [6e369182]
  status: [x]
---
- uuid: da51f763
  parent: 5a2f75cd
  description: Update documentation, metrics and state for new features
  why: Keep project records consistent
  depends_on: [ba6917bf, d274812e]
  status: [x]
---
---
- uuid: a8e5f211
  parent: c3a1b840
  description: Parse ChatGPT sidebar DOM for chat ids and titles
  why: Provide reliable hooks for chat management
  depends_on: []
  status: [x]
---
- uuid: b8e7a390
  parent: c3a1b840
  description: Implement getSidebarChats function
  why: List available chats for agent control
  depends_on: [a8e5f211]
  status: [x]
---
- uuid: c1be24f6
  parent: c3a1b840
  description: Implement selectChat to open chat by id or title
  why: Allow agents to navigate conversations
  depends_on: [b8e7a390]
  status: [x]
---
- uuid: d1a5ed42
  parent: c3a1b840
  description: Implement startNewChat via DOM or keyboard
  why: Enable automated new conversation creation
  depends_on: [b8e7a390]
  status: [x]
---
- uuid: e2cf3bc5
  parent: c3a1b840
  description: Expose chat management APIs to other agents
  why: Allow modular integration
  depends_on: [c1be24f6, d1a5ed42]
  status: [x]
---
- uuid: fa8b39d3
  parent: c3a1b840
  description: Write tests and handle errors for chat management
  why: Ensure reliability of sidebar features
  depends_on: [e2cf3bc5]
  status: [x]
---
- uuid: f1069bd2
  parent: c3a1b840
  description: Flag DOM mismatches if selectors fail
  why: Alert user when sidebar markup changes
  depends_on: [fa8b39d3]
  status: [x]
---
---
- uuid: cde0940e
  parent: fb052e6a
  description: Document Chrome extension features and event flow in DevDiary
  why: Establish baseline for Firefox parity
  depends_on: []
  status: [x]
---
- uuid: 2fe0cd9f
  parent: fb052e6a
  description: Map Chrome APIs to Firefox equivalents
  why: Identify required polyfills or replacements
  depends_on: [cde0940e]
  status: [x]
---
- uuid: 33430f27
  parent: fb052e6a
  description: Update projectscope with Firefox architecture notes
  why: Guide future development tasks
  depends_on: [2fe0cd9f]
  status: [x]
---
- uuid: cdc27ea1
  parent: 2ad5ecb2
  description: Add browser_specific_settings to manifest and adjust permissions
  why: Enable Firefox installation
  depends_on: [33430f27]
  status: [x]
---
- uuid: 0a9fc997
  parent: 2ad5ecb2
  description: Update repository manifest with new Firefox artifacts
  why: Track modified files for planning
  depends_on: [cdc27ea1]
  status: [x]
---
- uuid: dbbd0a3f
  parent: ede4b0e6
  description: Polyfill browser APIs in background script
  why: Ensure queue manager works in Firefox
  depends_on: [0a9fc997]
  status: [x]
---
- uuid: 0af1e701
  parent: 254d7d3e
  description: Refactor content script to use browser APIs
  why: Maintain DOM control in Firefox
  depends_on: [dbbd0a3f]
  status: [x]
---
- uuid: eb00663d
  parent: 8b03a0fe
  description: Configure web-ext for building and running tests
  why: Automate cross-browser validation
  depends_on: [0af1e701]
  status: [x]
---
- uuid: 794a4c1b
  parent: 8b03a0fe
  description: Add Firefox run script to npm test workflow
  why: Verify extension functions in Firefox
  depends_on: [eb00663d]
  status: [x]
---
- uuid: 34996f4a
  parent: a4a3ce6c
  description: Perform manual QA in Firefox and fix issues
  why: Ensure feature parity with Chrome
  depends_on: [794a4c1b]
  status: [x]
---
- uuid: 28f4867c
  parent: a4a3ce6c
  description: Update README and USAGE with Firefox instructions
  why: Document cross-browser installation steps
  depends_on: [34996f4a]
  status: [x]
---
- uuid: 32bf3249
  parent: 0ab9402c
  description: Update metrics, state and run final MetaStateChecker
  why: Close Firefox milestone and verify repo
  depends_on: [28f4867c]
  status: [x]
---
- uuid: c2e4377a-b259-4c7a-939f-2ab3b60c3817
  parent: e68c381e-a088-46cf-bc1e-1217a5b04356
  description: Parse CLI scope and design new milestones
  why: Establish tasks for Chat-Jacker CLI
  depends_on: []
  priority: 17
  status: [x]
---
- uuid: 0c6dbf0f-fe22-4b00-93eb-e4eba4fd3fe1
  parent: e68c381e-a088-46cf-bc1e-1217a5b04356
  description: Update agent task files and manifest for CLI planning
  why: Record DAG and update repository state
  depends_on: [c2e4377a-b259-4c7a-939f-2ab3b60c3817]
  priority: 17
  status: [x]
---
- uuid: d01b9695-ced6-4a95-80ef-ccfbc32b3112
  parent: e68c381e-a088-46cf-bc1e-1217a5b04356
  description: Generate taskmap.svg and update metrics and state
  why: Visualize plan and track progress
  depends_on: [0c6dbf0f-fe22-4b00-93eb-e4eba4fd3fe1]
  priority: 17
  status: [x]
---
- uuid: 90425a4d-44e1-4342-ba31-97c7edb84829
  parent: 8a132a08-2544-469e-bffc-929a17a555da
  description: Setup Python environment and install Playwright
  why: Provide dependencies for CLI execution
  depends_on: [d01b9695-ced6-4a95-80ef-ccfbc32b3112]
  priority: 18
  status: [x]
---
- uuid: d6cc76b7-bde5-4c03-9a11-bbc42cf52e7d
  parent: 8a132a08-2544-469e-bffc-929a17a555da
  description: Create chatjacker_cli.py with argument parsing
  why: Offer command line interface for automation
  depends_on: [90425a4d-44e1-4342-ba31-97c7edb84829]
  priority: 18
  status: [x]
---
- uuid: 1030c9b5-f496-4b20-afad-9a81ed33c841
  parent: 8a132a08-2544-469e-bffc-929a17a555da
  description: Implement command dispatch and rich logging
  why: Route actions and provide readable output
  depends_on: [d6cc76b7-bde5-4c03-9a11-bbc42cf52e7d]
  priority: 18
  status: [x]
---
- uuid: 796956aa-313d-46e8-9ab6-ff85757de887
  parent: 8a132a08-2544-469e-bffc-929a17a555da
  description: Add CLI usage examples to USAGE.md
  why: Document basic commands
  depends_on: [1030c9b5-f496-4b20-afad-9a81ed33c841]
  priority: 18
  status: [x]
---
- uuid: 5a56f567-2647-4bf4-aeac-80b846c08044
  parent: 0eec49b0-962f-4758-a3b7-6cad64c1e607
  description: Configure Playwright to launch in headless mode
  why: Allow automation without visible browser
  depends_on: [796956aa-313d-46e8-9ab6-ff85757de887]
  priority: 19
  status: [x]
---
- uuid: dd9dd1ae-0c56-4068-829d-52d0d7b0b360
  parent: 0eec49b0-962f-4758-a3b7-6cad64c1e607
  description: Implement cookie persistence for sessions
  why: Maintain login across runs
  depends_on: [5a56f567-2647-4bf4-aeac-80b846c08044]
  priority: 19
  status: [x]
---
- uuid: ea085e7d-4b09-4848-ae13-bd6c5f12e48d
  parent: 0eec49b0-962f-4758-a3b7-6cad64c1e607
  description: Detect login requirement and prompt user once
  why: Provide seamless authentication flow
  depends_on: [dd9dd1ae-0c56-4068-829d-52d0d7b0b360]
  priority: 19
  status: [x]
---
- uuid: 6b6c7fa4-e01c-409e-96fa-2704acb39469
  parent: 0eec49b0-962f-4758-a3b7-6cad64c1e607
  description: Document session storage configuration
  why: Explain how cookies are saved for reuse
  depends_on: [ea085e7d-4b09-4848-ae13-bd6c5f12e48d]
  priority: 19
  status: [x]
---
- uuid: bff624ee-2039-4e17-9087-67ab97d53d33
  parent: c88a4597-f135-4b9e-ba25-5016cdac80d9
  description: Detect ChatGPT landing and chat pages
  why: Ensure correct navigation logic
  depends_on: [6b6c7fa4-e01c-409e-96fa-2704acb39469]
  priority: 20
  status: []
---
- uuid: 96fa2512-8015-4b50-8579-68c5186b6d6d
  parent: c88a4597-f135-4b9e-ba25-5016cdac80d9
  description: Implement list_chats scraping from sidebar
  why: Enumerate available conversations
  depends_on: [bff624ee-2039-4e17-9087-67ab97d53d33]
  priority: 20
  status: []
---
- uuid: 2e81faf8-2038-447d-b0d6-b877e884c4a4
  parent: c88a4597-f135-4b9e-ba25-5016cdac80d9
  description: Implement new_chat hotkey capture
  why: Create new chat via automation
  depends_on: [96fa2512-8015-4b50-8579-68c5186b6d6d]
  priority: 20
  status: []
---
- uuid: 69d4bc38-3275-4eed-a217-2cca7e079377
  parent: c88a4597-f135-4b9e-ba25-5016cdac80d9
  description: Implement search functionality and scrape results
  why: Allow chat history search from CLI
  depends_on: [2e81faf8-2038-447d-b0d6-b877e884c4a4]
  priority: 20
  status: []
---
- uuid: d654f7e7-22d2-415e-ae8e-5e5b3c7b741a
  parent: c88a4597-f135-4b9e-ba25-5016cdac80d9
  description: Send message in chat and capture response text
  why: Enable full conversation interaction
  depends_on: [69d4bc38-3275-4eed-a217-2cca7e079377]
  priority: 20
  status: []
---
- uuid: 6c77c44d-36d5-4465-8213-46e91a759d7b
  parent: e57069a8-19ac-4e69-ab7b-cdc7224754a5
  description: Detect Codex landing and task pages
  why: Navigate properly within Codex
  depends_on: [d654f7e7-22d2-415e-ae8e-5e5b3c7b741a]
  priority: 21
  status: []
---
- uuid: e69fd15a-694e-45b5-96ba-c7b7fc21cc56
  parent: e57069a8-19ac-4e69-ab7b-cdc7224754a5
  description: Implement list_tasks scraping
  why: Enumerate available Codex tasks
  depends_on: [6c77c44d-36d5-4465-8213-46e91a759d7b]
  priority: 21
  status: []
---
- uuid: efbc8251-1b37-443a-a3bc-9aba18909daf
  parent: e57069a8-19ac-4e69-ab7b-cdc7224754a5
  description: Implement open_task navigation to specific task page
  why: Access task DOM for automation
  depends_on: [e69fd15a-694e-45b5-96ba-c7b7fc21cc56]
  priority: 21
  status: []
---
- uuid: ba33660b-459f-4a8b-b1c2-e625a4ff76e1
  parent: e57069a8-19ac-4e69-ab7b-cdc7224754a5
  description: Implement send instructions within Codex task
  why: Interact with Codex similar to ChatGPT
  depends_on: [efbc8251-1b37-443a-a3bc-9aba18909daf]
  priority: 21
  status: []
---
- uuid: cb06dbe9-59ea-4875-b114-41289f1d78dd
  parent: 9bd98fb3-d1ff-4915-8e35-0cf62002989c
  description: Extract DOM selectors into selectors.js
  why: Centralize query selectors for easy updates
  depends_on: [ba33660b-459f-4a8b-b1c2-e625a4ff76e1]
  priority: 22
  status: []
---
- uuid: 19c48f09-338c-48ea-acbc-91452dbfd610
  parent: 9bd98fb3-d1ff-4915-8e35-0cf62002989c
  description: Inject selectors using page.evaluate in browser
  why: Provide DOM hooks to action modules
  depends_on: [cb06dbe9-59ea-4875-b114-41289f1d78dd]
  priority: 22
  status: []
---
- uuid: 12465777-2727-4a38-931a-a2c22ff5e0d7
  parent: 9bd98fb3-d1ff-4915-8e35-0cf62002989c
  description: Refactor ChatGPT and Codex modules to use selector layer
  why: Ensure consistency across targets
  depends_on: [19c48f09-338c-48ea-acbc-91452dbfd610]
  priority: 22
  status: []
---
- uuid: cf497abe-0a7c-423a-8ef5-741af9916e18
  parent: 47663495-dcf7-4c84-801c-26024dbc8153
  description: Design JSON result schema for CLI output
  why: Standardize response format
  depends_on: [12465777-2727-4a38-931a-a2c22ff5e0d7]
  priority: 23
  status: []
---
- uuid: b76ed4ee-e84e-42f6-aa05-e54521815e74
  parent: 47663495-dcf7-4c84-801c-26024dbc8153
  description: Implement output formatting and rich logging
  why: Provide readable JSON results for chaining
  depends_on: [cf497abe-0a7c-423a-8ef5-741af9916e18]
  priority: 23
  status: []
---
- uuid: 75ecdd96-8406-4b68-a274-589463ccb73f
  parent: 47663495-dcf7-4c84-801c-26024dbc8153
  description: Write tests validating JSON output structure
  why: Prevent regressions in result formatting
  depends_on: [b76ed4ee-e84e-42f6-aa05-e54521815e74]
  priority: 23
  status: []
---
- uuid: 3251a125-5538-4787-80d3-0a6db4e48996
  parent: a84026d5-c998-4af0-bb5f-9a04c985c54c
  description: Implement --plan mode to read task files
  why: Allow agent-driven workflows
  depends_on: [75ecdd96-8406-4b68-a274-589463ccb73f]
  priority: 24
  status: []
---
- uuid: 3848a924-640a-41f6-971f-69c2c9a1d50b
  parent: a84026d5-c998-4af0-bb5f-9a04c985c54c
  description: Add action chaining across multiple steps
  why: Execute plans sequentially without user input
  depends_on: [3251a125-5538-4787-80d3-0a6db4e48996]
  priority: 24
  status: []
---
- uuid: f87b6c31-5a3c-49c0-9a3e-bdc5fdfb4c8f
  parent: a84026d5-c998-4af0-bb5f-9a04c985c54c
  description: Document sample plan files and usage
  why: Help agents adopt automation workflows
  depends_on: [3848a924-640a-41f6-971f-69c2c9a1d50b]
  priority: 24
  status: []
---
- uuid: bd3649bb-22ea-4f7f-b008-dbf7dc9123ae
  parent: 00c0a86e-7297-4f3a-ad56-09014022a908
  description: Add parallel browser context support
  why: Execute multiple tasks simultaneously
  depends_on: [f87b6c31-5a3c-49c0-9a3e-bdc5fdfb4c8f]
  priority: 25
  status: []
---
- uuid: 585b4251-aa85-4cc5-9266-6b3cefcfb630
  parent: 00c0a86e-7297-4f3a-ad56-09014022a908
  description: Implement stealth mode for Playwright sessions
  why: Reduce detection risk during automation
  depends_on: [bd3649bb-22ea-4f7f-b008-dbf7dc9123ae]
  priority: 25
  status: []
---
- uuid: fd3cf7d7-dce5-47a9-8944-14aeb425e864
  parent: 00c0a86e-7297-4f3a-ad56-09014022a908
  description: Create modular task templates for workflows
  why: Reuse common automation patterns
  depends_on: [585b4251-aa85-4cc5-9266-6b3cefcfb630]
  priority: 25
  status: []
---
- uuid: e9d3583b-8f3c-47f3-b440-061ec9479f88
  parent: 00c0a86e-7297-4f3a-ad56-09014022a908
  description: Integrate Codex output with GitHub repositories
  why: Automatically fetch and commit generated code
  depends_on: [fd3cf7d7-dce5-47a9-8944-14aeb425e864]
  priority: 25
  status: []
---
- uuid: 19e880cd-9ad3-4a35-b15d-de77e5a0c9c9
  parent: 00c0a86e-7297-4f3a-ad56-09014022a908
  description: Document stretch features and configuration
  why: Guide advanced users through optional capabilities
  depends_on: [e9d3583b-8f3c-47f3-b440-061ec9479f88]
  priority: 25
  status: []
---
- uuid: a4f95ada-7e42-4398-9b17-87f705737242
  parent: b6a02b30-f40b-47ba-a82f-18623680aa8c
  description: Update README and USAGE with CLI instructions
  why: Provide documentation for new tool
  depends_on: [19e880cd-9ad3-4a35-b15d-de77e5a0c9c9]
  priority: 26
  status: []
---
- uuid: a85f0068-0b03-40b3-91a6-5c9a8e45f81f
  parent: b6a02b30-f40b-47ba-a82f-18623680aa8c
  description: Run full test suite and fix discovered issues
  why: Ensure CLI stability before release
  depends_on: [a4f95ada-7e42-4398-9b17-87f705737242]
  priority: 26
  status: []
---
- uuid: 0633a47b-8c51-418d-bea9-cf7137db9cb9
  parent: b6a02b30-f40b-47ba-a82f-18623680aa8c
  description: Execute MetaStateChecker and close project
  why: Final verification of all milestones
  depends_on: [a85f0068-0b03-40b3-91a6-5c9a8e45f81f]
  priority: 26
  status: []
