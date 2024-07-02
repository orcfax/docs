---
id: consume
sidebar_position: 1
slug: /consume
---

# Consume Fact Statements

<!-- per Dom's criticism re appropriate titles
I have used the v1 datum doc content to replace what previously existed on this
"consume" page. Should we change this to something else? eg "Integration"? -->

This page describes the v1 updated datum object that will be published on-chain
by Orcfax oracle feeds and how integrators can expect to utilize it. The content
of this page has been drafted for use by early integrators of Orcfax v1 as it
describes basic integration practices and our recommendations for effective
use.

It is important to note that Orcfax is still actively developing v1 ahead of its
mainnet release, and early integrators are invited to share feedback regarding
their experiences with integration; because of this, Orcfax reserves the ability
to change the content of this page as development progresses; more about this in
[Feed versioning](#feed-versioning).

If you are interested in integrating, please reach out to our team.

Historical data concerning the v0 Orcfax solution can be found in
[Archived resources](archived-resources) and information pertaining to policy
ID's in [Policies](policies#v0).

## Rational

Orcfax is a Cardano native oracle platform that first launched its price feeds
on Cardano Mainnet in Q2 of 2023 using v0 of the Orcfax oracle protocol
(previously called COOP).

Orcfax received valuable internal and external project feedback on the structure
of the v0 ADA-USD price feed datum. We have used this analysis to introduce an
upgraded v1 on-chain datum and transaction metadata (txMetadata) design that is
easier for integrators to parse, cheaper to publish than the previous v0 model,
and represents a major upgrade to the protocol’s trust model.

Orcfax is now preparing to launch v1 of the Orcfax oracle network in Q3 2024.

The improved efficiency and market value introduced by v1 is achieved by
leveraging an upgraded v1 on-chain datum and enhanced transaction metadata
sidecar records. The fact statement data that is published on-chain is then
archived along with audit log files that trace the flow of data collection,
calculation, and validation for a given datum.

## Feed versioning

This v1 upgrade is not compatible with our v0 datum. However, v1 is designed to
be forward compatible in the event of future datum structure upgrades. To be
clear, we expect datum structure upgrades to be rare events going forward as we
understand that any change in on-chain structure has an immediate downstream
effect on dApps consuming our Orcfax oracle datum.

The new format is designed to allow for flexibility and upgrades, while
simultaneously alleviating the burden of the integrator, by utilizing a simple
but clever technique for on-chain code to verify it is using the most current
version of the feed.

Again, that will only be needed in the event of feed configuration changes. To
reiterate, these future changes *will* be backwards-compatible with our v1
feeds.

Any upgrades will be announced online well in advance.

## Orcfax Protocol v1 overview

Orcfax publishes data on-chain via datums. These are available to consumers via
the script context reference inputs. The protocol responsible for publishing the
data on-chain is Orcfax-publish.

Orcfax-publish consists of three plutus scripts:

1. FactStatement (FS)
1. FactStatementPointer (FSP)
1. Constitution (C)

The FS is the main script of the protocol, which is invoked in both mint and
spend actions. The other two scripts, C and FSP, are auxiliary and are also
invoked in both mint and spend actions.

Both the FS and the FSP are relevant to integrators, but C is not; for this
reason, C will not be further discussed here.

### Fact Statement (FS)

The data published by Orcfax which is relevant to a consumer is referred to as a
Fact Statement (FS). An FS is a component of the datum, but it is not all of
what is contained within the datum.

A legitimate FS will be found on a UTXO containing an FS-token; This token will
have a policy ID equal to the FS script hash.

Each of these UTXO is garbage-collected after a period of time, which may vary
depending on the needs of the integrator(s) and/or the feed type.

```text
NB
Although these UTXOs will be found at the FS script address, relying on the FS
script address alone is not sufficient for discerning the legitimacy of an FS.
Integrators must rely on the presence of the FS-token.
```

#### UTxO model

<!-- Hang over from previous content. Still useful to leave? -->

A single Fact Statement is associated with a single [UTxO][utxo-1]. Each UTxO
has a [reference input][reference-1] encoded as an [inline datum][datum-1].

Reference inputs are published using the Orcfax Protocol.

[utxo-1]: https://docs.cardano.org/learn/eutxo-explainer/
[reference-1]: https://docs.cardano.org/about-cardano/evolution/upgrades/vasil/#reference-inputs-cip-31
[datum-1]: https://docs.cardano.org/about-cardano/evolution/upgrades/vasil/#inline-datums-cip-32

### FactStatementPointer (FSP)

Because development is ongoing, integrators should anticipate changes to the FS
script, and thereby the policy ID; however, Orcfax is cognizant of the burden
this could place on integrators and so an on-chain “pointer”, called the
FactStatementPointer (FSP), has been implemented to aid integrators in
identifying the correct FS script.

The FSP is a UTXO locked at a script address which contains an NFT and the
FSP-script-token. The datum is the hash of the current valid FS script.

When Orcfax updates the FS script, the FSP script token will be spent and output
again at the FSP address in a UTXO with a datum matching the new FS script hash.

### Tokens

Two additional tokens are important to note.
* `FS-token` name is an empty bytearray
* `FSP-token` name is an empty bytearray

<!-- have I marked those up correctly? It isnt 'FSP-token name` right? -->

## How to integrate

The following will contain the information necessary for utilizing our testnet
protocol on Preview. As mentioned previously, the Preview policy is not yet
static.

```text
NB
We assume that integrators have established which Orcfax feeds are relevant to
their use-case, so we will not discuss the process of selecting those feeds
here. Each Orcfax feed has a Feed ID, which an integrator will need to reference
on-chain; more on this in [Feed ID](#feed-id).
```

The current Preview Policy ID, as well as the FSP, can be found in
[Policies](policies#v1-preview).

To integrate an orcfax statement safely in a plutus script, the script must
perform the following steps:

1. Find the reference input containing the `FSP-script-token`.
1. Extract the inline datum and parse as a bytearray.
    * The value is the FS script hash, which determines the `FS-token`
1. From reference inputs, find the input(s) containing an `FS-token`.
    * These are the FS inputs
1. For each FS input, extract the inline datum and parse.
    * The datum will be of type `FsDat<t>` (described below).
1. Extract the statement from the datum.
1. Verify that the statement’s `feed_id` is the one required for the
integration.
1. Verify that the statement’s `created_at` timestamp is within the timeframe
established by your specific business rules.

The application can now proceed with using the statement’s body.

### Datum data type

The v1 datum can be described and deserialized as an Aiken [type][aiken-1] as
follows:

<!-- This repo is not yet public -->

```
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

pub type Price {
  num: Int,
  denom: Int,
}
```

Below is a pseudo-code example of a datum belonging to the FACT-ADA price-feed.

```
[
   [
      "cer/FACT-ADA/3",// the Feed ID & version
      1718302067923, // created_at
      {
        33173, // numerator
        1000000 // denominator
      }
   ],
   [
       // dApp specific context...
   ]
]
```

And its representation in CBOR:

```
d8799fd8799f4d63702f464143542d4144412f331b0000019012c8ccd3d8799f1981951a000f4240ffffd8799f1b0000019012c90f89581c694f647f6c6fee725eaf731938613059ac560e573d9fa6560850eab0ffff
```
[aiken-1]: https://github.com/orcfax/orcfax-types-aiken/blob/5cf8912d0fec118f3679e7bfb26bea7e889b0807/lib/orcfax/types.ak

### Feed ID

An Orcfax Feed ID is unique and communicates to which feed the statement body
refers. The Orcfax Feed ID is split into two primary components, which include
some human-friendly semantic information to aid in cross referencing with tools
such as the [Orcfax explorer][explorer-1] (eg `<feed_type>/<feed_name>`).

A third component, which Orcfax reserves the ability to include in the Feed ID,
is the version, which will be concatenated to the end of the Feed ID
(eg `<feed_type>/<feed_name>/<feed_version>`).

This component is primarily designed for internal use, and we do not anticipate
it being information required by the consumer as the properties of the feed that
is consumed will remain the same-- unless otherwise communicated and the feed
version takes on greater importance.

For this reason, integrators need only consider the beginning of the bytearray
and check for the existence of `<feed_type>` and `<feed_name>`
(e.g.  `cer/ada-usd`).

Implementing the above will prevent dApps from needing to change their on-chain
smart contracts, even as versions progress, as the on-chain datum structure is
designed to be permanent and stable.

[explorer-1]: https://explorer.orcfax.io/

### Created_at

The `created_at` field is a posix timestamp (in milliseconds) as used in plutus,
and describes the freshness of the on-chain data (e.g. `1718026202337`
represents Mon Jun 10 2024 13:30:02 UTC).

```text
Important Note
Integrators must provide circuit breaker functions within their solutions
for datum that are invalid according to their own business rules and risk
exposure (e.g. < 1 hour since publication).
```

### Datum disclaimer

The transaction metadata includes a standard “use at your own risk” disclaimer
and a link to terms of service for consumers of this data.
