---
id: consume
sidebar_position: 1
slug: /consume
---

# Consume fact statements

## Important Notice

This page is being updated to reflect the upcoming changes in the Orcfax v1
solution. Once this upgrade has been released, instructions on how to consume
the enhanced datum will be made available here.

Historical data concerning the v0 Orcfax solution, including policy ID's, will
be made available for review in a forthcoming _Archived_ section.

## Fact statements

A fact statement is a datum that the Orcfax network publishes to a Cardano
blockchain transaction. This datum can then be used as an input to Cardano smart
contracts and dApps.

## UTxO model

A single fact statement is associated with a single [UTxO][utxo-1]. Each UTxO
has a [reference input][reference-1] encoded as an [inline datum][datum-1].

Reference inputs are published using a COOP authentication token with a COOP
minting policy identifier, currently:


[utxo-1]: https://docs.cardano.org/learn/eutxo-explainer/
[reference-1]: https://docs.cardano.org/cardano-testnet/about/feature-overview/#referenceinputs(cip-31)
[datum-1]: https://docs.cardano.org/cardano-testnet/about/feature-overview/#inlinedatums(cip-32)
