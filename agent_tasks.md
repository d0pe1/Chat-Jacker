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
---
- uuid: fb052e6a
  description: Plan Firefox extension parity and audit APIs
  why: Ensure Chrome features map to Firefox capabilities
  depends_on: [c3a1b840]
  priority: 10
  status: [ ]
---
- uuid: 2ad5ecb2
  description: Convert manifest for Firefox compatibility
  why: Provide browser_specific_settings and required permissions
  depends_on: [fb052e6a]
  priority: 11
  status: [ ]
---
- uuid: ede4b0e6
  description: Adapt background scripts for Firefox APIs
  why: Service worker and messaging differences must be handled
  depends_on: [2ad5ecb2]
  priority: 12
  status: [ ]
---
- uuid: 254d7d3e
  description: Update content scripts for Firefox quirks
  why: Ensure DOM helpers and messaging work across browsers
  depends_on: [ede4b0e6]
  priority: 13
  status: [ ]
---
- uuid: 8b03a0fe
  description: Add web-ext build and test pipeline
  why: Automate packaging and testing under Firefox
  depends_on: [254d7d3e]
  priority: 14
  status: [ ]
---
- uuid: a4a3ce6c
  description: QA and documentation for Firefox release
  why: Validate parity and guide users
  depends_on: [8b03a0fe]
  priority: 15
  status: [ ]
---
- uuid: 0ab9402c
  description: Finalize cross-browser support and update metrics
  why: Complete project with Firefox parity
  depends_on: [a4a3ce6c]
  priority: 16
  status: [ ]
