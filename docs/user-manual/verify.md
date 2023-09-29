---
id: verify
sidebar_position: 2
slug: /verify
---

# Verify fact statements

The on-chain datum that the Orcfax oracle publishes contain identifiers that resolve to audit log packages on the decentralized Arweave.org network. Orcfax publishes very concise fact statement datum or snippets to the Cardano blockchain. Each of these have an inextricable identifier link back out to the audit log package that provides provenance and contextual information about how the fact statement datum was collected, validated, and published.

Every published Orcfax fact statement (starting with our ADA/USD-USD/ADA feed) is archived to the decentralized **[Arweave](https://arweave.org)** storage network via our **[Arkly.io](http://arkly.io/about/)** Web3 archiving service. These standards-compliant packages provide context about the provenance, collection and validation of the Orcfax fact statements to ensure their authenticity and accuracy.

The Orcfax project provides a convenient
**[Explorer](https://explorer.orcfax.io)** to search all the audit packages
for its published Mainnet datum. They are marked up as Schema.org JSON-LD for
machine-readable re-use.

![Orcfax Explorer sample](/img/orcfax-explorer-sample.png)

Click on a fact statement card in the Explorer to see the detailed summary
for that fact statement. The Archive Explorer widget loads the archival
package from the Arweave network (via Arkly.io) and provides a viewer for all the audit log files.

These include the original HTTP responses from the Kraken, Kucoin, and
Coinbase APIs that the Orcfax validator nodes all queried in unison for live
ADA/USD order book data.
