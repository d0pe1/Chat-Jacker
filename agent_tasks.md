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
  status: [x]
---
- uuid: 2ad5ecb2
  description: Convert manifest for Firefox compatibility
  why: Provide browser_specific_settings and required permissions
  depends_on: [fb052e6a]
  priority: 11
  status: [x]
---
- uuid: ede4b0e6
  description: Adapt background scripts for Firefox APIs
  why: Service worker and messaging differences must be handled
  depends_on: [2ad5ecb2]
  priority: 12
  status: [x]
---
- uuid: 254d7d3e
  description: Update content scripts for Firefox quirks
  why: Ensure DOM helpers and messaging work across browsers
  depends_on: [ede4b0e6]
  priority: 13
  status: [x]
---
- uuid: 8b03a0fe
  description: Add web-ext build and test pipeline
  why: Automate packaging and testing under Firefox
  depends_on: [254d7d3e]
  priority: 14
  status: [x]
---
- uuid: a4a3ce6c
  description: QA and documentation for Firefox release
  why: Validate parity and guide users
  depends_on: [8b03a0fe]
  priority: 15
  status: [x]
---
- uuid: 0ab9402c
  description: Finalize cross-browser support and update metrics
  why: Complete project with Firefox parity
  depends_on: [a4a3ce6c]
  priority: 16
  status: [x]
---
- uuid: e68c381e-a088-46cf-bc1e-1217a5b04356
  description: Plan Chat-Jacker CLI milestones and tasks
  why: Provide structured roadmap for CLI features
  depends_on: [0ab9402c]
  priority: 17
  status: [x]
---
- uuid: 8a132a08-2544-469e-bffc-929a17a555da
  description: Implement core CLI framework with argument parsing
  why: Provide entrypoint for headless automation
  depends_on: [e68c381e-a088-46cf-bc1e-1217a5b04356]
  priority: 18
  status: []
---
- uuid: 0eec49b0-962f-4758-a3b7-6cad64c1e607
  description: Build headless browser launcher with persistent sessions
  why: Enable login reuse and navigation without UI
  depends_on: [8a132a08-2544-469e-bffc-929a17a555da]
  priority: 19
  status: []
---
- uuid: c88a4597-f135-4b9e-ba25-5016cdac80d9
  description: Add ChatGPT action support for conversations
  why: Interact with ChatGPT via CLI
  depends_on: [0eec49b0-962f-4758-a3b7-6cad64c1e607]
  priority: 20
  status: []
---
- uuid: e57069a8-19ac-4e69-ab7b-cdc7224754a5
  description: Add Codex action support for task automation
  why: Control Codex tasks from CLI
  depends_on: [0eec49b0-962f-4758-a3b7-6cad64c1e607]
  priority: 21
  status: []
---
- uuid: 9bd98fb3-d1ff-4915-8e35-0cf62002989c
  description: Create selector injection layer for DOM hooks
  why: Reuse Chat-Jacker selectors across targets
  depends_on: [c88a4597-f135-4b9e-ba25-5016cdac80d9, e57069a8-19ac-4e69-ab7b-cdc7224754a5]
  priority: 22
  status: []
---
- uuid: 47663495-dcf7-4c84-801c-26024dbc8153
  description: Implement JSON output layer for CLI results
  why: Provide structured output for agents
  depends_on: [9bd98fb3-d1ff-4915-8e35-0cf62002989c]
  priority: 23
  status: []
---
- uuid: a84026d5-c998-4af0-bb5f-9a04c985c54c
  description: Build agent integration hooks and plan mode
  why: Allow chained actions from task files
  depends_on: [47663495-dcf7-4c84-801c-26024dbc8153]
  priority: 24
  status: []
---
- uuid: 00c0a86e-7297-4f3a-ad56-09014022a908
  description: Implement stretch goals like parallel execution and stealth
  why: Provide optional advanced features
  depends_on: [a84026d5-c998-4af0-bb5f-9a04c985c54c]
  priority: 25
  status: []
---
- uuid: b6a02b30-f40b-47ba-a82f-18623680aa8c
  description: Finalize CLI, documentation and run MetaStateChecker
  why: Ensure CLI readiness and clean project state
  depends_on: [a84026d5-c998-4af0-bb5f-9a04c985c54c]
  priority: 26
  status: []
