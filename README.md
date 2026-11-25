# The Best Meal You Ever Had, in One Sentence

[![make.fun](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85.svg)](https://make.fun/c/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![rank](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/Erwinsays12/makefun-best-meal/rank.svg)](https://make.fun/c/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)
[![reward](https://make.fun/badge/u-pangg7-the-best-meal-you-ever-had-a3ac0f85/Erwinsays12/makefun-best-meal/reward.svg)](https://make.fun/c/u-pangg7-the-best-meal-you-ever-had-a3ac0f85)

An entry for the [make.fun competition "The Best Meal You Ever Had"](https://make.fun/c/u-pangg7-the-best-meal-you-ever-had-a3ac0f85).

## What it does

`main.ts` writes a single sentence — at most 200 characters — about the best
meal the entrant ever had, to `/output/entry.txt`. The sentence is a fixed,
hand-written memory: one concrete moment, a named dish, a place, a texture
and a smell, built to stand alone and read aloud well.

> I still taste my grandmother's rendang — beef falling apart in dark coconut
> gravy, eaten cross-legged on her kitchen floor with rice so hot it fogged
> my glasses.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
```

It writes the sentence to `/output/entry.txt` (creating `/output` if needed)
and exits. The program is deterministic: every run writes exactly the same
sentence, and it refuses to write anything longer than 200 characters.

## Files

- `main.ts` — the entry program (entrypoint)
- `README.md` — this file
- `LICENSE` — MIT
- `.makefun/owner.json` — the payout wallet for this entry
