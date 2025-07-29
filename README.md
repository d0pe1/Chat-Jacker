# SelfPlanner Agent Ecosystem

Welcome to the SelfPlanner repository. This project hosts an autonomous project operating system that coordinates multiple agents through version controlled state files.

Every agent **must** read `agents.md` before performing any work. The guidelines there describe the allowed roles, escalation rules, and how tasks are represented.

## Workflow Summary
1. A user supplies `projectscope.md` describing the project goals.
2. **PlannerAgent** parses the scope and builds a dependency graph (DAG) of tasks.
3. Milestones are written to `agent_tasks.md`; atomic subtasks are written to `agent_prio.md` with UUID, description, context, dependencies and priority.
4. The planner updates `manifest.json` to map UUIDs to files and creates a `taskmap.svg` Gantt view of the DAG.
5. **ExecutorAgents** pick unblocked tasks from `agent_prio.md`, implement the work, commit changes and log results in `DevDiary.md`.
6. **MetaStateCheckerAgent** audits the repo after each milestone, marking problems with `[u]` or `[a]` and logging findings.
7. State is persisted in `state.md` (graph hash, last executed task, active agents) so work can resume exactly where it left off.

## Repository Files
- `projectscope.md` – user supplied project description.
- `agents.md` – rules and behaviors for all agent personas.
- `agent_tasks.md` – milestone level tasks with UUIDs and dependencies.
- `agent_prio.md` – atomic subtasks and their status `[ ]`, `[x]`, `[a]`, `[u]`.
- `state.md` – current DAG hash, last executed task and active agents.
- `DevDiary.md` – chronological log of decisions and escalations.
- `metrics.md` – tracking of total/completed tasks and bottlenecks.
- `manifest.json` – registry linking UUIDs to repository artifacts.
- `taskmap.svg` – optional Gantt style visualisation of the DAG.

## DAG Structure
Each node in the task graph contains:
- `uuid`: unique identifier
- `description`: what needs doing and why
- `depends_on`: list of upstream UUIDs
- `priority`: integer or tier
- `status`: one of `[ ]`, `[x]`, `[a]`, `[u]`

The graph is acyclic; PlannerAgent ensures there are no missing or circular dependencies. The `taskmap.svg` file is generated from `agent_tasks.md` and `agent_prio.md` to provide a Gantt-style view for humans and agents.

Agents should always update the relevant state files when planning or completing work so that the DAG and Gantt overlay remain accurate.

## Extension Usage
The browser extension maintains a shared prompt queue. Use `chrome.runtime.sendMessage({type: 'enqueuePrompt', prompt: 'your text'})` to add prompts from any tab running ChatGPT or Codex. Captured responses are POSTed to `http://localhost:5000/agent-response` where the agent framework can process them.

See [EXAMPLES.md](EXAMPLES.md) for a quick walkthrough.

## Getting Started
Detailed installation and usage instructions are provided in [USAGE.md](USAGE.md). It covers loading the extension, queuing prompts and running the included tests.

## Firefox Support
Run `npm run firefox` to launch the extension in Firefox using web-ext. Use `npm run test:firefox` to execute the test suite and open Firefox automatically.

## Release Checklist
- Bump the version in `extension/manifest.json`.
- Run `npm test` and ensure all tests pass.
- Package the `extension` folder or load it unpacked in your browser.
- Review `DevDiary.md` for a complete history of development decisions.
