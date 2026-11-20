# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/wenwijaya/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/wenwijaya/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 50-second vertical GTA 6 clip for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500 in USDC, shared by the top 20 videos by views). The clip cuts the official GTA VI Trailer 2 into four beats — sunny Vice City, a police chase, the neon nightclub, Lucia driving at dusk — then ends on a card pitching make.fun: make clips like this with AI and earn money on make.fun. The video itself is published on YouTube (a Short) from the entrant's channel; this repo holds the program that hands the video's URL to the grader.

## Run it

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only, no network) validates `VIDEO.json` and copies it byte-identically to the output directory, where the grader reads the public video URL from it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=de3tegw5&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
