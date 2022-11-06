---
id: intro
sidebar_position: 1
slug: /
---

# Introducing Orcfax

Orcfax is an [oracle service](faq#what-is-an-oracle) that publishes facts about real world events to the [Cardano](https://cardano.org/) blockchain.

## Getting Started

Learn how your Cardano smart contracts and scripts can [consume data](consume) from Orcfax.

Using Orcfax's unique auditing and archiving features, you can [verify data](verify) published by this oracle.

## Learn more

Read our [FAQ](FAQ) to answer questions you may have about oracles in general.

Find out more about the [Cardano Open Oracle Protocol](coop)(COOP) that is implemented in the Orcfax service.

## Solution overview

![Orcfax concept diagram](/img/orcfax-concept-diagram-nov-2022.png)

### Data collection
The Orcfax oracle service collects data about real world events from various primary sources using a network of decentralized nodes. 

Nodes are run indepedently and permissionlessly by anyone that is able to install the free software and commit a small amount of $FACT tokens as their stake. $FACT is the native token used within the Orcfax network to pay for data publication and to reward oracle pool participants.

Wherever possible, Orcfax collects raw data from at least three independent sources to triangulate and average the information. For example, to determine the price of ADA to U.S. dollars, Orcfax nodes will query APIs at Kraken, Binance, and CoinGecko.

### Data validation
The collected source data is normalized into a standard schema, hashed, and then circulated within the decentralized oracle pool to validate that the exact same data has been collected and tabulated. The data points published by the Orcfax oracle are rich in context and therefore referred to as "fact statmenents", to reflect their semantic maturity as formally structured declarations about real world events and entities.

Orcfax maintains public audit logs so that the flow of information through the oracle service can be carefully monitored and protected. If there are any data anomolies at this collection and normalization stage, it's a red flag that some part of the data may have been corrupted, whether accidently or intentionally. Nodes that submit innacurate or false data will be punished by having a portion of their staked $FACT tokens "slashed", i.e. deducted as a penalty and their node reputation score will be affected. 

### $FACT rewards
After successfully collecting the source data and achieving network consensus on its normalized form, a lottery is held by the oracle protocol to randomly assign a publication reward of $FACT tokens to one of the successful oracle nodes. This reward is a share of the publication fee paid by the data Consumer who requested the publication of a fact statement. This creates the incentive structure for oracle nodes to participate in the network.

### Data publication
The Orcfax oracle nodes create a fact statement record that is formatted in compliance with the Cardano Open Oracle Protocol. This includes markup in JSON-LD linked data format in compliance with the relevant schema.org ontologies. Using this ubuqitous de-facto standard to express facts about the real world great improves the discoverability and re-use of data published via the Orcfax network, including use in fact checking services, search indexes, and machine-readable AI.


## Research-driven and standard compliant
Orcfax is the most comprehensive solution to the [oracle problem](faq#what-is-the-oracle-problem) because it is designed to be a standards-compliant recordkeeping system that integrates on-chain publication with decentralized data collection, validation, and archiving. 

Orcfax's sytem requirements were derived from an extensive analysis of blockchain, IT, and legal standards. We also reviewed existing oracle services and completed a comparative analysis of how facts are proven to be authentic and accurate in disciplines such as law, historiograpy, and philosophy.

First-generation oracle providers have mostly ignored industry standards and academic research findings that exist outside their own echo chamber. In particular those International Organization for Standardization (ISO) quality standards that provide well-established guidelines and practices for ensuring the authenticity and accuracy of digital information; the very thing that oracles should be most concerned about.

## A chain of custody for information
What our research has shown is that across a wide-variety of disciplines, the primary way to prove that information is authentic is by documenting the process of data collection, revision, and publication and then protecting that information from alteration while making it easily accessable for reference and audit. 

There are a number of relevant industry standards and practices for this which have been incorporated into the Orcfax design.

This means that users of the Orcfax oracle service can "trust but verify" the data that they are relying on to trigger Cardano smart contracts. This will become increasingly more relevant as blockchain infrastructure and smart contracts continue to grow their social and economic impact.

