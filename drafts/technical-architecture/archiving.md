---
id: Archiving
sidebar_position: 6
slug: /archiving
---

# Fact statement archiving
<br/>
A major value add of the Orcfax system is its capture and archiving of the
entire workflow. From Collection, Normalization, Calculation, to Validation and
the publication event, the entire process generates audit logs that are all
bundled into an international standards compliant (ISO) archival package using
bag-it, which is then stored off chain in a decentralized storage network called
Arweave. The originally queried datum, the Fact Statement from which it is
pulled, the source data and the algorithms utilized for calculation, every step
will be transparently available for the Cardano community. The result of this is
that Orcfax will effectively create a secondary product from these processes,
which is the development of a giant data lake of all the data that has ever been
successfully processed by the Orcfax Oracle network. This product, while
secondary at present, is itself a colossal value add in terms of reusability.
Orcfax, through the practical course of business, will create a massive
decentralized digital archive of facts, which can be used for auditing purposes,
for research, and to inform or train future price action or machine learning
models.<br/>
<br/>
Below is an example of the archival record of Orcfax processes after they have
been bundled together using Bag-it, and the Bag's structure:<br/>

```
01H52ZH41A7MDY4XN24WREEQY0/
├── bag-info.txt
├── bagit.txt
├── data
│   ├── fact-datum--ADAUSD-2022-10-26T16-48-31ZUTC.json
│   ├── fact-statement-ADAUSD-2022-10-26T16-48-31ZUTC.json
│   ├── message-ADAUSD-Coinbase-2022-10-26T17-12-45ZUTC.json
│   ├── message-ADAUSD-Kraken-2022-10-26T17-12-27ZUTC.json
│   ├── message-ADAUSD-Kucoin-2022-10-26T17-13-04ZUTC.json
│   └── validation-ADAUSD-Orcfax-2022-10-26T17-13-20UTC.json
├── manifest-sha256.txt
├── manifest-sha512.txt
├── tagmanifest-sha256.txt
└── tagmanifest-sha512.txt
```

There are two prominent use cases that highlight the value and reusability of
the data coming out of this archival process. The first lies in the
auditability of the data.<br/>
<br/>
Example<br/>
One of the data sources feeding into Orcfax is compromised, so that the Oracle
itself is operating as intended, but the data source is not. The consequences of
which would be immediately evident on on-chain; inaccurate data could cause a
liquidation, or any other kind of event.<br/>
<br/>
Unfortunately, in the case of this example, once the smart contract has
executed, it can't be reversed. However, because Orcfax has maintained audit
logs of its workflow for every published fact, anyone can go back in time to
discern where the liability lies. This has been made possible by the collection
and validation of not just the target data, but also data relating to context
and provenance. All of these extra facts enable auditability, and even have
value off chain as well; the Orcfax process has been developed to provide
solutions to larger, more global, issues around trust and auditability. Society
at large for years has grappled with the problem of how to preserve our digital
information and the memory of society; how do we keep information online and how
do we finance these efforts in perpetuity? These are questions that many people
have, that reveal how many do not realize just how vulnerable our global digital
memory infrastructure is at present, and have been front of mind during the
Orcfax development process.<br/>
<br/>
Orcfax, through the practical course of business,  will create a massive
decentralized digital archive of facts, which will have high utility and value
for research, and to inform or train future price action or machine learning
models. This is seen as the second prominent use case, which is a value add made
possible by our processes and made accessible through the Orcfax Fact
Explorer.<br/>
