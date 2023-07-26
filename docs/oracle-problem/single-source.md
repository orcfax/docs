---
id: Single-source data
sidebar_position: 2
slug: /single-source
---

**TLDR; a decentralized pool of oracle nodes is irrelevant if it is just
validating single source data**

Most leading oracle platforms are beginning to implement some form of
decentralized oracle pools as another technique to address the oracle problem.
In its purest form, a decentralized oracle pool uses distributed networking and
computation nodes to achieve consensus on the authenticity and accuracy of
source data before it is published on-chain.

Unfortunately, most current implementations do not go this far. Instead they
often receive data from a single, black box provider. They then use an oracle
pool to arrive at a consensus about the *uniformity* of that data and not
necessarily about its *authenticity* or *accuracy*.

To address this shortfall found in many other oracle services, **Orcfax enforces
a strict source-data triangulation policy for all its oracle feeds *before* that
data is sent to the decenralized oracle pool for validation.**
