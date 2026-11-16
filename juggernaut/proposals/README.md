# Proposals to M0rph

Juggernaut repairs what it can. Everything structural comes here.

**Naming:** `JUG-P###-slug.md`, numbered in the order raised.

**M0rph implements P0 first, then P1.** P2 and P3 wait in the queue.

## Template

```markdown
# JUG-P001 — <short title>

**Priority:** P0 | P1 | P2 | P3
**Gap IDs:** JUG-00x, JUG-00y
**Raised:** YYYY-MM-DD
**Status:** proposed | accepted | rejected | done

## What is broken

One paragraph. Facts only.

## Evidence

The command and its output, or the file and line number.

## What it costs to leave

Money, trust or time, in plain terms. If you cannot name a cost, the priority is wrong.

## The change

The exact edit. File, line, before, after. If it is a decision rather than an edit, state the decision and the options.

## Risk

What could break. What needs approval. What is unknown.

## If accepted

The check that proves it is fixed.
```

## Rules

- One proposal per decision. Do not bundle unrelated work.
- Never propose something you could have verified yourself.
- Never propose a fix without the evidence that the problem exists.
- If a proposal sits unaccepted for 30 days, re-check whether the gap still exists before raising it again.
