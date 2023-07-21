---
id: Problem statement
sidebar_position: 1
slug: /problem-statement
---

# Problem statement
**TLDR; can my dApp trust this real-world data to be authentic and accurate?**

Introducing false data about real-world events into blockchain smart contracts
via an oracle feed is a potentially lucrative attack vector for bad actors as it
can be used to trigger financial payouts from smart contract scripts.
Unfortunately, there are significant challenges to preventing a so-called
“man-in-the-middle” attack and proving that external real-world data introduced
to smart contracts can be trusted to be authentic and accurate.

Collectively, the blockchain industry refers to these challenges as “The Oracle
Problem.”

Orcfax provides a comprehensive [solution](solution-overview) to this problem.

Most leading oracle platforms are beginning to implement some form of
decentralized oracle pools as another technique to address the oracle problem.
In its purest form, a decentralized oracle pool uses distributed networking and
computation nodes to validate the authenticity and accuracy of source data
before it is published on-chain.

Unfortunately, most current implementations do not go this far. Instead they
often receive data from a single, black box provider. They then use an oracle
pool to arrive at a consensus about the uniformity of that data and not
necessarily about its authenticity or accuracy.

**TLDR; a decentralized pool of oracle nodes is irrelevant if it is
bottlenecked by a single upstream provider.**
