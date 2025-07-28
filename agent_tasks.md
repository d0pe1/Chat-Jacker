# Milestone Tasks
### ***Example:***
---
- uuid: < unique name or UUID >
  description: Describe the task and how it plugs into other tasks
  why: Provide a reason for task existing in context
  depends_on: [uuid]
  priority: A Number
  status: []
---

### ***Project Milestones:***
---
- uuid: bc756a2e
  description: Initial planning and DAG generation
  why: Establish structured tasks for development
  depends_on: []
  priority: 1
  status: [x]
---
- uuid: 55b22049
  description: Acquire DOM information for ChatGPT and Codex
  why: Needed to accurately target elements for automation
  depends_on: [bc756a2e]
  priority: 2
  status: [x]
---
- uuid: 8d468653
  description: Setup browser extension skeleton using Manifest v3
  why: Provides base framework for DOM interaction
  depends_on: [55b22049]
  priority: 3
  status: [x]
---
- uuid: e8e121d2
  description: Implement ChatGPT DOM handlers
  why: Enable read/write and completion detection in ChatGPT UI
  depends_on: [8d468653]
  priority: 4
  status: [x]
---
- uuid: 295fe504
  description: Implement Codex DOM handlers
  why: Enable read/write and completion detection in Codex UI
  depends_on: [e8e121d2]
  priority: 5
  status: [x]
---
- uuid: a57eb7aa
  description: Implement queue management and output capture
  why: Automate multiple prompts and gather responses
  depends_on: [295fe504]
  priority: 6
  status: [x]
---
- uuid: 7be14b8e
  description: Finalize project and documentation
  why: Ensure completeness and run final checks
  depends_on: [a57eb7aa]
  priority: 7
  status: [x]
---
- uuid: 5a2f75cd
  description: Add chat selection and new chat creation features
  why: Manage multiple conversations via sidebar
  depends_on: [7be14b8e]
  priority: 8
  status: [x]
---
---
- uuid: c3a1b840
  description: Finalize chat management APIs for sidebar interactions
  why: Enable reliable chat switching and creation
  depends_on: [5a2f75cd]
  priority: 9
  status: [x]
