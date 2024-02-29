---
id: Solution overview
sidebar_position: 1
slug: /solution-overview
---

Orcfax is an oracle designed to publish trustworthy data to smart contracts on
the Cardano blockchain. The oracle’s architecture consists of a number of
software nodes written predominantly in Python, Haskell, and Plutus v2 code.
These Orcfax nodes publish datum about the real world
(e.g. the price of ADA in USD) a CBOR-serialized reference inputs into Cardano
transactions. These datum are read and used in business logic by smart contracts
and scripts.

The subject of this data can be nearly limitless in possibilities, and can
include changes in currency price pairs, supply-chain activity, insurance, as
well as data on-chain (e.g. the prices of Cardano native tokens or CNTs).

![Orcfax solution overview](/img/2023-07-06--Orcfax-concept-diagram.png)

The Orcfax solution will collect this data from a minimum of three independent
sources via a decentralized pool of validator nodes. These data points are then
validated, aggregated, normalized by the nodes before finally being published
within a Cardano blockchain transaction by leveraging its Plutus V2 eUTXO format
and the [CIPs](https://github.com/mlabs-haskell/cardano-open-oracle-protocol/blob/9e9c9aedba84d32e424b1dd116b4734e1a42f3bc/coop-docs/00-design.md#:~:text=Cardano%20features%20enabling%20Oracles) implemented in the Vasil
hard fork for reference inputs and inline datum.

The rules for how to structure and publish these datum have been released within
the open-source [Cardano Open Oracle Protocol](https://github.com/mlabs-haskell/cardano-open-oracle-protocol/tree/main) (COOP) under an Apache 2.0 license.
This protocol allows Orcfax, and other publication services, to streamline their
solutions while also increasing cost efficiency.

Once published, this data can be used as trustworthy Reference Inputs to trigger
different kinds of business logic in Cardano smart contracts and dApps. The
Orcfax data collection, validation, and publication workflows are captured as
audit log packages on the decentralized Arweave.org network and can be easily
browsed and searched via the [Orcfax Explorer](https://explorer.orcfax.io/).

All data collection, validation, and publication workflows are captured within
archival packages, which contain complete audit logs of Orcfax processes. These
packages are secured through decentralized storage and are made easily
accessible through the [Orcfax Explorer](https://explorer.orcfax.io/) dashboard.

## Collection
Most leading oracle platforms are beginning to implement some form of
decentralized oracle pools as another technique to address the
[oracle problem](oracle-basics#what-is-the-oracle-problem).
In its purest form, a decentralized oracle pool uses distributed networking and
computation nodes to achieve consensus on the authenticity and accuracy of
source data before it is published on-chain.

Unfortunately, most current implementations do not go this far. Instead they
often receive data from a single, black box provider. They then use an oracle
pool to arrive at a consensus about the *uniformity* of that data and not
necessarily about its *authenticity* or *accuracy*.

To address this shortfall found in many other oracle services, Orcfax enforces
a strict source-data triangulation policy for all its oracle feeds *before*
that data is sent to a decentralized oracle pool for validation. This allows a
more thorough response to the oracle problem by providing nodes the ability to
compare data across multiple sources in order to assess the authenticity and
accuracy of the data; the data is then further interrogated by having all nodes
compare the data they collected.

More on this topic can be found in [Data collection](data-collection).

## Cardano Open Oracle Protocol (COOP)
The Orcfax oracle service uses the Cardano Open Oracle Protocol
([COOP](https://github.com/mlabs-haskell/cardano-open-oracle-protocol/))
to publish and format its data feeds.

COOP is a set of technical guidelines that specifies a process, and format, for
the publication and consumption of off-chain data by smart contracts on the
Cardano blockchain. These guidelines and specification in COOP are free,
open-source, and can be implemented by any other project seeking to develop
their own Cardano oracle feeds.

The Orcfax team developed the Cardano Open Oracle Protocol as a Catalyst
funded research project that maximizes the eUTXO model and design principles
in order to demonstrate a cost-sensitive, post-Vasil native method for
publishing secure, signed, datums on-chain for Reference Input consumption by
Cardano dApps.

The initial version was developed in collaboration with
[MLabs](https://mlabs.city/) consultancy. The Orcfax team has since onboarded
its own Plutus development in-house and expanded on the beta-version of COOP;
this subsequent version included a full schema.org, JSON-LD compliant
Cardano datum specification that anchors machine-readable fact-statements in
the worlds' most decentralized and stable L1 blockchain network.

However, R&D at Orcfax is ongoing and our team continues to find ways to bring
value to Orcfax products. Current work being developed in collaboration with
the same MLabs team is approaching an optimized COOP deployment that will
include, among other things, an improved datum structure to further increase
cost efficiency and ease of integration for dApps.

### Levering eUTXO strengths
The Cardano open oracle protocol (COOP) was designed to take advantage of the
[Cardano CIP-31](https://cips.cardano.org/cips/cip31/) reference inputs
enhancements introduced in Cardano network's Vasil hard fork. During the design
process, the primary design goals for the Cardano Open Oracle Protocol (COOP)
were to leverage CIP-31 in order to provide:

* Financial sustainability – minimize the cost and deposit needed to post,
maintain, and use COOP datum in eUTXOs, providing opportunities to share costs
amongst stakeholders.
* Data accessibility – minimize the probability of datum payloads not being
available for reference by downstream dApp scripts.
* Security – minimize the risk of exposure for the cryptographic keys used in
verifying the authenticity of COOP datums.

COOP was able to meet each of these design goals. The reference inputs
within each Orcfax feed allow the data provider (Orcfax) to publish data points
once, while simultaneously allowing multiple consumers to use the data point in
on-chain dApp scripts.

This enhancement allows a datum written to a single Cardano eUTXO to be read by
multiple consumers without competing with each other for exclusive access to
a transaction output.

## Standards-compliant audit logs
Oracles are less trustworthy if they can't demonstrate how their source data
was collected and validated.

To address this shortfall found in many other first-generation oracle services,
Orcfax generates standards-compliant
[archival packages](design#5-archive-data-validation-audit-logs) that are made
available permissionlessly so that everybody has the ability to audit the flow
of Orcfax data collection, validation, and publication.

These archival packages are described using [Schema.org](https://schema.org)
and [JSON-LD](https://json-ld.org/) compliant taxonomies, which have been
purposefully selected in order to enrich Orcfax data. Additionally, by
leveraging these taxonomies, Orcfax makes its data
[Linked Data](https://en.wikipedia.org/wiki/Linked_data) and
[AI-training](https://www.telusinternational.com/insights/ai-data/article/how-to-train-ai)
compatible, which dramatically enhances value.

Schema.org is the single most impactful markup language for making any type
of metadata machine-readable. In Orcfax's case, that means metadata related to
[Claims](https://schema.org/Claim) made about events happening in the real
world. This highly structured data from Orcfax feeds will be perfectly
positioned to serve as the source of a growing data lake of real world fact
statements that will have many secondary reference uses beyond DeFi oracle
publication.

To demonstrate the audit-enabling function and re-usability of its archival
packages, the [Orcfax Explorer](https://explorer.orcfax.io) was developed; this
product brings additional value to the Orcfax project by enabling users to
freely search for, and review, all Fact Statements published by Orcfax. The
Explorer does this through purposeful design decisions which have prioritized
accessibility and ease of use for a dynamically diverse user group.

## Orcfax beyond DeFi
The oracle problem isn't a problem domain limited to scenarios regarding the
provision of data feeds to dApps in an effort to underpin the success of
*truly* decentralized finance. Society at large is experiencing a
"[trust crisis](https://medium.com/coinmonks/orcfax-the-trust-machine-revisited-c475dbb0a5d6)".
We need better solutions for validating statements of fact about the real
world.

Orcfax is responding to that call. Our solution is intentionally designed
to leverage the distributed consensus breakthroughs achieved through
distributed ledger technologies like blockchain in order to provide
decentralized, "trustless" fact validation and reference services; What's more,
the Orcfax solution has been intentionally designed to by leveraging global
record keeping, information management standards so that data created through
its processes will have many use cases and applications beyond DeFi. Our team
is particularly interested in on-demand, real-world fact validation to counter
the threat of AI-generated falsehoods.
