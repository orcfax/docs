---
id: Roadmap
sidebar_position: 20
slug: /roadmap
---

# Roadmap

The following represents the most up-to-date Orcfax Roadmap; it unpacks what
the Orcfax team has identified as critical Eras (ie phases) in solution
development towards our ultimate goal of developing Cardano's decentralized
oracle solution and providing oracle feeds which users can "Trust but Verify".

Within each of these Eras, Orcfax Protocol phases (eg v1) are represented,
their key milestones explained, and how each fit into our mission to
decentralize our oracle solution.

![Orcfax roadmap](/img/2024-06--Orcfax-Roadmap.png)

## The Stabilization Era

This Era marks Orcfax's first steps towards an oracle solution on Cardano. From
the initial R&D funded by Cardano’s Catalyst program, to launching our first
ADA-USD feed on mainnet, and introducing the Orcfax Explorer, Orcfax has focused
on creating and stabilizing a sustainable oracle solution.

### Research phase

#### Catalyst research

Initial R&D completed by Orcfax was made possible through Cardano’s Catalyst
program. We designed a Cardano-based oracle solution which took advantage of the
CIP-31 enhancements introduced in the Vasil hard fork. Our research focused on
financial sustainability for stakeholders, data accessibility for downstream
dApps, and network security.

#### Testnet proof of concept

Orcfax continued its research on the initial protocol design, and published its
first iteration of the Orcfax ADA-USD feed on Cardano testnet.

### V0 Phase

#### Mainnet ADA-USD

The first iteration (v0) of the Orcfax ADA-USD feed was launched on Cardano
mainnet in 2023. Our team hosted a booth at the Rare Evo conference, a tutorial
workshop at Cardano Summit Dubai, and used both opportunities to announce the
new feed and our presence in the Cardano ecosystem.

#### Explorer launch

The Orcfax Explorer was released at the same time as our ADA/USD feed. This
resource provides a powerful demonstration of the “trust but verify” concept to
the Cardano community and other stakeholders interested in the price of ADA.

We recognize that not all those interested in oracle data or even our own
stakeholders are software engineers; the average user wants an easy-to-access
proof that the external data their dApps are using to settle major financial
transactions are authentic and accurate. The Orcfax Explorer offers that easy to
use interface.

Each Orcfax fact statement that is published on the Cardano blockchain has a
corresponding audit trail that can be easily searched and browsed by utilizing
the tools available within the Explorer. These audit log packages document how
the primary source data was collected and validated, including message signature
verifications, as part of a robust data provenance trail.

### V1 Phase

#### Protocol upgrade

Not only did running our first version of the protocol live on Mainnet provide
the team with valuable experience, it was also an incredible opportunity to
receive feedback from Cardano projects which tested the v0 feed. We then used
these findings to upgrade our oracle protocol for more efficient on-chain data
parsing, reduced transaction costs, and improved the trust and security model.

#### Decentralized CNT feeds

After extensive testing on collection and publication processes over Q1 of 2024,
Orcfax will release its long-anticipated CNT feeds alongside the rollout of the
upgraded v1 protocol. These feeds will provide more accurate and responsive
values for Cardano native assets by harnessing the combined value of the
ecosystem’s DEX liquidity pools and the introduction of an aggregated virtual
liquidity pool per CNT.

#### Oracle cost reduction

It is the explicit goal of Orcfax to be the most cost efficient and sustainable
oracle solution in the Cardano ecosystem. This goal is reflected in our v1
protocol upgrades as each have been implemented in order to maximize
efficiencies, drive down the cost to consumer, and all while maintaining
security and reliability.

One of the primary upgrades was to reduce the verbosity of on-chain datum and to
leverage Cardano’s unique transaction metadata sidecar feature to preserve
valuable contextual information pertaining to each transaction.

#### Multi-feed publication

The Orcfax v1 protocol will introduce a new integrator feature called “bundling”
which will enable the publication of multiple feeds within a single Cardano
transaction. This feature will streamline integrator processes without
sacrificing security or performance for oracle data consumers.

#### Explorer upgrade

The first release of the Orcfax Explorer provided our community with a powerful
human-readable portal into the Orcfax on-chain datum and the historical open
archive of fact statements that our oracle solution has created. This upgrade
will further improve this tool by introducing real time network status,
dashboard visualizations, network incident reporting, and audit log downloads.

#### External audit

Oracles provide trusted data inputs to smart contracts that can control
significant user assets. That reality raises valid concerns about the
reliability of oracle solutions and their underlying architectures. Because of
this, Orcfax will pursue an external audit to be executed by an external
technical team; the audit will analyze the security of Orcfax’s on-chain and
off-chain architecture. We will take remediative action on recommendations that
result from the audit in order to ensure that the Orcfax oracle service delivers
the most comprehensive, accurate, and trustworthy real-world data possible to
Cardano dApps and smart contracts.

## Decentralization Era

### Continuation of v1 phase

The Decentralization Era marks Orcfax's transition to a decentralized oracle
network operated and maintained by a decentralized autonomous organization
(DAO).

#### Community voting

The Orcfax project and network is designed to transition its governance and
decision-making to a decentralized autonomous organization as the final
milestone of our “Decentralization” era. Until then we will continue to engage
with our community to nurture an open culture of ideas and active discussion
around major decisions.

Our commitment to this progression is evident in our daily Discord threads as
well as in several key votes that were held at the beginning of the
Decentralization era.

This practice will continue as we expand our technical platform and community
with the Incentivized Testnet initiative.

#### NFT license reservation

On February 17th at 19:00 UTC, Orcfax opened reservations for its Orcfax
Validator license NFTs. In order to participate as a validator in the Orcfax
network, an operator must hold one of these NFTs, which have been capped at 100
validator licenses.

This process proved a great success as all 100 reservations were claimed within
the allotted time.

#### NFT license mint

The window for minting the license started on April 15th at 18:00 UTC and closed
the 18th at 18:00 UTC. Everyone that held a valid reservation was given the
opportunity to mint their license during that time window. The remaining
licenses were made available during a subsequent phase where they were minted on
a first come first serve basis which started April 19th at 18:00 UTC.

All 100 licenses have been successfully minted and are now also trading on the
open Cardano NFT exchange markets.

#### Validator onboarding

Every validator license holder has the opportunity to participate in our
Incentivized Testnet (ITN). This process will start with on-ramp training in
order to familiarize operators with the Orcfax network node architecture and the
data collection processes. We will also take this opportunity to introduce
participants to our testnet tooling and feedback process so that network
development benefits from operator feedback.

#### Incentivized Testnet

Validators will iteratively develop the capability to operate their own Orcfax
validator nodes. These nodes will go through several release candidate upgrades
that introduce progressively more complex node functionality. Operators can
expect to start with processed relating to data collection, progressing to
calculation, validation, and eventually participating in on-chain publication.

More about the ITN can be read [here][itn-1].

[itn-1]: https://medium.com/@orcfax/orcfax-community-validators-preparing-for-itn-rollout-9bc1506da743

## Decentralized Era

### V2 Phase

#### L2 consensus layer

A critical step in the decentralization of the Orcfax network involves
developing a robust consensus network that not only comes to agreement on datum
values but also which network nodes will be randomly selected to perform the
on-chain publication function.

This development is critical as the consensus layer must be secure and
Sybil-resistant to prevent “man-in-the-middle” attacks for users of our oracle
data. It must also leverage game theory to ensure node participants remain
incentivized to contribute their computing power and trustworthy computing
outputs to the network.

#### Decentralized Validator Network

Establishing a network of 100 distributed Orcfax validators will enable the
decentralization of the entire network. By enabling the mainnet operation of our
node operators, Orcfax will dramatically enhance its resilience, independence,
and long-term sustainability as Cardano’s most comprehensive decentralized
oracle solution.

#### Decentralized protocol upgrade

Achieving consensus quickly, yet securely, in a distributed system remains an
ongoing challenge in the Web3 space. This is often referred to as the
“blockchain trilemma” where the achievement of security, decentralization, or
scalability come at the cost of another.

Orcfax will remain at the forefront of decentralization R&D in the Cardano space
in order to investigate and implement continuous improvements to the Orcfax
protocol that solve these challenges.

#### Staking protocol design

The Orcfax oracle network will employ a network of validator nodes to collect
and verify source data. One of blockchain’s major breakthroughs was to employ
game theory to incentivize the operation and maintenance of a decentralized
network in the absence of a central, coordinating party.

The protocol will be upgraded during this phase to implement a staking policy
and mechanism. Orcfax validator nodes will hold FACT tokens as a deposit while
performing network compute functions (eg Collect, Validate, Publish). Operators
will be rewarded with additional FACT tokens if their node participates as
expected during Orcfax’s block by block publication cycles. Otherwise, if a node
reports irregular data, or has networking issues, their stake will be deducted
or “slashed” from their deposit balance.

#### DAO governance

This milestone marks the time at which the Orcfax Decentralized Autonomous
Organization (DAO) will take over network governance decisions and project
strategy from Orcfax Ltd, the company. The responsibilities of this DAO will
include deciding which contracting firms (e.g. Orcfax Ltd, or other) to hire to
continue operating, monitoring, and/or upgrading the Orcfax technical
infrastructure, for how long, and for how much.

Five percent of the fixed 1 billion FACT token supply has been allocated to fund
the Orcfax DAO and to seed its long term success.
