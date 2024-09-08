---
id: orcfax deployments
sidebar_position: 3
slug: /deployments
---

# Protocol deployments

Signposting current and historical deployments of the Orcfax protocol. The
hashes can be used to navigate Orcfax fact-statements and archival packages
on Cardano and Arweave blockchains.

This document serves as a reference for historical access to Orcfax data.
Integrators should consult the [integrator docs][consume] for an explanation
an the role of different scripts used in the protocol and how to correctly use
the Orcfax protocol.

## V1

Orcfax V1 introduces the FSP (fact statement pointer) script. The FSP will not
change in the lifetime of a deployment. The FSP is used to record the current
FS (fact statement) script hash. The FSP, FS, and C (constitution) script
hashes are documented below for each V1 deployment.

### V1: Mainnet

A summary of mainnet deployments is listed below.

| Status | TYPE | FSP | FS | Arweave Hash |
|--------|------|---- |----|--------------|
| TBD | CER | `TBD` | `TBD` | TBD |

#### Mainnet detailed overview

A per-FSP breakdown is documented below.

|                  | Details |
|------------------|---------|
| FSP              | -       |
| Arweave Hash     | -       |
| First appearance | -       |
| Slot no.         | -       |
| Block            | -       |
| Last appearance  | -       |
| Slot no.         | -       |
| Block            | -       |

### V1: Preview

A summary of preview deployments is listed below.

| Status | TYPE | FSP | FS | C | Arweave Hash |
|--------|------|---- |----|---|--------------|
| Active | CER | `0690081bc113f74e04640ea78a87d88abbd2f18831c44c4064524230` | `572f979076428566452f5c22bc98f58d49f237d4f53b86d37b147244` | `3a81e444b7b88e41d421551d056ce1e7701948236251019d6fdce656` | [6KymaAPWd3JNyMT0B7EPYij4TWxehhMrzRD8qifCSLs][arweave-preview] |

<br/>

#### Preview detailed overview

A per-FSP breakdown is documented below.

|                  | Details |
|------------------|---------|
| FSP              | `0690081bc113f74e04640ea78a87d88abbd2f18831c44c4064524230` |
| Arweave Hash     | [6KymaAPWd3JNyMT0B7EPYij4TWxehhMrzRD8qifCSLs][arweave-preview] |
| First appearance | 26.6.2024     |
| Slot no.         | 52,764,149     |
| Block            | `68bcc600c3c3fef8672a1a96e16a813dd02cd33f6b1eb1c8e464b4b0469dc752`     |
| Last appearance  | -     |
| Slot no.         | -     |
| Block            | -     |

<br/>

## V0

Orcfax V0 used a series of scripts built in collaboration with MLabs, the
protocol itself was called the Cardano Open Oracle Protocol (COOP). For more
information on the scripts used please consult the MLabs [source][coop].

V0 used a legacy datum format, see [archived resources][archive-1] for how
to interpret the data published on-chain using this version.

For brevity, only the primary script hash used for publication using COOP is
listed below.

### V0: Mainnet

|                  | Details |
|------------------|---------|
| Primary Script Hash | [`2cccc05192920ff1eb02bcfa7bb2a1fc5352ce58391d7ba3c66a555b`][cexplorer-primary-script] |
| Arweave Hash     | [Our6d4__QbpvIWDz2GTbnKdyunVcrLSA2OfFxJpXdzQ][arweave-mainnet-v0]|
| First appearance | 28.9.2023 |
| Slot no.         | 104,327,334 |
| Block            | `81394cd019daf9d2575b04d902735cbfe5d8b14e33242f6810664b911fe81798` |
| Last appearance  | 15.05.2024 |
| Slot no.         | 124,222,696 |
| Block            | `6212e3e9ac6d969eb6d0d63a865b97c38df8f1ef8220d2340aaa91df25879247` |

<!-- references -->

[archive-1]: archived-resources#in-use
[consume]: ./consume.md
[coop]: https://github.com/mlabs-haskell/cardano-open-oracle-protocol
[arweave-preview]: https://arscan.io/address/6KymaAPWd3JNyMT0B7EPYij4TWxehhMrzRD8qifCSLs
[arweave-mainnet-v0]: https://arscan.io/address/Our6d4__QbpvIWDz2GTbnKdyunVcrLSA2OfFxJpXdzQ
[cexplorer-primary-script]: https://cexplorer.io/policy/2cccc05192920ff1eb02bcfa7bb2a1fc5352ce58391d7ba3c66a555b
