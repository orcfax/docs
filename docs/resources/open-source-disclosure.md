---
id: open source disclosure
sidebar_position: 1
slug: /open-source-disclosure
---

# Open source disclosure

## Our open source ethos

<!-- This can be quite redundant given that users could navigate to our github
and search for public repos... we must find ways to add value by listing these
here -->
We are fully committed to the complete open sourcing of the Orcfax solution,
which will occur before giving control over to the Orcfax DAO.

Orcfax has championed this ambitious goal from the beginning because we believe
it is a huge part of both the Orcfax value proposition and our security
argument.

By open sourcing our stack, we enable developers to audit the code before
implementation.

By open sourcing our data pipelines, we enable the users of dApps, which consume
our feeds, to "Trust but Verify" the data underpinning their smart contracts.

We believe that the open source development of key infrastructural elements
within the Cardano environment is critical for eliminating trust and successful
decentralization. For this reason, Orcfax

## Disclosures

In order to meet our goal of being fully open source prior to the launch of the
Orcfax DAO, we will release components of the Orcfax stack incrementally as
development matures and stabilizes.

The following Orcfax components and projects have been open sourced:

<!-- markdownlint-disable MD013 -->

| Component | Description | License |
| :--- | :--- | :--- |
| [v0 COOP][coop-1] | Used to publish the first Orcfax mainnet feeds | Apache License 2.0 |
| [v0 Datum demo][datum-1] | Provides tooling for users to develop dapps which utilize the Orcfax v0 datum | Apache License 2.0 |
| [Orcfax branch of Chronicle Labs oracle suite][oracle-1] | Provides useful Cardano specific tooling for querying public APIs | GNU Affero General Public License v3.0 |

<!-- markdownlint-restore -->

Additionally, Orcfax will also open source peripheral developments which have
been needed for various business actions but are not core components of the
Orcfax oracle service.

It is our hope that while our team felt compelled to develop these tools, future
teams may not need to and can instead focus their resources towards their key
objectives.

<!-- markdownlint-disable MD013 -->

| Component | Description | License |
| :--- | :--- | :--- |
| [ISPO calculator][calc-1] | Used by Orcfax during the launch of its ISPO | Apache License 2.0 |
| [Calculator UI][calc-2] | The user interface for the ISPO calculator | Apache License 2.0 |
| NFT reservation tracker | The script used to track Validator License reservations | <!-- Type? --> |
| [License mint][nft-1] | The scripts used to create the Orcfax validator license NFTs | <!-- Type? --> |
| [License sale][nft-2] | The scripts used to facilitate both the sale of the Orcfax validator NFTs and their distribution to the purchasing wallets | <!-- Type? --> |

<!-- markdownlint-restore -->

### License descriptions

A set of links to open source licenses as described above.

* [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)
* [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.txt)

[coop-1]: https://github.com/orcfax/cardano-open-oracle-protocol
<!-- ^ still private -->
[datum-1]: https://github.com/orcfax/datum-demo
[oracle-1]: https://github.com/orcfax/oracle-suite
[calc-1]: https://github.com/orcfax/ispo-calculator
[calc-2]: https://github.com/orcfax/ispo-calculator-ui
[nft-1]: https://github.com/orcfax/licenses-minting
<!-- ^ still private -->
[nft-2]: https://github.com/orcfax/licenses-sell
<!-- ^ still private -->
