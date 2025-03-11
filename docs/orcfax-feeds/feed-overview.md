---
id: Available feeds
sidebar_position: 1
slug: /feed-overview
---

# Available feeds

Currently, Orcfax provides support for CER type feeds. Integrators may review
the full list of available feeds for both [mainnet][mainnet] and
[preview][preview].

<!-- we should also consider where we might point integrators to if available
feeds becomes different from what is being showcased or subsidized -->

[mainnet]:
    https://github.com/orcfax/cer-feeds/blob/main/feeds/mainnet/cer-feeds.json
[preview]:
    https://github.com/orcfax/cer-feeds/blob/main/feeds/preview/cer-feeds.json

## Current Exchange Rate feeds

Current Exchange Rate ([CER][cer-1]) feeds publish statements relating to the
current price of a given currency against another. Feeds of this type include
ADA-USD and FACT-ADA.

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

The [Glossary][glossary] provides more information on the terminology and
standard adopted by Orcfax.

:::

[cer-1]: https://glossary.orcfax.io/#cer
[cer-2]: https://glossary.orcfax.io/#baseQuote
[cex-1]: https://glossary.orcfax.io/#cex
[dex-1]: https://glossary.orcfax.io/#dex
[cex-2]: https://en.wikipedia.org/wiki/ISO_4217
[cex-3]: https://tradenation.com/articles/base-currency-and-quote-currency/
[glossary]: https://glossary.orcfax.io

## Subsidized feeds

There are feeds which Orcfax has identified for their broad utility across
Cardano projects and has therefore committed to supporting their publication in
order to aid in development initiatives. These feeds have been selected in an
effort to provide developers with opportunities to design their solutions from
the beginning with authentic and verifiable data as a foundation.

A subsidized feed is one which Orcfax has committed to maintaining even without
a sponsor.

Orcfax is currently offering the following subsidized feeds:

| Feed name | Start Date                 | End date |
| --------- | -------------------------- | -------- |
| ADA-USD   | Sep 12th 2024 17:01:24 UTC | TBA      |
| FACT-ADA  | Sep 12th 2024 17:01:24 UTC | TBA      |

when an integrator activates a subscription for a subsidized feed it will no
longer be identified as such and will instead be labeled a
[sponsored][sponsored] feed.

[sponsored]: #sponsored-feeds

### Sunsetting subsidized feeds

In contrast to [showcase][showcase] feeds, subsidized feeds can be used in
production because Orcfax has agreed to cover the cost of their support.

While Orcfax has committed to maintaining access to these feeds, integrators who
wish to utilize these feeds without a subscription should do so at their own
risk; Orcfax still reserves the right to adjust or remove support for these
feeds as business needs dictate. Orcfax has agreed to cover the cost of
supporting subsidized feeds enabling them to be used in production. Changes to
services relating to subsidized feeds will be announced three months in advance
to provide integrators with adequate forewarning.

[showcase]: #showcase-feeds

## Sponsored feeds

When an integrator agrees to support a given feed through a heartbeat
publication subscription, that feed will be designated as a sponsored feed for
the duration of that agreement.

Sponsored feeds are those supported by an integrator through a subscription
(e.g. heartbeat or deviation). Projects utilizing sponsored feeds, but are not
paying for the feed, should do so at their own risk. Sponsors may change or
remove support at their own discretion.

Orcfax has the following sponsored feeds:

| Feed name | Start Date |
| --------- | ---------- |
| TBA       | TBA        |

## Sunsetting sponsored feeds

Projects which fail to adhere to subscription agreements risk disruptions to
their feeds.

Orcfax will remove support for sponsored feeds 2 weeks after non-payment where
there are no subscribed integrators.

## Showcase feeds

To demonstrate the kinds of feeds which integrators can utilize in their dApps,
Orcfax will periodically select feeds from its catalogue and highlight them
through publication as showcase feeds.

Feeds being published and not currently listed as subsidized or sponsored are
showcase feeds.

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
