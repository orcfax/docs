---
id: consume
sidebar_position: 1
slug: /consume
---

# Consuming Orcfax Statements

This document aims to explain how dapp developers can integrate Orcfax feeds into their dapp
with all the gory (technical) details included.

## Overview

### Orcfax

Orcfax is a Cardano native oracle platform.

Orcfax is organized into feeds.
Generally a feed concerns a time series data, such as the exchange rate from ada to usd.
A feed is a data pipeline that specifies how data is sourced, processed, and the format of its outputs.
FIXME : See the orcfax explorer for more details on the feeds available and their definitions.

One part of the overall protocol is getting the data on-chain to be consumable by dapps and their end users.
The part of a feed's output that ends up on-chain is called a **statement**.
A statement is included in the datum of an input, and thus available to dapps via the reference input field.

### Orcfax-publish

The part of the overall protocol getting the data on-chain is called **Orcfax-publish**.
Orcfax-publish consists of three plutus scripts:

1. FactStatement (FS)
2. FactStatementPointer (FSP)
3. Constitution (C)

The FS script is the main script.
It can be employed in both Mint and Spend purpose.
It can mint only a single asset class we call FS token.
An FS token can only exist at the FS script address (staking credentials are irrelevant here).
The presence of an FS token in a UTXO verifies that the associated statement is legitimate.

Both the FSP and C scripts are simple updatable state scripts.
That is, they allow a UTXO at the script address to hold a validity token and a piece of state (in the datum).
When required, a twinned auth token is used to spend this UTXO and output another with the same validity token and a new state.

In the case of the FSP, the state is simply the FS script hash.
The FSP exists to allow Orcfax to update the FS script while allowing integrators to launch dapps
without having to role their own update mechanism.
Orcfax reserves the ability to be able to say, migrate to Plutus V3 without impacting integrators.
By first finding the FSP in the reference inputs of a script context,
a validator can recognise the correct FS script hash.

The C script represents the constitution.
It holds the current valid pubkey that is permitted to sign statements.
The FS script checks that every statement published has a valid signature with respect to this pubkey.
The constitution is not utilised by integrators, and plays no further part in this document.

## Details

### Steps

To integrate an orcfax statement safely in a plutus script, the script must perform the following steps:

1. Verify FSP UTXO from reference inputs.
Extract FS script hash from inline datum.
2. Verify FS UTXO. Extract the inline datum and parse as a bytearray.
        The value is the FS script hash, which determines the FS token
3. From reference inputs, find the input(s) containing an FS token.
        These are the FS inputs
4. For each FS input, extract the inline datum and parse.
        The datum will be of type `FsDat<t>` (described below).
5. Extract the statement from the datum.
6. Verify that the statement’s feed_id is the one required for the integration.
7. Verify that the statement’s created_at timestamp is within the timeframe established by your specific business rules.

### Verify FSP UTXO

The FSP script hash must first be ascertained from a given deployment.
(Example deployments are listed below.)
This will provide the policy ID part of an FSP asset class.

The FSP UTXO will contain the FSP script token.
The FSP script token has the following token name (expressed in base 16/ hex)
```
fsp_script=#"000de140"
```
This is derived from `cip-67` script NFT label.

### Extract FS script hash

All datums are inlined, including that of the FSP state.
The FSP datum is simply
```aiken
pub type FspDat = ByteArray
```
The value is the FS script hash.
When Orcfax upgrades the Orcfax-publish protocol, the value of the datum will be updated
to reflect the new FS script, while the FSP script will remain the same.

### Verify FS UTXOs

An FS UTXO must contain an FS token.
The FS token is the only asset class of the FS script, and has token name of the empty bytearray.

Note: Integrators must verify an FS UTXO via an FS token.
Any fool can put a UTXO at the FS script address with any data they like.

### Coercing FS data

An FS UTXO will have an inlined datum.
The datum datatype is a parameterized datatype and is expressed in aiken lang as follows

```aiken
pub type Datum<t> {
  statement : Statement<t>,
  context : Context
}

/// Used by consumers
pub type Statement<t> {
  feed_id : ByteArray,
  created_at : Int,
  body : t,
}

/// Used by orcfax validator
pub type Context {
  collect_after : Int, // Slot number
  collector : ByteArray, // Pkh
}
```

Note that only the statement part of the datum is relevant to integrators.
The `Context` part can be treated simply as `Data`.

### Verifying the feed ID

Integrators must verify the feed ID is as expected.

Integrators should establish the expected feed ID from Orcfax documentation on the feed definition.
The feed ID is a human readable label and decomposes as
```
<feed_type>/<feed_name>
```

Warning: Orcfax reserves the possibility to use a `versioned_feed_id` as the value in the statement.
A versioned feed ID has the following form:
```
<feed_type>/<feed_name>/<feed_version>
```
For this reason integrators must check that the `feed_id` value begins with the expected bytes,
rather than assume that there is equality.

### Verifying the created at

Generally a dapp will require knowing **when** a statement was deemed true.
For example, that the statement represents the ada USD exchange rate in the last hour, not simply at some previous point in time.

The "right" way to handle time is down to the business logic and its needs.

One way integrators might choose to this is as follows:

1. Verify that the validity range of the tx is 'short' (say ~1h).
2. Check that the value of `created_at` falls within the bounds of this validity range.

### Coercing the body

The datatype of the body can be found in the feed definition page.

For exchange rates the body is
```aiken
pub type Rational {
  num: Int,
  denom: Int,
}
```

## Notes

In the case that an integrator is expecting only one type of body within statements,
we can simplify the types.
For example, for exchange rates the types become

```aiken
type RationalStatement {
  feed_id : ByteArray,
  created_at: Int,
  body : Rational,
}

type RationalDatum {
  statement : RationalStatement,
  _context : Data
}
```

## Examples

Some example hex encoded cbor
```
D87982D879834E4345522F464143542D4144412F331B0000019012C8CCD3D879821981951A000F4240D879821B0000019012C90F89581C694F647F6C6FEE725EAF731938613059AC560E573D9FA6560850EAB0
```
Which looks something like
```
121([
  121([
    "CER/FACT-ADA/3",
    1718302067923,
    121([
      33173,
      1000000
    ])
    ]),
  121([
    1718302085001,
    h'694F647F6C6FEE725EAF731938613059AC560E573D9FA6560850EAB0'
  ])
])
```



## Deployments

network    | fsp hash | link
-----------+----------+------
preview    | e06133fc651dccdaedf8f9cb50e5a94fc5d38fd97a7cae9cc81016893dd86f8d | [cexplorer][prev]
preprod    | n/a
mainnet    | n/a

[prev] : https://preview.cexplorer.io/tx/e06133fc651dccdaedf8f9cb50e5a94fc5d38fd97a7cae9cc81016893dd86f8d
