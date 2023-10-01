---
id: consume
sidebar_position: 1
slug: /consume
---

# Consume fact statements
A fact statement is a datum that the Orcfax network publishes to a Cardano
blockchain transaction. This data point becomes an input to Cardano smart
contracts and dApps.

All fact statements are structured as [JSON-LD](https://json-ld.org/) files
before they are serialized into the Concise Binary Object Representation
([CBOR](https://cbor.io/)) that is used in Cardano transactions.

![Fact Statement](/img/2023-09-30--Orcfax--fact-statement.jpg)


## Read CBOR datum on-chain
Orcfax fact statement datum are readable on-chain as Cardano
[Reference Inputs](https://github.com/perturbing/vasil-tests/blob/main/reference-inputs-cip-31.md).

To read our `ADA-USD|USD-ADA` Mainnet feed, check the latest transaction
issued by the [feed smart contract](https://cexplorer.io/address/addr1w8tcecfy7np3sduzn99ffuv8qx2sa8v977l0xql8ca7lgkgq7lqh2/tx#data).

## Read CBOR datum off-chain
The [PyCardano](https://pycardano.readthedocs.io/) SDK provides convenient
helper functions for converting on-chain CBOR.

We created an open-source PyCardano
[demo script](https://github.com/orcfax/datum-demo/tree/main#readme) to read and
parse on-chain Orcfax datum.

This script converts the Cardano transaction's CBOR serialization to human and
machine-readable JSON and then logs various details about the Datum as it goes.

It's very easy to customize the configuration options of this script to match
the requirements of your own dApp.

It is made freely available under an open-source Apache v2.0 license so that
you can test, integrate, and extend your own solutions using the world's most
[trustworthy/trustless](verify) authenticated fact statement feeds, provided on
the world's most decentralized and stable L1 blockchain network.

*demo script output:*
```
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
