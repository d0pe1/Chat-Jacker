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
  status: []
---
- uuid: 532b4a5c
  parent: 8d468653
  description: Scaffold background script
  why: Manage headless interactions and queue
  depends_on: [b79cc393]
  status: []
---
- uuid: 885bad7c
  parent: 8d468653
  description: Scaffold content script
  why: Interface with page DOM
  depends_on: [b79cc393]
  status: []
---
- uuid: 649d87e9
  parent: 8d468653
  description: Update repository manifest with extension files
  why: Track new artifacts for agents
  depends_on: [532b4a5c, 885bad7c]
  status: []
---
- uuid: 0572df48
  parent: 8d468653
  description: Run MetaStateChecker after skeleton implementation
  why: Verify milestone integration
  depends_on: [649d87e9]
  status: []
---
- uuid: b35f9be0
  parent: e8e121d2
  description: Implement ChatGPT read/write helpers
  why: Allow extension to send and receive prompts
  depends_on: [a057f02e, 649d87e9]
  status: []
---
- uuid: 8968c023
  parent: e8e121d2
  description: Detect ChatGPT response completion
  why: Know when to capture output and send next prompt
  depends_on: [b35f9be0]
  status: []
---
- uuid: a6d5ea2f
  parent: e8e121d2
  description: Capture ChatGPT output text
  why: Return generated responses to agent framework
  depends_on: [8968c023]
  status: []
---
- uuid: bbfc3e82
  parent: e8e121d2
  description: Run MetaStateChecker for ChatGPT handlers
  why: Ensure reliability before continuing
  depends_on: [a6d5ea2f]
  status: []
---
- uuid: 7045ec12
  parent: 295fe504
  description: Implement Codex read/write helpers
  why: Automate Codex interactions
  depends_on: [a057f02e, 649d87e9]
  status: []
---
- uuid: d4a56894
  parent: 295fe504
  description: Detect Codex response completion
  why: Trigger capture and next prompt
  depends_on: [7045ec12]
  status: []
---
- uuid: 5ee32f69
  parent: 295fe504
  description: Capture Codex output text
  why: Provide responses back to agent framework
  depends_on: [d4a56894]
  status: []
---
- uuid: 7146df7c
  parent: 295fe504
  description: Run MetaStateChecker for Codex handlers
  why: Validate DOM automation stage
  depends_on: [5ee32f69]
  status: []
---
- uuid: bd305eed
  parent: a57eb7aa
  description: Implement shared prompt queue manager
  why: Coordinate multiple prompts across platforms
  depends_on: [bbfc3e82, 7146df7c]
  status: []
---
- uuid: 89f8dcf4
  parent: a57eb7aa
  description: Integrate completion detection with queue
  why: Automatically issue next prompt when ready
  depends_on: [bd305eed]
  status: []
---
- uuid: 71a3f231
  parent: a57eb7aa
  description: Send captured outputs to agent framework
  why: Provide data for higher-level automation
  depends_on: [89f8dcf4]
  status: []
---
- uuid: 62540b33
  parent: a57eb7aa
  description: Run MetaStateChecker for queue manager
  why: Confirm stable automation loop
  depends_on: [71a3f231]
  status: []
---
- uuid: 6946d58d
  parent: 7be14b8e
  description: Finalize documentation and examples
  why: Help users understand extension usage
  depends_on: [62540b33]
  status: []
---
- uuid: 3cbba0f3
  parent: 7be14b8e
  description: Update metrics and state for project completion
  why: Record final task statuses and graph hash
  depends_on: [6946d58d]
  status: []
---
- uuid: 40927029
  parent: 7be14b8e
  description: Run final MetaStateChecker
  why: Verify repository consistency before closing
  depends_on: [3cbba0f3]
  status: []
---
