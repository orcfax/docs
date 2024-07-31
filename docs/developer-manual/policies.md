---
id: orcfax policies
sidebar_position: 3
slug: /policies
---

# Orcfax policies

A list of Orcfax oracle policy IDs and permanent storage addresses to aid with
historical investigation and reconstruction of Orcfax fact-statements.

## Mainnet summary

A summary of current, and previous Orcfax policies on mainnet is shown below.

| Version | Network | FSP hash                                                           | Policy                                                             | Date Start | Date End |
| ------- | ------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ---------- | -------- |
| v1      | mainnet | `TBD` | `TBD` | TBD | TBD |
| v0      | mainnet | `Not implemented` | `2cccc05192920ff1eb02bcfa7bb2a1fc5352ce58391d7ba3c66a555b` | 28.09.2023 | 15.05.2024 |

## v1 Detailed policy information

### v1 Mainnet

<!-- Order should run chronologically in descending order, i.e. newest first -->

#### Policy: TBD

> NB. The v1 protocol is currently under development. While mainnet details are
unavailable, integrators can find details regarding Preprod and Preview below.

|                        | Details |
|------------------------|---------|
| Current                | ... |
| Network                | Mainnet |
| Arweave                | ... |
| Fact Statement Pointer | `...` |
| Policy ID              | `...` |
| First appearance       | ... |
| Slot no.               | ... |
| Block                  | `...` |

#### Preview policy ID: 900d528f3c1864a1376db1afc065c9b293a2235f39b00a67455a6724

[Explorer view][cexplorer-preview-policy].

|                        | Details |
|------------------------|---------|
| Current                | True |
| Network                | Preview |
| Arweave                | [6KymaAPWd3JNyMT0B7EPYij4TWxehhMrzRD8qifCSLs][arweave-preview]|
| Fact Statement Pointer | [`e06133fc651dccdaedf8f9cb50e5a94fc5d38fd97a7cae9cc81016893dd86f8d`][cexplorer-preview-fsp] |
| Policy ID              | [`900d528f3c1864a1376db1afc065c9b293a2235f39b00a67455a6724`][cexplorer-preview-policy] |
| First appearance       | 26.6.2024 |
| Slot no.               | 52,764,149 |
| Block                  | `68bcc600c3c3fef8672a1a96e16a813dd02cd33f6b1eb1c8e464b4b0469dc752` |

[arweave-preview]: https://arscan.io/address/6KymaAPWd3JNyMT0B7EPYij4TWxehhMrzRD8qifCSLs
[cexplorer-preview-fsp]: https://preview.cexplorer.io/policy/0690081bc113f74e04640ea78a87d88abbd2f18831c44c4064524230
[cexplorer-preview-policy]: https://preview.cexplorer.io/policy/900d528f3c1864a1376db1afc065c9b293a2235f39b00a67455a6724/mint#data

> NB. To the extent that preview testnet is static, integrators can make use of
the FactStatementPointer (FSP) as described in
[Consuming Orcfax Statements][consume]. However, because Orcfax v1 is currently
under active development, we reserve the ability to update the protocol’s
publishing logic and so preview's details may change and the details will be
updated here.

[consume]: ./consume.md

## Legacy policy information

### v0

> NB. v0 used a legacy datum format, see [archived resources][archive-1] for how
to interpret the data published on-chian using this version.

[archive-1]: archived-resources#in-use

<!-- Order should run chronologically in descending order, i.e. newest first -->

#### Mainnet policy ID: 900d528f3c1864a1376db1afc065c9b293a2235f39b00a67455a6724

[Explorer view][cexplorer-mainnet-v0-policy].

|                  | Details |
|------------------|---------|
| Current          | False |
| Arweave          | [Our6d4__QbpvIWDz2GTbnKdyunVcrLSA2OfFxJpXdzQ][arweave-mainnet-v0]|
| Smart Contract   | [addr1w8tcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgq7lqh2][cexplorer-mainnet-v0-sc]
| Policy ID        | [`2cccc05192920ff1eb02bcfa7bb2a1fc5352ce58391d7ba3c66a555b`][cexplorer-mainnet-v0-policy] |
| First appearance | 28.9.2023 |
| Slot no.         | 104,327,334 |
| Block            | `81394cd019daf9d2575b04d902735cbfe5d8b14e33242f6810664b911fe81798` |
| Last appearance  | 15.05.2024 |
| Slot no.         | 124,222,696 |
| Block            | `6212e3e9ac6d969eb6d0d63a865b97c38df8f1ef8220d2340aaa91df25879247` |

[arweave-mainnet-v0]: https://arscan.io/address/Our6d4__QbpvIWDz2GTbnKdyunVcrLSA2OfFxJpXdzQ
[cexplorer-mainnet-v0-sc]: https://cexplorer.io/address/addr1w8tcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgq7lqh2
[cexplorer-mainnet-v0-policy]: https://cexplorer.io/policy/2cccc05192920ff1eb02bcfa7bb2a1fc5352ce58391d7ba3c66a555b
