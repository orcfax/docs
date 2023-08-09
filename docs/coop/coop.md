---
id: coop
sidebar_position: 1
slug: /coop
---

# Cardano Open Oracle Protocol

The Orcfax oracle service uses Cardano Open Oracle Protocol (COOP) to publish
and format its data feeds.

COOP is a set of technical guidelines that specifies a process and format for
the publication and consumption of off-chain data by smart contracts on the
Cardano blockchain.

COOP is free and open-source and can be implemented by other projects to
architect their own Cardano oracle feeds.

## Objective
The primary goal of the COOP is to define a protocol for consuming authenticated
data that takes advantage of the
[CIP-31 Reference Input](https://cips.cardano.org/cips/cip31/) feature
introduced in the Cardano Vasil hard fork in 2022.

This enhancement allows a datum written to a single Cardano eUTXO to be read by
multiple consumers without competing with each other for exclusive access to
transaction output.

The main design goals for the Cardano Open Oracle Protocol (COOP) are to
leverage CIP-31 to provide:

* Financial sustainability – minimize the cost and deposit needed to post,
maintain, and use COOP datum in eUTXOs, providing opportunities to share costs
amongst stakeholders.
* Data accessibility – minimize the probability of datum payloads not being
available for reference by downstream dApp scripts.
* Security – minimize the risk of exposure for the cryptographic keys used in
verifying the authenticity of COOP datums.