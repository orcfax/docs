---
id: feed overview
sidebar_position: 1
slug: /feed-overview
---

# Overview

Currently, Orcfax provides support for Current Exchange Rate ([CER][cer-1]) type
feeds. Integrators may review the full list of available [cer-feeds][cer]; feed
activity for [mainnet][mainnet] and [preview][preview] may be monitored through
the Orcfax Explorer.

[cer]: https://github.com/orcfax/cer-feeds
[mainnet]:
    https://github.com/orcfax/cer-feeds/blob/main/feeds/mainnet/cer-feeds.json
[preview]:
    https://github.com/orcfax/cer-feeds/blob/main/feeds/preview/cer-feeds.json

## Current Exchange Rate feeds

CER feeds publish statements relating to the current price of a given currency
against another. Feeds of this type include ADA-USD and FACT-ADA.

For a feed of type CER, the naming convention is
[\{\{base-currency\}\}-\{\{quote-currency\}\}][cer-2].

:::note[Examples:]

-   crypto-fiat: ADA-USD
-   crypto-stable: ADA-iUSD
-   crypto and another native asset: FACT-ADA

:::

The price values published by these feeds are derived from centralized exchange
([CEX][cex-1]) data or decentralized exchange ([DEX][dex-1]) data.

For CEX based feeds, fiat currency names follow [ISO 4217][cex-2] and ordering
follows [forex][cex-3] conventions where applicable. In all other cases,
ordering defers to how pairs appear on the centralized or decentralized
exchanges.

:::info

Additional details on the form of CER feeds, their published datum, and archived
records depend on whether their data is sourced from a CEX or DEX; we have
separated design documents for each respectively.

[CEX][cex-form]

[DEX][dex-form]

:::

[cer-1]: https://glossary.orcfax.io/#cer
[cer-2]: https://glossary.orcfax.io/#baseQuote
[cex-1]: https://glossary.orcfax.io/#cex
[dex-1]: https://glossary.orcfax.io/#dex
[cex-2]: https://en.wikipedia.org/wiki/ISO_4217
[cex-3]: https://tradenation.com/articles/base-currency-and-quote-currency/
[cex-form]: available-feeds/CER/CEX/fact-statement.mdx
[dex-form]: available-feeds/CER/DEX/fact-statement.mdx

## Subsidized feeds

Orcfax may periodically identify feeds which it will commit to supporting
through subsidized publication. These feeds will be designated as `Subsidized`
on the Explorer, and are provided so developers have opportunities to design
their solutions from the beginning with authentic and verifiable data as a
foundation.

when an integrator activates a subscription for a feed which had previously
published as a subsidized feed it will no longer be identified as such and will
instead be labeled a [sponsored][sponsored] feed.

[sponsored]: #sponsored-feeds

### Sunsetting subsidized feeds

In contrast to [showcase][showcase] feeds, subsidized feeds can be used in
production because Orcfax has agreed to cover the cost of their support.

While Orcfax has committed to maintaining access to these feeds, integrators who
wish to utilize these feeds without a subscription should do so at their own
risk; Orcfax still reserves the right to adjust or remove support for these
feeds as business needs dictate. Changes to services relating to subsidized
feeds will be announced three months in advance to provide integrators with
adequate forewarning.

[showcase]: #showcase-feeds

## Sponsored feeds

When an integrator agrees to financially support a given feed, it will be
designated as a `Sponsored` feed on the Explorer for the duration of that
agreement.

Sponsored feeds are those supported by an integrator through a subscription
(e.g. heartbeat or deviation). Projects utilizing sponsored feeds, but are not
paying for the feed, should do so at their own risk. Sponsors may change or
remove support at their own discretion.

## Sunsetting sponsored feeds

Projects which fail to adhere to subscription agreements risk disruptions to
their feeds; Orcfax maintains the right to halt feed publication for
non-payment.

## Showcase feeds

To demonstrate the kinds of feeds which integrators can utilize in their dApps,
Orcfax may periodically select feeds from its catalogue and highlight them
through publication on productions and/or preproduction networks. These feeds
will be designated as `Sponsored` on the Explorer.

:::warning

Orcfax may change or remove support for showcase feeds at its discretion and may
do so without notice. Integrators who would like to take advantage of these
feeds or are interested in learning more about our services should contact us
via [Discord][discord] or [email][email].

:::

[discord]: https://discord.com/invite/UbAeRuNzDu
[email]: mailto:info@orcfax.io

## Removal of feed support

Unless a feed is sponsored and paid for by a third-party, or subsidized through
Orcfax, we may suspend or remove technical support for feeds at our own
discretion.
