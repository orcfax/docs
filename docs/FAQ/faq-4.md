---
id: faq-4
sidebar_position: 4
slug: /Technical-questions
---

# Technical Questions

## What are the minimum technical requirements for node operations?
While we believe that accessibility plays a large role in decentralization, and
have made design choices which we hope allows a broader range of participation
within the network, it is still important to be aware of what will be required
technically from those who choose to participate. In addition to a validator
license and the minimum $FACT deposit, operators will be expected to be familiar
with:
- The Cardano network
- Operating Linux servers

Additional information regarding technical requirements and updates to this
section should be anticipated as R&D continues in preparation for the
incentivized testnet.

## Phase 1 is federated, what does that mean?
Phase 1 is only the first step in realizing Orcfax's decentralization vision,
while enabling the team to continue developing important components and gaining
invaluable knowledge for future phases. These incremental development thresholds
help to move Orcfax data up the “trustless” spectrum, even in this initial
federated phase.

While our team’s goal for Orcfax is for it to become fully decentralized, phase
1 will use our federated node network so that we can continue critical R&D for
our incentivized test net, and after that our decentralized model. Our team uses
the term “federated” because Orcfax uses 5 geographically dispersed collector
nodes; this model incorporates decentralized best practices such as the node’s
geographical distribution in order to aid in regional consistency and the
prevention of single sources of failure. Additionally, each of these federated
nodes queries 3 different primary-source data providers at the same time, which
gives Orcfax a decentralized data collection mechanism, and all of this is
auditable in our world class standards compliant archival packages and Explorer
app.

Our most recent development [roadmap](http://docs.orcfax.io/roadmap) update has
Orcfax running the Incentivized Testnet Dec23-May24 and then transitioning to
independent validator nodes publishing to Mainnet in June 2024.

## Where can I find the price data in the datum?
In this demo we will use an off-chain datum. Our example will use this
[datum](https://preprod.cexplorer.io/datum/9ced750ebbb2c9a9eac2e07a91525cadd3bfab23950089faa3e3a55517d1033f)
, within which the price data can be found in the following portion:

```"list": [
                            {
                                "fields": [
                                    {
                                        "int": 2540017902
                                    },
                                    {
                                        "int": 1.8446744073709552e+19
                                    }
                                ],
                                "constructor": 3
                            },
                            {
                                "fields": [
                                    {
                                        "int": 39369801260558197
                                    },
                                    {
                                        "int": 1.8446744073709552e+19
                                    }
                                ],
                                "constructor": 3
                            }
                        ]
```

The first ```“fields”``` (we’ll call it f1) conveys ADA-USD, the second (f2)
conveys USD-ADA. Within each of these, the first part (we'll call it p1)
represents a price pair.

With this in mind, f1, p1 gives the ADA-USD price as an integer (2540017902),
and the second part (f1, p2) gives the number of decimals as ```longint```
(1.8446744073709552e+19).

The same is true for f2, p1 which gives the price pair for USD-ADA as an
integer; with f2, p2 giving the number of decimals.

Using Python, you can find out the price by executing the following:

```from ctypes import c_longlong
price = p1 * pow(10, c_longlong(p2).value)
```

With the following results:

![Off-chain Datum](/img/2023-10-03--off-chain-datum-walkthrough.png)
