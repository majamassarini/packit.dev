---
title: Week 17 in Packit
date: 2026-04-27
authors: nforro
tags:
  - 2026-April
  - 2026
  - April
---

## Week 17 (April 21st – April 27th)

- We have fixed several cases of excessive job cancellation, in particular when retriggering
  a job using the Re-run button on GitHub and when using commands such as `rebuild-failed`,
  `retest-failed` or `test` with `--identifier`.
  ([packit-service#3112](https://github.com/packit/packit-service/pull/3112))
