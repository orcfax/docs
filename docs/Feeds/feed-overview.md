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

### Feeds derived from DEXes

The price values published through these feeds are derived entirely from
decentralized exchange ([DEX][dex-1]) data.

For these feeds, ordering defers to how pairs appear on DEXes.

[dex-1]: https://glossary.orcfax.io/#dex
