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

Historical data concerning the v0 Orcfax solution can be found in
[Archived resources](archived-resources) and information pertaining to policy
ID's in [Policies](policies).

## Fact statements

A fact statement is a datum that the Orcfax network publishes to a Cardano
blockchain transaction. This datum can then be used as an input to Cardano smart
contracts and dApps.

## UTxO model

A single fact statement is associated with a single [UTxO][utxo-1]. Each UTxO
has a [reference input][reference-1] encoded as an [inline datum][datum-1].

Reference inputs are published using the Orcfax Protocol.

[utxo-1]: https://docs.cardano.org/learn/eutxo-explainer/
[reference-1]: https://docs.cardano.org/about-cardano/evolution/upgrades/vasil/#reference-inputs-cip-31
[datum-1]: https://docs.cardano.org/about-cardano/evolution/upgrades/vasil/#inline-datums-cip-32
