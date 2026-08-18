---
title: Logs should stay close.
date: 2026-07-10
tags: tooling, command line
featured: false
work: loggo
---

I wanted to see how far a local tool could go before logs needed to become a service. The answer, for the kind of questions I had, was further than expected.

The useful constraint was keeping the loop small: ingest a file, keep the structure, search by service or level, and print only what deserves attention. A local database gives the data somewhere to settle without making the whole thing feel distant.

It also made the command line feel like a good interface for investigation again. A few clear filters can be more helpful than a busy dashboard when the goal is only to find the moment something changed.
