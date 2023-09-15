---
id: Publication
sidebar_position: 5
slug: /publication
---

# Fact statement publication
<br/>
If Orcfax can vouch for the accuracy and authenticity of the data being queried,
(through the Collection, Normalization, and Calculation processes) then one of
the independent Orcfax nodes will be randomly delegated the responsibility for
submitting the unsigned transaction to the consumer. The consumer will then
publish the validated data on-chain as a reference input within their
transaction, granting them premium first-block access to that data.<br/>
<br/>
This random selection serves as another guard that enables Orcfax to ensure that
there isn't one trusted third party responsible for taking data publication
on-chain. And this is made possible by having each node technically equivalent
and capable of executing all processes leading up to and including the task of
publishing the data on-chain should the task be delegated to them.<br/>
<br/>
The data points published by the Orcfax oracle are rich in context and therefore
referred to as "fact statements" to reflect their semantic maturity as formally
structured declarations about real world events and entities.<br/>
<br/>
The Orcfax oracle nodes create a fact statement record that is formatted in
compliance with the Cardano Open Oracle Protocol. This includes markup in
JSON-LD linked data format, which is in compliance with the relevant schema.org
ontologies. Using this ubiquitous de-facto standard to express facts about the
real world greatly improves the discoverability and re-use value of data
published via the Orcfax network, including use in fact checking services,
search indexes, and machine-readable datasets for training machine learning
models.<br/>

The following is an example of an Orcfax $FACT statement with all provenance
information captured for future auditability.

```
{
  "@context": "https://schema.org",
  "type": "Claim",
  "description": "The price of 1 ADA at 2023-07-19 16:38:42.364056 is 0.31068563
  84666667 USD",
  "claimInterpreter": "Orcfax",
  "about": {
    "@type": "PropertyValue",
    "name": "ADA price in USD"
  },
  "value": 0.3106856384666667,
  "unitCode": "USD",
  "valueReference": [
    {
      "@type": "PropertyValue",
      "name": "validFrom",
      "value": 1689790926
    },
    {
      "@type": "PropertyValue",
      "name": "validThrough",
      "value": 1689791226
    }
  ],
  "appearance": [
    "message-ADA-USD-Wed-19-Jul-2023-16:38:41-GMT-kraken-collector-0.0.0-dev.jso
    n",
    "message-ADA-USD-Wed-19-Jul-2023-16:38:42-GMT-kucoin-collector-0.0.0-dev.jso
    n",
    "message-ADA-USD-Wed-19-Jul-2023-16:38:42-GMT-coinbase-collector-0.0.0-dev.j
    son"
  ],
  "isBasedOn": {
    "@type": "CreativeWork",
    "name": "validation-ADA-USD-Orcfax-2023-07-19-18:22:06.510809+00:00.json"
  },
  "creator": "Orcfax Validator Node: v0.0.0",
  "identifier": "9168fc06-5de0-4970-b77d-491821284514",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}
```

In the course of feed discovery, feed consumers will can querry the network for
a feed or specific fact sstatement; if that particular fact statement has
already been published in a previous transaction, an Orcfax node will reply with
the UTXO identifier that the Consumer can use for free as a CIP-31 Reference
Input in their script.<br/>
<br/>
Otherwise the Consumer will submit the applicable fee in $FACT tokens. This is
used to pay for the Cardano transaction fee and deposit. The Consumer will
receive a signed transaction from Orcfax that they will then Submit to the
Cardano network. The signed transaction contains the fact statement record in
the transaction Datum as well as an exclusive security token to prove it came
from an Orcfax authorized Publisher.<br/>
<br/>
The Consumer can reference this signed transaction and the fact statement in the
Datum within their own script and submit both transactions together in the same
block. This gives the fact statement user access to this data on-chain one block
before anyone else can read it as a published Reference Input. This creates a
possible business advantage and incentive to be the first to pay for a new fact
statement.<br/>
<br/>
Orcfax has arranged for a number of sponsored data feeds where funds are
held in escrow to pay the fee for the regular publication of a given fact
statement type, making this data available as a free CIP-31 Reference Input to
on-chain smart contracts and scripts; in the future, this arrangement could be
imitated and could benefit a group of consumers that have shared interest in
maintaining the publication of a given feed. the parties would agree to
maintain a wallet where funds would be held in escrow to guarantee that a feed
was kept active.<br/>

An exacmple $FACT datum derived from the Orcfax ADA/USD price feed

```
{
  "@context": "https://schema.org/",
  "type": "PropertyValue",
  "name": "ADA/USD",
  "value": 0.3172074226666667,
  "valueReference": [
    {
      "@type": "PropertyValue",
      "name": "validFrom",
      "value": 1689963052
    },
    {
      "@type": "PropertyValue",
      "name": "validThrough",
      "value": 1689963352
    }
  ],
  "identifier": {
    "type": "PropertyValue",
    "PropertyID": "Arkly Identifier",
    "value": "orcfax:036b901d-b25b-400d-bd44-674af4ed96cf"
  },
  "_:SecurityToken": "32R43243223432432"
}
```
