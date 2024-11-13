---
id: archived docs
sidebar_position: 4
slug: /archived-docs
---

# Archived docs

This section contains instructions, and commentary relating to Orcfax solution
versions and/or components **which are no longer in operation**. This
information has been left as an educational resource and as a testament to the
development journey of the Orcfax oracle solution.

## v0

The v0 solution offered by Orcfax on Cardano mainnet was released in 2023 and
utilized the Cardano Open Oracle Protocol ([COOP][coop-1]) to format and publish
information on-chain. The protocol constituted a set of technical guidelines
that specified a process, and format, for the publication and consumption of
off-chain data by smart contracts on the Cardano blockchain.

The Orcfax team developed the Cardano Open Oracle Protocol as a Catalyst funded
research project that aimed to maximize the [eUTXO][utxo-1] model and leveraged
design principles, [CIP-31][cip-31], and [CIP-32][cip-32] to prioritize a
cost-sensitive, post-Vasil native method for publishing secure, signed, datums
on-chain for reference input consumption by Cardano dApps.

The initial version of COOP was developed in collaboration with [MLabs][mlabs-1]
consultancy. The guidelines and specification in COOP are free, open-source, and
can be implemented by any other project seeking to develop their own Cardano
oracle feeds.

Shortly after this version was released, IOG discontinued support for both the
Plutus Application Backend (PAB) and Plutus-Chain-Index. Both were critical
components in the COOP v0 stack. Aware of the discontinued support, the Orcfax
team partnered with technical consultants through MLabs to replace the
components. Unfortunately, the plutus-chain-index component failed before a
replacement could be rolled-out.

And so v0 was suspended in May of 2024.

More information pertaining to this failure can be found in both the [public
announcement][medium-1] and in the subsequent incident [report][incident-35].

Users and developers may find it informative to review the entire v0
[Incidents][incidentRepo-1] repository as it contains many critical learnings
from the implementation of v0.

[coop-1]: https://github.com/mlabs-haskell/cardano-open-oracle-protocol/
[utxo-1]: https://docs.cardano.org/learn/eutxo-explainer/
[cip-31]:
    https://docs.cardano.org/about-cardano/evolution/upgrades/vasil/#reference-inputs-cip-31
[cip-32]:
    https://docs.cardano.org/about-cardano/evolution/upgrades/vasil/#inline-datums-cip-32
[mlabs-1]: https://mlabs.city/
[medium-1]:
    https://medium.com/@orcfax/orcfax-feed-suspension-and-protocol-upgrade-a45709dafb56
[incident-35]: https://github.com/orcfax/Incidents/issues/38
[incidentRepo-1]: https://github.com/orcfax/Incidents

### Policy details

Links and information pertaining to policy IDs and smart contract addresses can
be found in [Protocol Deployments](deployments#v0).

### In use

Minting policy identifiers were critical as Fact Statements were to be verified
as having come from a known source. These identifiers also provided the ability
to filter all of the UTXO at a given smart contract address and to filter out
those sent by others to the same address.

Users were required to use the following information to identify the latest
Facts published.

-   Minting policy ID.
-   Datum format, including:
    -   Most recent (`ValueReference -> PropertyValue[1] -> value)`, i.e. the
        largest POSIX timestamp compared to other Fact Statement datum,
    -   Feed name, e.g. "ADA-USD".

> Note: Users on preprod will find a volume of test data that was not ever
> retired as Orcfax previously used this space as a testing sandbox.

In this model, unconsumed reference inputs were those still available for smart
contracts to use on-chain. Spending a UTXO with a reference input would render
it unusable in a smart contract (though the data was still visible in the
historical transaction). This process of consuming reference inputs was referred
to as _garbage collection_ or the _retiring_ of Fact Statements.

During v0, Orcfax had a mainnet policy stipulating that two unspent Fact UTXO
should remain on-chain at all times in order to provide users with continuous
datum coverage.

> Note: maintaining at least two datum on-chain gave smart contracts (and their
> developers) access to the most current datum, and the datum before that, for
> inspection. The POSIX timestamps denoting a valid-from and valid-through
> period could be inspected to ensure that they were still within a valid
> window.

For more information about the use of reference inputs and the inline datum
utilized in COOP v0, see the relevant COOP [design document][coop-design-1].

[coop-design-1]:
    https://github.com/mlabs-haskell/cardano-open-oracle-protocol/blob/9e9c9aedba84d32e424b1dd116b4734e1a42f3bc/coop-docs/00-design.md#cardano-features-enabling-oracles

### v0 datum structure

All Fact Statements were structured as [JSON-LD][json-1] objects before being
serialized into the Concise Binary Object Representation ([CBOR][cbor-1] used in
Cardano transactions.

![Fact Statement](/img/2023-09-30--Orcfax--fact-statement.jpg)

[json-1]: https://json-ld.org/
[cbor-1]: https://cbor.io/

#### v0 JSON-LD schema

The Orcfax v0 datum was translated to on-chain CBOR from the following JSON
schema (example given is from Sep 28, 2023):

```json
{
    "@context": "https://schema.org",
    "type": "PropertyValue",
    "name": "ADA-USD|USD-ADA",
    "value": [0.249495, 4.008096354636367],
    "valueReference": [
        {
            "@type": "PropertyValue",
            "name": "validFrom",
            "value": 1695939870811
        },
        {
            "@type": "PropertyValue",
            "name": "validThrough",
            "value": 1695943470811
        }
    ],
    "identifier": {
        "propertyID": "Arkly Identifier",
        "type": "PropertyValue",
        "value": "urn:orcfax:4ae10640-10b9-4c23-af1d-c4a9dbd8938d"
    },
    "_:contentSignature": "40330ff2597c399ddaaab6c1dbaab52173ef82bf7f08d3ca84585ab5e76429a0"
}
```

### Reading v0 datum on-chain

Orcfax Fact Statement datum were readable on-chain as Cardano [Reference
Inputs][ri-1].

To have read the `ADA-USD|USD-ADA` mainnet feed, users were encouraged to check
the latest transaction issued by the [feed smart contract][sc-1].

[ri-1]:
    https://github.com/perturbing/vasil-tests/blob/main/reference-inputs-cip-31.md
[sc-1]:
    https://cexplorer.io/address/addr1w8tcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgq7lqh2/tx#data

#### Where can I find the price data in the datum?

In this example we will use an off-chain datum. We will use this [datum][dat-1],
within which the price data can be found in the following portion:

```"list": [
                            {
                                "fields": [
                                    {
                                        "int": 2540017902
                                    },
                                    {
                                        "int": 1.8446744073709552e+19
                                    }
                                ],
                                "constructor": 3
                            },
                            {
                                "fields": [
                                    {
                                        "int": 39369801260558197
                                    },
                                    {
                                        "int": 1.8446744073709552e+19
                                    }
                                ],
                                "constructor": 3
                            }
                        ]
```

The first `"fields"` (we'll call it f1) conveys ADA-USD, the second (f2) conveys
USD-ADA. Within each of these, the first int (we'll call it int1) represents a
price pair.

With this in mind, f1, int1 gives the ADA-USD price as an integer (2540017902),
and the second (f1, int2) gives the number of decimals as `longint`
(1.8446744073709552e+19).

The same is true for f2, int1 which gives the price pair for USD-ADA as an
integer; with f2, int2 giving the number of decimals.

Using Python, you can find out the price by executing the following:

```from ctypes import c_longlong
price = p1 * pow(10, c_longlong(p2).value)
```

With the following results:

![Off-chain Datum](/img/2023-10-03--off-chain-datum-walkthrough.png)

[dat-1]:
    https://preprod.cexplorer.io/datum/9ced750ebbb2c9a9eac2e07a91525cadd3bfab23950089faa3e3a55517d1033f

### Reading v0 datum off-chain

The [PyCardano][pycardano-1] SDK provided convenient helper functions for
converting on-chain CBOR.

The Orcfax team created an open-source PyCardano [demo script][demo-1] to assist
users in reading and parsing the on-chain Orcfax datum.

This script converted the Cardano transaction's CBOR serialization to human and
machine-readable JSON while simultaneously logging various details about the
Datum as it went.

It's very easy to customize the configuration options of this script to match
the requirements of another dApp.

This resource was made freely available under an open-source Apache v2.0 license
so that users could test, integrate, and extend their own solutions by
integrating Orcfax Fact Statement feeds.

<!-- markdownlint-disable MD013 -->

_demo script output:_

```text
2023-09-28T16:24:13Z INFO :: read_datum.py:264:read_datum() :: entering this script...
2023-09-28T16:24:13Z INFO :: read_datum.py:265:read_datum() :: oracle smart contract: addr_test1wrtcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgmktuc0
2023-09-28T16:24:15Z INFO :: read_datum.py:226:get_latest_utxo() :: inspecting '862' UTxOs
2023-09-28T16:24:15Z WARNING :: read_datum.py:254:get_latest_utxo() :: '7.00' hours since datum was published (1695943470811)
2023-09-28T16:24:15Z INFO :: read_datum.py:191:validate_utxo() :: inspecting the utxo for valid auth tokens
2023-09-28T16:24:15Z INFO :: read_datum.py:217:validate_utxo() :: the utxo is valid, it contains the correct auth token
2023-09-28T16:24:15Z INFO :: read_datum.py:79:display_utxo() :: (input) transaction id: 078d548b0ed91b95164d0baaf2b486161e06aab84483d99ed01a2180090ab0f3
2023-09-28T16:24:15Z INFO :: read_datum.py:80:display_utxo() :: (output) transaction addr: addr_test1wrtcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgmktuc0
2023-09-28T16:24:15Z INFO :: read_datum.py:81:display_utxo() :: (output) datum cbor:

590207d8799fa74840636f6e746578745268747470733a2f2f736368656d612e6f7267525f3a636f6e74656e745369676e61747572655840343033333066663235393763333939646461616162366331646261616235323137336566383262663766303864336361383435383561623565373634323961304a6964656e746966696572a34a70726f706572747949445041726b6c79204964656e74696669657244747970654d50726f706572747956616c75654576616c7565582f75726e3a6f72636661783a34616531303634302d313062392d346332332d616631642d633461396462643839333864446e616d654f4144412d5553447c5553442d41444144747970654d50726f706572747956616c75654576616c75659fd87c9f1a0003ce971bfffffffffffffffaffd87c9f1b000e3d57a771924e1bfffffffffffffff1ffff4e76616c75655265666572656e63659fa34540747970654d50726f706572747956616c7565446e616d654976616c696446726f6d4576616c75651b0000018adde4c05ba34540747970654d50726f706572747956616c7565446e616d654c76616c69645468726f7567684576616c75651b0000018ade1baedbff5820303443413030303148424559394b4b34343950314345513850483744544a5954d87a9f1b0000018ade1baedbff581c90b121aa6b689200adf7ed115040a96375d2b68e23633d6864c53a91ff

2023-09-28T16:24:15Z INFO :: read_datum.py:84:display_utxo() :: (output) Tx cost: 3.42214 ADA
2023-09-28T16:24:15Z INFO :: read_datum.py:151:decode_utxo() ::

{
  "@context": "https://schema.org",
  "type": "PropertyValue",
  "name": "ADA-USD|USD-ADA",
  "value": [
    0.249495,
    4.008096354636367
  ],
  "valueReference": [
    {
      "@type": "PropertyValue",
      "name": "validFrom",
      "value": 1695939870811
    },
    {
      "@type": "PropertyValue",
      "name": "validThrough",
      "value": 1695943470811
    }
  ],
  "identifier": {
    "propertyID": "Arkly Identifier",
    "type": "PropertyValue",
    "value": "urn:orcfax:4ae10640-10b9-4c23-af1d-c4a9dbd8938d"
  },
  "_:contentSignature": "40330ff2597c399ddaaab6c1dbaab52173ef82bf7f08d3ca84585ab5e76429a0"
}

2023-09-28T16:24:15Z INFO :: read_datum.py:152:decode_utxo() :: oracle datum identifier (internal): b'04CA0001HBEY9KK449P1CEQ8PH7DTJYT'
2023-09-28T16:24:15Z INFO :: read_datum.py:157:decode_utxo() :: oracle datum timestamp: 2023-09-28T23:24:30Z (1695943470811)
2023-09-28T16:24:15Z INFO :: read_datum.py:170:pretty_log_value() :: ADA-USD: 0.249495
2023-09-28T16:24:15Z INFO :: read_datum.py:170:pretty_log_value() :: USD-ADA: 4.008096354636367
```

<!-- markdownlint-restore -->

[pycardano-1]: https://pycardano.readthedocs.io/
[demo-1]: https://github.com/orcfax/datum-demo/tree/main#readme
