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
