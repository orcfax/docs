---
id: verify
sidebar_position: 2
slug: /verify
---

# Verify fact statements

Orcfax publishes very concise fact statement datum or snippets to the Cardano
blockchain.

Each of these have an inextricable identifier that links back out to
an audit log package on the decentralized [Arweave](https://arweave.org) storage
network. This package contains provenance and contextual information about
how the fact statement datum was collected, validated, and published.

This allows users to **trust but verify** any dApp or smart contract that uses
Orcfax data inputs. Depending on which side of the Web3 coin you are looking at,
this makes Orcfax a very **trustworthy** **trustless** data provider.

The Orcfax project provides a convenient [Explorer](https://explorer.orcfax.io)
to search all the audit packages for its published Mainnet datum. They are
marked up as [Schema.org](https://schema.org/Claim)
[JSON-LD](https://json-ld.org/) for machine-readable re-use and
[IETF Bagit](https://datatracker.ietf.org/doc/html/rfc8493) for digital
repository interoperability.

![Orcfax Explorer sample](/img/orcfax-explorer-sample.png)

Click on a fact statement card in the Explorer to see the detailed summary
for that fact statement. The Archive Explorer widget loads the archival
package from the Arweave network (via [Arkly.io](http://arkly.io/about/)) and
provides a viewer for all the audit log files.

These include the original HTTP responses from the Kraken, Kucoin, and
Coinbase APIs that the Orcfax validator nodes all queried in unison for live
ADA/USD order book data.
