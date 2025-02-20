---
id: Available feeds
sidebar_position: 1
slug: /feed-overview
---

# Available feeds

Currently, Orcfax provides support for CER type feeds. Integrators may review
the full list of available feeds for both [mainnet][mainnet] and
[preview][preview].

<!-- we should also consider where we might point integrators to if available feeds becomes different from what is being showcased or subsidized -->

[mainnet]:
    https://github.com/orcfax/cer-feeds/blob/main/feeds/mainnet/cer-feeds.json
[preview]:
    https://github.com/orcfax/cer-feeds/blob/main/feeds/preview/cer-feeds.json

## Current Exchange Rate feeds

Orcfax offers Current Exchange Rate ([CER][cer-1]) feeds that publish statements
regarding the current price of a given currency against another. This includes
feeds such as ADA-USD and FACT-ADA.

For a feed of type CER, the naming convention is
[\{\{base-currency\}\}-\{\{quote-currency\}\}][cer-2].

:::note[Examples:]

-   crypto-fiat: ADA-USD
-   crypto-stable: ADA-iUSD
-   crypto and another native asset: FACT-ADA

:::

[cer-1]: https://glossary.orcfax.io/#cer
[cer-2]: https://glossary.orcfax.io/#baseQuote

### Feeds derived from CEXes

The price values published by these feeds are derived entirely from centralized
exchange ([CEX][cex-1]) data.

Fiat currency names follow ISO [4217][cex-2] and Ordering follows [forex][cex-3]
convention where applicable. In other cases, such as for crypto base currencies,
ordering defers to how the pairs appear on CEXes.

[cex-1]: https://glossary.orcfax.io/#cex
[cex-2]: https://en.wikipedia.org/wiki/ISO_4217
[cex-3]: https://tradenation.com/articles/base-currency-and-quote-currency/

#### CEX showcase feeds

In order to demonstrate the kinds of feeds derived from CEXes which integrators
can utilize in their dApps, Orcfax is currently offering the following CEX
showcase feeds:

| Feed name | Start Date                 | End date\* |
| --------- | -------------------------- | ---------- |
| ADA-BTC   | Sep 12th 2024 17:01:24 UTC | TBA        |
| BTC-USD   | Sep 12th 2024 17:01:24 UTC | TBA        |

:::warning

As these are showcase feeds, Orcfax makes no guarantees as to how long they will
be offered in this capacity; Orcfax may change or remove support for showcase
feeds at its discretion and may do so without notice. Integrators who would like
to take advantage of these feeds or are interested in learning more about our
services should contact us via [Discord][discord] or info@orcfax.io.

:::

[discord]: https://discord.com/invite/UbAeRuNzDu

#### CEX subsidized feeds

A subsidized feed is one which Orcfax has committed to maintaining even without
an integrator subscription. when an integrator activates a subscription for a
subsidized feed it will no longer be identified as such.

Orcfax is currently offering the following CEX subsidized feeds:

| Feed name | Start Date                 | End date\* |
| --------- | -------------------------- | ---------- |
| ADA-USD   | Sep 12th 2024 17:01:24 UTC | TBA        |

In contrast to showcase feeds, subsidized feeds can be used in production. While
Orcfax has committed to maintaining access to these feeds, integrators who wish
to utilize these feeds without a subscription should do so at their own risk;
Orcfax still reserves the right to adjust or remove support for these feeds as
business needs dictate. However, any change to service relating to subsidized
feeds will be announced three months in advance in order to provide integrators
with adequate forewarning.

### Feeds derived from DEXes

The price values published through these feeds are derived entirely from
decentralized exchange ([DEX][dex-1]) data.

For these feeds, ordering defers to how pairs appear on DEXes.

[dex-1]: https://glossary.orcfax.io/#dex

#### DEX showcase feeds

Orcfax is currently offering the following DEX showcase feeds:

| Feed name | Start Date                 | End date |
| --------- | -------------------------- | -------- |
| ADA-DJED  | Sep 12th 2024 17:01:24 UTC | TBA      |
| ADA-iUSD  | Sep 12th 2024 17:01:24 UTC | TBA      |
| ADA-USDM  | Sep 12th 2024 17:01:24 UTC | TBA      |
| AGIX-ADA  | Sep 12th 2024 17:01:24 UTC | TBA      |
| BOOK-ADA  | Sep 12th 2024 17:01:24 UTC | TBA      |
| BTN-ADA   | Sep 12th 2024 17:01:24 UTC | TBA      |
| CERRA-ADA | Sep 12th 2024 17:01:24 UTC | TBA      |
| COPI-ADA  | Sep 12th 2024 17:01:24 UTC | TBA      |
| HOSKY-ADA | Sep 12th 2024 17:01:24 UTC | TBA      |
| HUNT-ADA  | Sep 12th 2024 17:01:24 UTC | TBA      |
| INDY-ADA  | Sep 12th 2024 17:01:24 UTC | TBA      |
| LENFI-ADA | Sep 12th 2024 17:01:24 UTC | TBA      |
| LQ-ADA    | Sep 12th 2024 17:01:24 UTC | TBA      |
| MIN-ADA   | Sep 12th 2024 17:01:24 UTC | TBA      |
| SHEN-ADA  | Sep 12th 2024 17:01:24 UTC | TBA      |
| SNEK-ADA  | Sep 12th 2024 17:01:24 UTC | TBA      |
| WMTx-ADA  | Sep 12th 2024 17:01:24 UTC | TBA      |

:::warning

As these are showcase feeds, Orcfax makes no guarantees as to how long they will
be offered in this capacity; Orcfax may change or remove support for showcase
feeds at its discretion and may do so without notice. Integrators who would like
to take advantage of these feeds or are interested in learning more about our
services should contact us via [Discord][discord] or info@orcfax.io.

:::

#### DEX subsidized feeds

Orcfax is currently offering the following CEX subsidized feeds:

| Feed name | Start Date                 | End date\* |
| --------- | -------------------------- | ---------- |
| FACT-ADA  | Sep 12th 2024 17:01:24 UTC | TBA        |

In contrast to showcase feeds, subsidized feeds can be used in production. While
Orcfax has committed to maintaining access to these feeds, integrators who wish
to utilize these feeds without a subscription should do so at their own risk;
Orcfax still reserves the right to adjust or remove support for these feeds as
business needs dictate. However, any change to service relating to subsidized
feeds will be announced three months in advance in order to provide integrators
with adequate forewarning.

## Sunsetting feeds

In the absence of a subscription to support a feed's publication or business
decisions which may incentivize subsidization, Orcfax may suspend or remove
technical support at its discretion. This process is referred to as sunsetting a
feed.

Unless otherwise required (e.g. in the case of subsidized feeds) Orcfax may
sunset a feed without notice.
