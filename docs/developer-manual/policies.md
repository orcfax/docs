---
id: orcfax policies
sidebar_position: 3
slug: /policies
---

# Orcfax deployments

Signposting Orcfax deployments both historical and current.
The hashes can be used to navigate Orcfax on Cardano and Arweave blockchains
for statements and archival packages.

## V1

Components:

- FSP script
- FS script
- C script

The FSP script will not change in the lifetime of a deployment.
The FSP is used to record the current FS script hash.
To each FS script there is an associate C script hash.
See the [integrator docs][consume] for an explanation on the role of each script.

[consume]: ./consume.md

### V1:Mainnet

- FSP script hash: `TBD`

- FS script hash: `TBD`

- C script hash: `TBD`

### V1:Preview

#### V1.0

- Status: Live
- FSP script hash: `0690081bc113f74e04640ea78a87d88abbd2f18831c44c4064524230`
- Arweave hash: [6KymaAPWd3JNyMT0B7EPYij4TWxehhMrzRD8qifCSLs][arweave-preview]

[arweave-preview]: https://arscan.io/address/6KymaAPWd3JNyMT0B7EPYij4TWxehhMrzRD8qifCSLs

| FSP value | tx | date | slot |
|-----------|----|------|------|
| `900d528f3c1864a1376db1afc065c9b293a2235f39b00a67455a6724` | `e06133fc651dccdaedf8f9cb50e5a94fc5d38fd97a7cae9cc81016893dd86f8d` | 2024-06-26 | 52762252 |
| `572f979076428566452f5c22bc98f58d49f237d4f53b86d37b147244` | `ee977dc98ee45fd7284b769f0bc34403cd5bc6d9fea6826bc38fdfa8c3f148f8` | 2024-09-03 | 58704655 |

- FS script hash: `900d528f3c1864a1376db1afc065c9b293a2235f39b00a67455a6724`
- Associated C hash: `4cec7a2b04e8f70e3123305cdb0b3c7424cd3150165832307df3d514`

- FS script hash: `572f979076428566452f5c22bc98f58d49f237d4f53b86d37b147244`
- Associated C hash: `3a81e444b7b88e41d421551d056ce1e7701948236251019d6fdce656`

## V0

Components:

- Main script

V0 used a legacy datum format, see [archived resources][archive-1] for how
to interpret the data published on-chain using this version.

[archive-1]: archived-resources#in-use

### V0:Mainnet

- Main script hash: `2cccc05192920ff1eb02bcfa7bb2a1fc5352ce58391d7ba3c66a555b`
- Start: 2023-09-28
- End: 2024-05-15

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
