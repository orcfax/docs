---
id: Available feeds
sidebar_position: 1
slug: /feed-overview
---

# Available feeds

|   [ADA-USD][adausd]   |  [ADA-BTC][adabtc]  |  [ADA-iUSD][adaiusd]  | [ADA-DJED][adadjed] |  [ADA-USDM][adausdm]  |
| :-------------------: | :-----------------: | :-------------------: | :-----------------: | :-------------------: |
|  [AGIX-ADA][agixada]  | [BOOK-ADA][bookada] |   [BTC-USD][btcusd]   |  [BTN-ADA][btnada]  | [CERRA-ADA][cerraada] |
|  [COPI-ADA][copiada]  | [FACT-ADA][factada] | [HOSKY-ADA][hoskyada] | [HUNT-ADA][huntada] |  [INDY-ADA][indyada]  |
| [LENFI-ADA][lenfiada] |   [LQ-ADA][lqada]   |   [MIN-ADA][minada]   | [SHEN-ADA][shenada] |  [SNEK-ADA][snekada]  |
|  [WMTx-ADA][wmtxada]  | [CBLP-ADA][cblpada] |                       |                     |                       |

[adabtc]: https://explorer.orcfax.io/feeds/CER/ADA-BTC
[adadjed]: https://explorer.orcfax.io/feeds/CER/ADA-DJED
[adaiusd]: https://explorer.orcfax.io/feeds/CER/ADA-iUSD
[adausd]: https://explorer.orcfax.io/feeds/CER/ADA-USD
[adausdm]: https://explorer.orcfax.io/feeds/CER/ADA-USDM
[agixada]: https://explorer.orcfax.io/feeds/CER/AGIX-ADA
[bookada]: https://explorer.orcfax.io/feeds/CER/BOOK-ADA
[btcusd]: https://explorer.orcfax.io/feeds/CER/BTC-USD
[btnada]: https://explorer.orcfax.io/feeds/CER/BTN-ADA
[cerraada]: https://explorer.orcfax.io/feeds/CER/CERRA-ADA
[copiada]: https://explorer.orcfax.io/feeds/CER/COPI-ADA
[factada]: https://explorer.orcfax.io/feeds/CER/FACT-ADA
[hoskyada]: https://explorer.orcfax.io/feeds/CER/HOSKY-ADA
[huntada]: https://explorer.orcfax.io/feeds/CER/HUNT-ADA
[indyada]: https://explorer.orcfax.io/feeds/CER/INDY-ADA
[lenfiada]: https://explorer.orcfax.io/feeds/CER/LENFI-ADA
[lqada]: https://explorer.orcfax.io/feeds/CER/LQ-ADA
[minada]: https://explorer.orcfax.io/feeds/CER/MIN-ADA
[shenada]: https://explorer.orcfax.io/feeds/CER/SHEN-ADA
[snekada]: https://explorer.orcfax.io/feeds/CER/SNEK-ADA
[wmtxada]: https://explorer.orcfax.io/feeds/CER/WMTx-ADA
[cblpada]: https://explorer.orcfax.io/feeds/CER/CBLP-ADA

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

#### CEX showcase

In order to demonstrate the kinds of feeds derived from CEXes which integrators
could utilize in their dApps, Orcfax is currently offering the following feeds
as a showcase:

| Feed name         | Start Date                 | End date\* |
| ----------------- | -------------------------- | ---------- |
| [ADA-BTC][adabtc] | Sep 12th 2024 17:01:24 UTC | TBA        |
| [BTC-USD][btcusd] | Sep 12th 2024 17:01:24 UTC | TBA        |

\*As these are showcase feeds, Orcfax makes no guarantees as to how long they
will be offered in this capacity; integrators who would like to take advantage
of these feeds or are interested in learning more about our services, please
contact us via [email][email] or [Discord][discord].

[email]: mailto:info@orcfax.io
[discord]: https://discord.com/invite/UbAeRuNzDu

### Feeds derived from DEXes

The price values published through these feeds are derived entirely from
decentralized exchange ([DEX][dex-1]) data.

For these feeds, ordering defers to how pairs appear on DEXes.

[dex-1]: https://glossary.orcfax.io/#dex

#### DEX showcase

In order to demonstrate the kinds of feeds derived from DEXes which integrators
could utilize in their dApps, Orcfax is currently offering the following feeds
as a showcase:

| Feed name             | Start Date                 | End date\* |
| --------------------- | -------------------------- | ---------- |
| [ADA-DJED][adadjed]   | Sep 12th 2024 17:01:24 UTC | TBA        |
| [ADA-iUSD][adaiusd]   | Sep 12th 2024 17:01:24 UTC | TBA        |
| [ADA-USDM][adausdm]   | Sep 12th 2024 17:01:24 UTC | TBA        |
| [AGIX-ADA][agixada]   | Sep 12th 2024 17:01:24 UTC | TBA        |
| [BOOK-ADA][bookada]   | Sep 12th 2024 17:01:24 UTC | TBA        |
| [BTN-ADA][btnada]     | Sep 12th 2024 17:01:24 UTC | TBA        |
| [CERRA-ADA][cerraada] | Sep 12th 2024 17:01:24 UTC | TBA        |
| [COPI-ADA][copiada]   | Sep 12th 2024 17:01:24 UTC | TBA        |
| [HOSKY-ADA][hoskyada] | Sep 12th 2024 17:01:24 UTC | TBA        |
| [HUNT-ADA][huntada]   | Sep 12th 2024 17:01:24 UTC | TBA        |
| [INDY-ADA][indyada]   | Sep 12th 2024 17:01:24 UTC | TBA        |
| [LENFI-ADA][lenfiada] | Sep 12th 2024 17:01:24 UTC | TBA        |
| [LQ-ADA][lqada]       | Sep 12th 2024 17:01:24 UTC | TBA        |
| [MIN-ADA][minada]     | Sep 12th 2024 17:01:24 UTC | TBA        |
| [SHEN-ADA][shenada]   | Sep 12th 2024 17:01:24 UTC | TBA        |
| [SNEK-ADA][snekada]   | Sep 12th 2024 17:01:24 UTC | TBA        |
| [WMTx-ADA][wmtxada]   | Sep 12th 2024 17:01:24 UTC | TBA        |

\*As these are showcase feeds, Orcfax makes no guarantees as to how long they
will be offered in this capacity; integrators who would like to take advantage
of these feeds or are interested in learning more about our services, please
contact us via [email][email] or [Discord][discord].
