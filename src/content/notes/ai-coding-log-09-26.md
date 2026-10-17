---
title: "My AI software engineering workflow: September 2026"
date: 2026-10-10
description: "A September snapshot of the models, tools, and workflows I use to build software with AI."
tags: [ai-coding-log, workflows]
published: true
---

## What I was actually working on

The kind of work you do is **crucial context** for any discussion about AI coding. Different products, codebases, and goals call for different workflows.

I work at [Mechanical Orchard](https://mechanical-orchard.com), where we're building a product that uses AI agents to modernize mainframe systems and move them to the cloud at scale. I lead the Verify team. We're building a verification SDK that agents use to validate workloads replicated from JCL/COBOL to Java.

In September, my team and I focused on designing the SDK's public interfaces. It's a new codebase, but the ideas aren't new: we're unifying the verification tools, CLIs, and SDKs we've built over the years into a single toolchain. Its APIs need to be easy for agents to understand and hard to misuse.

That's why I mostly work interactively with agents on this project: to build a solid understanding of the product and think through architectural decisions.

## My API spending

I use API-based pricing. Here's what I spent in September:

> Note: I was on vacation for two weeks in September.

| Provider | Cost |
| --- | ---: |
| OpenAI | $417 |
| Anthropic | $144 |
| **Total** | **$561** |

## Model weather report

```
Legend:
🔥 - Great stuff. Really enjoy using it.
💧 - Neutral. Still forming an opinion.
❄️ - Didn't enjoy it. Had a hard time using it.
```

Here's where I stand with the models I've been using:

- 🔥 **OpenAI GPT 5.6 Sol (xhigh)** — My default model right now. The clear, easy-to-understand output makes it my go-to for architecture discussions, brainstorming, and planning.
- 💧 **OpenAI GPT 6 Astra (xhigh)** — I've only just started testing it. So far, it feels very similar to 5.6 Sol but costs more.
- ❄️ **Anthropic Opus 5 (xhigh)** — A painful experience for me. Its output was so dense and convoluted that I struggled to think things through with it. It feels like a great implementation model, but a poor fit for planning conversations.

## Workflow and tool updates

### 1. OpenCode is now my main agent harness

**What I did:** Switched from Claude Code to OpenCode.

**Why:** I want to switch model providers easily. After my experience with Opus 5, that's non-negotiable.

**How do I like it:** I'm enjoying it, but I miss Claude Code's `/btw`, `ULTRACODE`, and auto mode.

### 2. Zed + ACP

**What I did:** Used agents in Zed through the Agent Client Protocol (ACP).

**Why:** I care about the architecture of the SDK we're building a lot. I want to inspect code easily while working with agents.

**How do I like it:** I like how Zed manages agent threads and worktrees, and I enjoy using this app. The ACP integration still feels unpolished, with plenty of small usability issues but I'm not planning to switch for interactive work for now.

### 3. Repo-specific PR review skill

**What I did:** Built a custom PR review skill for one repo that separates auto-fixable findings from those needing human review. Auto-fixable findings usually cover missing or stale documentation, gaps in error handling, and minor logic bugs. Human review focuses on product and architecture decisions. I usually run reviews with a different model from the one used for implementation.

**Why:** To focus human attention on the decisions that matter for the project.

**How do I like it:** It's been really helpful. More helpful than any generic `review-pr` skill I used so far. Next, I want it to run automatically on PRs, with another agent handling the auto-fixable findings.

### 4. [vercel-labs/skills](https://github.com/vercel-labs/skills)

**What I did:** Started managing skills with `vercel-labs/skills`.

**Why:** To add, remove, and update skills across agents in one place.

**How do I like it:** Awesome so far. It seems to do exactly what I need.

### 5. [Tuple capture](https://docs.tuple.app/pairing-with-tuple/ways-to-use-capture)

**What I did:** Tried sharing our pairing conversation and screen with Claude Code through Tuple Capture.

**Why:** At Mechanical Orchard, [pair programming](https://labspractices.com/learningpaths/application-development/pair-programming/) is our default way of working. Tuple Capture lets us involve Claude in the conversation directly, instead of one person dictating prompts for the other to type.

**How do I like it:** Useful so far, but still a little awkward for us. There's also no official OpenCode integration.

## Final thoughts

For API design, I need a model I can think things through with, tools that make code easy to inspect, and the freedom to switch providers. Next, I want my team to make more use of agentic checks on CI and keep exploring how we collaborate together with agents more effectivly with tools like [delta.dev](https://delta.dev).
