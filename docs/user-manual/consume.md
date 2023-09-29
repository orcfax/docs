---
id: consume
sidebar_position: 1
slug: /consume
---

# Consume fact statements

A fact statement is a datum that the Orcfax network publishes to a Cardano
blockchain transaction. This data point becomes an input to Cardano smart contracts and dApps.

Cardano serializes its transaction data to the very concise CBOR format. Your smart contract will want to find the right CBOR tag...or, you can just
run a PyCardano script that reads the on-chain CBOR datum and returns human and machine-readable JSON as prettified output.

We've created a PyCardano demo script for you to try out and hopefully strike up ideas of how you might use decentralized, validated oracle feeds in your Cardano dApps and smart contracts.


The open-source code in [this repo](https://github.com/orcfax/datum-demo)
contains a demonstration Python script read_datum.py that will read an
on-chain Orcfax Datum using PyCardano. It's made available freely for re-use under an Apache 2.0 FOSS license.

This example reads an on-chain Datum via our PreProd Testnet Ogmios server. It converts the Cardano transaction's CBOR serialization to human and machine-readable JSON and then logs various details about the Datum as it goes.

PyCardano makes it easy to tweak the configuration in read_datum.py to experiment with your own outputs and give you ideas on how to incorporate our decentralized oracle price feed data in your own dApps. When you're ready, you can point it at your own Mainnet Ogmios server.
