---
id: faq-4
sidebar_position: 4
slug: /technical-questions
---

# Technical questions

## What are the minimum technical requirements for node operations?

While we believe that accessibility plays a large role in decentralization, and
have made design choices which we hope allows a broader range of participation
within the network, it is still important to be aware of what will be required
technically from those who choose to participate.

information regarding technical requirements can be found [here](itn-overview#technical-requirements).

## Phase 1 is federated, what does that mean?

Phase 1 is only the first step in realizing Orcfax's decentralization vision,
while enabling the team to continue developing important components and gaining
invaluable knowledge for future phases. These incremental development
thresholds help to move Orcfax data up the "trustless" spectrum, even in this
initial federated phase.

While our team's goal for Orcfax is for it to become fully decentralized, phase
1 will use our federated node network so that we can continue critical R&D for
our Incentivized Test Net (ITN) and the decentralized model. Our team
uses the term "federated" because Orcfax uses 5 geographically dispersed
collector nodes; this model incorporates decentralized best practices such as
the node's geographical distribution in order to aid in regional consistency
and to prevent single sources of failure. Additionally, each of these
federated nodes queries a minimum of 3 different primary-source data providers
at the same time, which gives Orcfax a decentralized data collection mechanism.
All of this is auditable in our archival packages, which can be viewed through
the Orcfax [Explorer][explorer-1].

[explorer-1]: https://explorer.orcfax.io/

## Where can I find the price data in the datum?

The datum datatype is a datatype parameterised by the body. It is expressed in
aiken lang as follows:

```aiken
pub type Statement {
  feed_id : ByteArray,
  created_at : Int,
  body : t,
}
```

For feeds of type Current Exchange Rate (CER), the body is:

```aiken
pub type Rational {
  num: Int,
  denom: Int,
}
```

More complete documentation can be found in our docs
