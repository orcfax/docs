---
id: Solution overview
sidebar_position: 1
slug: /solution-overview
---

# Solution overview

Orcfax is an oracle designed to publish trustworthy data to smart contracts on
the Cardano blockchain. The oracle’s architecture consists of a number of
software nodes written predominantly in Python, Haskell, and Plutus v2 code.
These Orcfax nodes publish datum about the real world
(e.g. the price of ADA in USD) as CBOR-serialized reference inputs into Cardano
transactions. These datum are read and used in business logic by smart contracts
and scripts.

The subject of this data can be nearly limitless in possibilities, and can
include changes in current exchange rates (CER), supply-chain activity,
insurance, as well as data on-chain
(e.g. the prices of Cardano native tokens or CNTs).

![Orcfax solution overview](/img/2023-07-06--Orcfax-concept-diagram.png)

Once published, this data can be used as trustworthy reference inputs to trigger
different kinds of business logic in Cardano smart contracts and dApps. All of
this data relating to Orcfax workflows (including collection, validation,
and publication) is captured within archival packages, which when combined
represent complete audit logs of Orcfax processes. These packages are secured
through decentralized storage and are made easily accessible through the
Orcfax [Explorer](https://explorer.orcfax.io/).

More can be read about the Explorer in the
[Orcfax Explorer](auditability#the-orcfax-explorer) section.

<!-- Reassess the volume of content here. cut to avoid redundancy -->

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
a strict triangulation policy for all its oracle feeds. This means that the
Orcfax solution will collect data from a minimum of three independent
sources via a decentralized pool of validator nodes. These data points are then
normalized, aggregated, and validated by the nodes before finally being
published within a Cardano blockchain transaction via its Plutus V2 eUTXO
format.

More on this topic can be found in [Data collection](data-collection).

## v1 Orcfax Protocol

The rules for how this data is structure and published is defined through the v1
deployment of the upgraded Orcfax Protocol. Further details can be found in
the Orcfax [developer manual](docs/developer-manual/consume.md)

The upgraded protocol allows Orcfax to streamline its solutions while also
increasing cost efficiency. The Orcfax Protocol was designed as a purpose-built
set of software tools and processes to publish datum to the Cardano blockchain.

## Publication

After the data has been collected, normalized, and validated, the next step is
to publish it on-chain; how publication is executed is largely dependent on the
business needs of Orcfax feed integrators and the use cases these feeds enable.

These use cases are wide ranging and innovation in the blockchain space means
that new use cases for Orcfax feeds continue to evolve. Because of this, there
often isn't a one size fits all solution for how to bring data on-chain. Orcfax
recognizes just how dynamic the development landscape and is leveraging ongoing
R&D along with integrator feedback in order to meet those changing needs.

One way that Orcfax is addressing varying integrator needs is through the
development of options in terms of feed publication models; these models allow
integrators to choose a service which meets the needs of their projects.

By adding flexibility to the Orcfax solution, dApps can make business decisions
that improve cost efficiency and value to their stakeholders.

More on this topic can be found in [Publication models](publication-models).

## Standards & best practice compliance

The Orcfax Team’s world class experience with information management
technologies and expertise in other related fields has informed solution
development at every stage. Orcfax is developing the most comprehensive solution
to the oracle problem. This is, at least in part, because Orcfax has been
designed as a standards-compliant recordkeeping system that integrates on-chain
publication with decentralized data collection, validation, and archival
processes.

The Orcfax system requirements were meticulously derived from the extensive
analysis and review of blockchain, information technology, and legal standards
being utilized within the information management industry. The outputs of this
research are managed in a comprehensive requirements knowledge base from which
Orcfax has derived system requirements. In addition to these standards and best
practices, our team continually reviews existing oracle services in order to
maintain a comparative analysis of other oracle services and how those solutions
attempt to guarantee the accuracy and authenticity of their data.

Our analysis continues to reveal gaps both in how existing oracle providers
conceptualize the oracle problem, and in the efficacy of their attempts to
address it. These service providers have broadly ignored industry standards and
academic research findings that exist outside of the blockchain industry’s echo
chamber. Of particular significance are the [ISO][iso-1] quality standards that
provide well-established international guidelines and practices for ensuring the
authenticity and accuracy of digital information– the very thing that oracles
should be most concerned with.

Orcfax stands apart from other oracle solutions because it has leveraged
relevant multidisciplinary assets in order to inform its development from the
ground-up as a standards-compliant digital record-keeping system.

More on this topic can be found in [Auditability](auditability).

[iso-1]: https://www.iso.org/standards.html

## Orcfax beyond DeFi

The oracle problem is not limited to DeFi and its quest to *truly* decentralized
finance; society as a whole is experiencing a "[trust crisis][trust-1]". We need
better solutions for validating statements of fact about the real world.

Orcfax is responding to that call. Our solution is intentionally designed
to leverage the distributed consensus breakthroughs achieved through
distributed ledger technologies like blockchain in order to provide
decentralized, "trustless" fact validation and reference services; What's more,
the Orcfax solution has been intentionally designed to leverage global
record keeping and information management standards so that data created through
its processes will have many use cases and applications beyond DeFi
(e.g. decentralized journalism, AI training, and more).

[trust-1]: https://medium.com/coinmonks/orcfax-the-trust-machine-revisited-c475dbb0a5d6
