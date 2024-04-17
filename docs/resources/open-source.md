---
id: open source
sidebar_position: 1
slug: /open-source
---

# Our open source ethos

<!-- This can be quite redundant given that users could navigate to our github
and search for public repos... we must find ways to add value by listing these
here -->
From the beginning, Orcfax has championed the critical importance of open source
software development and how successful decentralization relies on projects
contributing to the improvement of the ecosystem. Open source development also
mitigates the need for trust as users are enabled to audit the code before
implementing it or adding it to their stack.

Orcfax continues to be committed to our open source ideals and will release
components of its stack as development matures. This will result in incremental
releases.

The following Orcfax components have been open sourced

1. [Datum demo][datum-1] providing tooling which allows users to develop dapps
which can utilize the v1 Orcfax datum*.
1. The Orcfax branch of the Chronicle Labs [oracle suite][oracle-1] provides
useful Cardano specific tooling for querying public APIs.
1.

\* NB this demo will be replaced with the updated repo which corresponds to the
v2 Orcfax datum.

Additionally, Orcfax will also open source peripheral  developments which have
been needed for various business actions but are not core components of the
Orcfax oracle service.

It is our hope that while our team felt compelled to develop these tools, future
teams may not need to and can instead focus their resources towards their key
objectives.

<!-- Add links -->
<!-- And brief primers? -->
1. The [ISPO calculator][calc-1] used by Orcfax during its launch.
1. The calculator [UI][calc-2] used for the ISPO calculator.
<!-- 1. The validator NFT reservation tracker. Asked G about this -->
<!-- 1. The NFT [minting scripts][nft-1] used to create the Orcfax validator
license NFTs. still private -->
<!-- 1. [NFT selling][nft-2] scripts used to facilitate both the sale of the
Orcfax validator NFTs and their distribution to the purchasing wallets. still
private -->

[calc-1]: https://github.com/orcfax/ispo-calculator
[calc-2]: https://github.com/orcfax/ispo-calculator-ui
[datum-1]: https://github.com/orcfax/datum-demo
<!-- [nft-1]: https://github.com/orcfax/licenses-minting still private -->
<!-- [nft-2]: https://github.com/orcfax/licenses-sell still private -->
[oracle-1]: https://github.com/orcfax/oracle-suite
