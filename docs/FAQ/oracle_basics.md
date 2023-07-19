---
id: oracle_basics
sidebar_position: 1
slug: /oracle-basics
---

# Oracle basics

## 1. What is an oracle?
Oracles like [Orcfax](https://orcfax.io/), [Chainlink](https://chain.link), [Charli3](https://charli3.io), etc. are the technical component in blockchain architectures that deliver information about the real-world to on-chain smart contracts.

The name is derived from people in the ancient world who delivered messages and knowledge from the gods to the mortals.

![The oracle at Delphi](/img/oracle-of-delphi-bw.png)

Software oracles process information from online sources such as website content and open datasets but mostly from server-based application programming interfaces (API). These are the most common types of oracles and are used, for example, by algorithmic stablecoins or automated market maker (AMM) exchanges to monitor for changes in currency exchange rates.

Hardware oracles collect and publish information from physical sources such as sensors and barcode scanners. These are found in supply-chain scenarios or earth data use cases such as tree planting verification.

## 2. What is a smart contract?
Smart contracts are software programs that execute conditional logic on next-generation blockchains like Cardano  (e.g. when event X happens, trigger action Y).  Because their source code is immutably stored and run on decentralized blockchain networks, they constrain the range of permissible user actions and their effects.

This means that they can reasonably be expected to have the same outcome each time they are triggered. Therefore smart contracts are often referred to as having "trustless" qualities. The term "trustless" is a popular word to characterize blockchain technology because its cryptographic proofs and distributed consensus algorithms ensure that its shared data is authentic, accurate, and secure without reliance on a trusted third-party to verify the information.

Smart contracts are the key enabler for the explosion of the trillion-dollar DeFi industry. What most people don’t realize however, is that the vast majority of smart contracts are critically dependent on off-chain data provided by a very small group of oracle service providers.

This is because almost all smart contracts need reliable real-world facts to serve as inputs to their application logic. This data must be “trustworthy” because the execution of smart contract logic can have significant economic and social consequences. Especially considering that the consequences of a blockchain transaction are irreversible by their very design.

For example:
* A change in the Bitcoin to ADA price may trigger a limit order in a DeFi smart contract.
* The final score in a sports event may trigger a payout in a betting dApp smart contract.
* An extreme weather event may trigger a payout for a crop insurance smart contract.
* The words spoken in a political speech and authenticated via blockchain notarization may trigger policy changes or protests.

## 3. What is the oracle problem?
Introducing false data about real-world events into smart contracts via an oracle feed is a potentially lucrative attack vector for bad actors as it can be used to trigger financial payouts from smart contract scripts. Unfortunately, there are significant challenges to preventing a so-called “man-in-the-middle” attack and proving that external real-world data introduced to smart contracts can be trusted to be authentic and accurate.

Collectively, the blockchain industry refers to these challenges as **“The Oracle Problem.”**

First-generation oracle providers each claim to have solved the oracle problem in their own way but what is not talked about enough is that most of these are still permissioned, black boxes. That is to say, they rely on off-chain deals to authorize and pay for access to their data which is usually sourced from a single trusted provider.

Smart contract developers or users of their dApps are not able to audit the provenance and flow of this data inside these black boxes, either before deciding to make an important financial decision based on that data or afterwards, to independently investigate whether any fraudulent activity has occurred or where mistakes where made. There is no clarity on how the oracle magically produced the singular data point that is eventually reported on-chain without any further context. Smart contract users are forced to trust the brand-reputation of the oracle provider as their only touchstone.

To be fair, most leading oracle platforms are now beginning to implement some form of decentralized oracle pools as another technique to address the oracle problem. In its purest form, a decentralized oracle pool uses distributed networking and computation nodes to validate the authenticity and accuracy of source data before it is published on-chain.

Unfortunately, most current implementations do not go this far. Instead they often receive data from a single, black box provider. They then use an oracle pool to arrive at a consensus about the uniformity of that data and not necessarily about its authenticity or accuracy. Unfortunately, a decentralized pool of oracle nodes is irrelevant if it is bottlenecked by a single upstream provider. To truly solve the oracle problem, multiple data sources should be collected and validated.

The [Orcfax oracle service](solution) addresses this problem and solves a number of related oracle problems.

## 4. Where is the market value?

While our competitors in the Cardano ecosystem have struggled to find projects to integrate their feeds, there is absolutely no shortage of projects that need oracle feeds; this disparity is a direct result of customers having difficulty with the technical architecture choices, pricing model, and off-chain co-coordination requirements implemented by our competition.

In contrast, Orcfax has been approached by several projects looking to integrate our feeds. We are currently in private, active conversations with at least 10 high profile Cardano projects; while we will not be announcing "partnerships", We are lining up a number of feed-consumer announcements which we will announce over the coming months.

## 5. What partnerships has Orcfax Announced?

Orcfax will not be announcing "partnerships”. These kinds of relationships run counter to how we conceptualize decentralization; partnerships require trust where we should be designing trustlessnesss. To that end, we don't want nor will we require data consumers to sign any kind of off-chain deal to use our feeds. Instead, over the next 3 months we will begin announcing the projects and platforms that have approached the Orcfax team to become Orcfax fact statement consumers.

## 6. What does Orcfax bring to Cardano?

Orcfax is the most comprehensive solution to the oracle problem. This is because the project was designed to be a standards-compliant record-keeping system that integrates on-chain publication with decentralized data collection, validation, and archiving. Orcfax's system requirements were derived from an extensive analysis of blockchain, IT, and legal standards which are managed in a comprehensive requirements knowledge-base.

We have also reviewed existing oracle services and completed a comparative analysis of how facts are proven to be authentic and accurate in disciplines such as law, historiography, and philosophy. First-generation oracle providers have mostly ignored industry standards and academic research findings that exist outside of the blockchain industry echo chamber. In particular, ISO quality standards that provide well-established international guidelines and practices for ensuring the authenticity and accuracy of digital information have been especially ignored. And this is the very thing that oracles should be most concerned with. Orcfax stands apart from all other attempts to solve the oracle problem because it has been designed from the ground-up to be a standards-compliant, digital record-keeping system.

## 7. How is the Orcfax data catalog added to and maintained?

At present, Orcfax Ltd. decides which new fact statement types to collect, validate, and publish as feeds. We are in close discussions with potential consumers of our data feeds to understand their needs while also leveraging competitive intelligence in order to identify innovative new oracle feed products to bring to the Cardano ecosystem.

The governance of the network, including decisions on which feeds to host (or retire) will be transferred to the Orcfax DAO at a later stage. Once a feed is added, each Orcfax node in the decentralized oracle pool gets a software upgrade that now enables their node to collect data from new data sources, normalize it, and pass it around the oracle pool for validation.
