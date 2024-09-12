---
id: feeds-1
sidebar_position: 1
slug: /feed-overview
---

# Feed overview

At present Orcfax offers one type of feed. As additional feed types are
developed, they will be listed here.

## CER

The feed type [CER][cer-1], representing Current Exchange Rate, encompasses all
feeds which present statements regarding the current price of a given currency
against another. Included in this type are feeds such as ADA-USD and FACT-ADA.

For a feed of type CER, the naming convention is
[{{base-currency}}-{{quote-currency}}][cer-2].

>Examples:
>
>* crypto-fiat: ADA-USD
>* crypto-stable: ADA-iUSD
>* crypto and another native asset: FACT-ADA

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

| Feed name | Start Date | End date\* |
| --------- | ---------- | ---------- |
| [ADA-BTC][adabtc] | Sep 12th 2024 17:01:24 UTC | TBA |
| [ADA-USD][adausd] | Sep 12th 2024 17:01:24 UTC | TBA |
| [BTC-USD][btcusd] | Sep 12th 2024 17:01:24 UTC | TBA |

\*As these are showcase feeds, Orcfax makes no guarantees as to how long they will
be offered in this capacity; integrators who would like to take advantage of
these feeds or are interested in learning more about our services, please
contact Vahid, our Chief Business Officer, via [email][email] or
[Discord][discord].

[adabtc]: https://explorer.orcfax.io/feeds/CER/ADA-BTC/facts/1003b535-0794-4228-9d6d-917f79ef0f09
[adausd]: https://explorer.orcfax.io/feeds/CER/ADA-USD/facts/f38091cd-cb8e-447d-8a8b-66d5a3916a47
[btcusd]: https://explorer.orcfax.io/feeds/CER/BTC-USD/facts/94fa78f2-67d4-4f01-9338-3fe230333da1

### Feeds derived from DEXes

The price values published through these feeds are derived entirely from
decentralized exchange ([DEX][dex-1]) data.

For these feeds, ordering defers to how pairs appear on DEXes.

[dex-1]: https://glossary.orcfax.io/#dex

#### DEX showcase

In order to demonstrate the kinds of feeds derived from DEXes which integrators
could utilize in their dApps, Orcfax is currently offering the following feeds
as a showcase:

| Feed name | Start Date | End date\* |
| --------- | ---------- | ---------- |
| [ADA-DJED][adadjed] | Sep 12th 2024 17:01:24 UTC | TBA |
| [ADA-iUSD][adaiusd] | Sep 12th 2024 17:01:24 UTC | TBA |
| [ADA-USDM][adausdm] | Sep 12th 2024 17:01:24 UTC | TBA |
| [AGIX-ADA][agixada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [BOOK-ADA][bookada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [BTN-ADA][btnada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [CERRA-ADA][cerraada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [COPI-ADA][copiada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [FACT-ADA][factada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [HOSKY-ADA][hoskyada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [HUNT-ADA][huntada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [INDY-ADA][indyada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [LENFI-ADA][lenfiada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [LQ-ADA][lqada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [MIN-ADA][minada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [SHEN-ADA][shenada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [SNEK-ADA][snekada] | Sep 12th 2024 17:01:24 UTC | TBA |
| [WMT-ADA][wmtada] | Sep 12th 2024 17:01:24 UTC | TBA |

\*As these are showcase feeds, Orcfax makes no guarantees as to how long they will
be offered in this capacity; integrators who would like to take advantage of
these feeds or are interested in learning more about our services, please
contact Vahid, our Chief Business Officer, via [email][email] or
[Discord][discord].

[adadjed]: https://explorer.orcfax.io/feeds/CER/ADA-DJED/facts/43661f6a-bb93-41e4-8e7f-b59546202982
[adaiusd]: https://explorer.orcfax.io/feeds/CER/ADA-iUSD/facts/229fb469-1ab8-4a0b-9f45-a2a46fc59ee4
[adausdm]: https://explorer.orcfax.io/feeds/CER/ADA-USDM/facts/4848746e-5aca-4896-85bc-ece90b823a24
[agixada]: https://explorer.orcfax.io/feeds/CER/AGIX-ADA/facts/6d6f3f78-1c30-48ba-bf73-aa9fc2e3b728
[bookada]: https://explorer.orcfax.io/feeds/CER/BOOK-ADA/facts/be6a20c4-c407-4cc0-82b6-4f90a50652dc
[btnada]: https://explorer.orcfax.io/feeds/CER/BTN-ADA/facts/aece723e-3406-4b9f-8ee4-6bb4575439bc
[cerraada]: https://explorer.orcfax.io/feeds/CER/CERRA-ADA/facts/2dd1a457-3da1-4557-9054-66cad03c80d1
[copiada]: https://explorer.orcfax.io/feeds/CER/COPI-ADA/facts/8eb42060-2548-47ac-862e-dfe41e9146cc
[factada]: https://explorer.orcfax.io/feeds/CER/FACT-ADA/facts/d8687792-ab69-46d9-b365-264148c425df
[hoskyada]: https://explorer.orcfax.io/feeds/CER/HOSKY-ADA/facts/f11abcd1-11d5-4f02-b554-1bf8754b70b8
[huntada]: https://explorer.orcfax.io/feeds/CER/HUNT-ADA/facts/ef83cad7-5bf9-4c12-89ae-4448182ed015
[indyada]: https://explorer.orcfax.io/feeds/CER/INDY-ADA/facts/435ad6a5-73de-43d0-b407-ffcd128faaa0
[lenfiada]: https://explorer.orcfax.io/feeds/CER/LENFI-ADA/facts/876fae23-4549-40d2-a53d-683273abd3d4
[lqada]: https://explorer.orcfax.io/feeds/CER/LQ-ADA/facts/c6addb42-9acc-4ab4-aeae-7be80ea240a9
[minada]: https://explorer.orcfax.io/feeds/CER/MIN-ADA/facts/4c567d5f-2d00-4943-9d51-b5ea94bc333e
[shenada]: https://explorer.orcfax.io/feeds/CER/SHEN-ADA/facts/6eeae531-f79d-4076-83d8-6e8a27b94c05
[snekada]: https://explorer.orcfax.io/feeds/CER/SNEK-ADA/facts/2b320c25-859d-4ca6-a88a-307e2d6b8f27
[wmtada]: https://explorer.orcfax.io/feeds/CER/WMT-ADA/facts/8ad34386-6be9-4c12-b069-ce2fb38dc681
[email]: vahid@orcfax.io
[discord]: https://discord.com/invite/UbAeRuNzDu
