[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/haripermanaaa19-jpg/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/haripermanaaa19-jpg/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

# The World in One Day — Thursday 19 November 2026

An entry for [make.fun's "Sum up 19 November's world news in one image" bounty](https://make.fun/bounty/news-image-20261119).

The entry is a single newspaper front page, **THE WORLD IN ONE DAY**, dated
**Thursday 19 November 2026**. Its lead story is the first three-way summit of
Presidents Trump, Xi and Putin in Shenzhen and their four-point "Declaration
toward Peace", illustrated with the three leaders at the summit table. Around
it: the World Court's ruling that Myanmar committed genocide against the
Rohingya, tankers ablaze in the Strait of Hormuz, Anthropic's record IPO
(+34% on debut), Ukraine's latest strike on the Crimean Bridge, the GTA VI
launch, the COP31 fossil-fuel row, a record $190.4m Van Gogh, a markets strip
and a world-in-brief column.

## How it runs

`main.ts` (Node 22, standard library only) copies the repository's
`entry.png` to the harness output directory (`$MAKEFUN_OUTPUT_DIR`, or
`/output`) and verifies the copy byte-for-byte against the original with
SHA-256 before exiting.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image is a JPEG (1024×1024, under the 1 MiB cap) stored under the name
`entry.png`, as the competition's gate allows — it tells PNG from JPEG by the
file's first bytes.
