---
id: Reference
sidebar_position: 7
slug: /reference
---

# Fact statement reference
If a particular fact statement has already been published in a previous
transaction, an Orcfax node will reply with the UTXO identifier that the
Consumer can use for free as a CIP-31 Reference Input in their script.<br/>
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
