---
id: eUTXO native
sidebar_position: 2
slug: /eUTXO
---

The Cardano open oracle protocol (COOP) was designed to take advantage of the
[Cardano CIP-31](https://cips.cardano.org/cips/cip31/) reference inputs
enhancements introduced in the Vasil hard fork.

Reference inputs allow a data provider to publish a data point once and multiple
consumers to use the data point in on-chain dApp scripts, without interfering
with each other.

This enhancement allows a datum written to a single Cardano eUTXO to be read by multiple consumers without competing with each other for exclusive access to transaction output.

The main design goals for the Cardano Open Oracle Protocol (COOP) are to leverage CIP-31 to provide:

* Financial sustainability – minimize the cost and deposit needed to post, maintain,
and use COOP datum in eUTXOs, providing opportunities to share costs amongst
stakeholders.
* Data accessibility – minimize the probability of datum payloads not being available
for reference by downstream dApp scripts.
* Security – minimize the risk of exposure for the cryptographic keys used in
verifying the authenticity of COOP datums.
