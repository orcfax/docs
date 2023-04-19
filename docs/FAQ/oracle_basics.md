---
id: oracle_basics
sidebar_position: 1
slug: /oracle-basics
---

# Oracle basics

- [What is an oracle?](#what-is-an-oracle)
- [What is a smart contract?](#what-is-a-smart-contract)
- [What is the oracle problem?](#what-is-the-oracle-problem)

## What is an oracle?
Oracles like [Orcfax](https://orcfax.link), [Chainlink](https://chain.link), [Charli3](https://charli3.io), etc. are the technical component in blockchain architectures that deliver information about the real-world to on-chain smart contracts.

The name is derived from people in the ancient world who delivered messages and knowledge from the gods to the mortals.

![The oracle at Delphi](/img/oracle-of-delphi-bw.png)

Software oracles process information from online sources such as website content and open datasets but mostly from server-based application programming interfaces (API). These are the most common types of oracles and are used, for example, by algorithmic stablecoins or automated market maker (AMM) exchanges to monitor for changes in currency exchange rates.

Hardware oracles collect and publish information from physical sources such as sensors and barcode scanners. These are found in supply-chain scenarios or earth data use cases such as tree planting verification.

## What is a smart contract?
Smart contracts are software programs that execute conditional logic on next-generation blockchains like Cardano  (e.g. when event X happens, trigger action Y).  Because their source code is immutably stored and run on decentralized blockchain networks, they constrain the range of permissible user actions and their effects. 

This means that they can reasonably be expected to have the same outcome each time they are triggered. Therefore smart contracts are often referred to as having "trustless" qualities. The term "trustless" is a popular word to characterize blockchain technology because its cryptographic proofs and distributed consensus algorithms ensure that its shared data is authentic, accurate, and secure without reliance on a trusted third-party to verify the information.

Smart contracts are the key enabler for the explosion of the trillion-dollar DeFi industry. What most people don’t realize however, is that the vast majority of smart contracts are critically dependent on off-chain data provided by a very small group of oracle service providers. 

This is because almost all smart contracts need reliable real-world facts to serve as inputs to their application logic. This data must be “trustworthy” because the execution of smart contract logic can have significant economic and social consequences. Especially considering that the consequences of a blockchain transaction are irreversible by their very design. 

For example:
* A change in the Bitcoin to ADA price may trigger a limit order in a DeFi smart contract.
* The final score in a sports event may trigger a payout in a betting dApp smart contract.
* An extreme weather event may trigger a payout for a crop insurance smart contract.
* The words spoken in a political speech and authenticated via blockchain notarization may trigger policy changes or protests.

## What is the oracle problem?
Introducing false data about real-world events into smart contracts via an oracle feed is a potentially lucrative attack vector for bad actors as it can be used to trigger financial payouts from smart contract scripts. Unfortunately, there are significant challenges to preventing a so-called “man-in-the-middle” attack and proving that external real-world data introduced to smart contracts can be trusted to be authentic and accurate.

Collectively, the blockchain industry refers to these challenges as **“The Oracle Problem.”**

First-generation oracle providers each claim to have solved the oracle problem in their own way but what is not talked about enough is that most of these are still permissioned, black boxes. That is to say, they rely on off-chain deals to authorize and pay for access to their data which is usually sourced from a single trusted provider.

Smart contract developers or users of their dApps are not able to audit the provenance and flow of this data inside these black boxes, either before deciding to make an important financial decision based on that data or afterwards, to independently investigate whether any fraudulent activity has occurred or where mistakes where made. There is no clarity on how the oracle magically produced the singular data point that is eventually reported on-chain without any further context. Smart contract users are forced to trust the brand-reputation of the oracle provider as their only touchstone.

To be fair, most leading oracle platforms are now beginning to implement some form of decentralized oracle pools as another technique to address the oracle problem. In its purest form, a decentralized oracle pool uses distributed networking and computation nodes to validate the authenticity and accuracy of source data before it is published on-chain.

Unfortunately, most current implementations do not go this far. Instead they often receive data from a single, black box provider. They then use an oracle pool to arrive at a consensus about the uniformity of that data and not necessarily about its authenticity or accuracy. Unfortunately, a decentralized pool of oracle nodes is irrelevant if it is bottlenecked by a single upstream provider. To truly solve the oracle problem, multiple data sources should be collected and validated.

The [Orcfax oracle service](overview) 