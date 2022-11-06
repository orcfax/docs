---
id: overview
sidebar_position: 2
slug: /overview
---

# Solution overview

![Orcfax concept diagram](/img/orcfax-concept-diagram-nov-2022.png)

### Data collection
The Orcfax oracle service collects data about real world events from various primary sources using a network of decentralized nodes. 

Nodes are run indepedently and permissionlessly by anyone that is able to install the free software and commit a small amount of $FACT tokens as their stake. $FACT is the native token used within the Orcfax network to pay for data publication and to reward oracle pool participants.

Wherever possible, Orcfax collects raw data from at least three independent sources to triangulate and average the information. For example, to determine the price of ADA to U.S. dollars, Orcfax nodes will query APIs at Kraken, Binance, and CoinGecko.

### Data validation
The collected source data is normalized into a standard schema, hashed, and then circulated within the decentralized oracle pool to validate that the exact same data has been collected and tabulated. The data points published by the Orcfax oracle are rich in context and therefore referred to as "fact statements", to reflect their semantic maturity as formally structured declarations about real world events and entities.

Orcfax maintains public audit logs so that the flow of information through the oracle service can be carefully monitored and protected. If there are any data anomolies at this collection and normalization stage, it's a red flag that some part of the data may have been corrupted, whether accidently or intentionally. Nodes that submit innacurate or false data will be punished by having a portion of their staked $FACT tokens deducted as a penalty ("slashed") and their node reputation score will be affected. 

### $FACT rewards
After successfully collecting the source data and achieving network consensus on its normalized form, a lottery is held by the oracle protocol to randomly assign a publication reward of $FACT tokens to one of the successful oracle nodes. This reward is a share of the publication fee paid by the data Consumer who requested the publication of a fact statement. This creates the incentive structure for oracle nodes to participate in the network.

### Data publication
The Orcfax oracle nodes create a fact statement record that is formatted in compliance with the Cardano Open Oracle Protocol. This includes markup in JSON-LD linked data format in compliance with the relevant schema.org ontologies. Using this ubuqitous de-facto standard to express facts about the real world great improves the discoverability and re-use of data published via the Orcfax network, including use in fact checking services, search indexes, and machine-readable AI.

### Data consumption
Cardano dApps that need real-world oracle data submit a Data Catalog request to an Orcfax node. The Data Catalog lists the fact statement types that are available for publication (e.g. ADA/USD price, U.S. Consumer Price Index), their cost, along with their interval frequency (e.g. one per minute, once per month, etc.). 

The Cardano smart contract or script uses the fact statement ID from the catalog to request a specific data point from the decentralized oracle pool. If that particular fact statement has already been published in a previous transaction, the Orcfax node will reply with the UTXO identifier that the Consumer can use for free as a CIP-31 Reference Input in their script. 

Otherwise the Consumer will submit the applicable fee in $FACT token. This is used to pay for the Cardano transaction fee and deposit. The Consumer will receive a signed transaction from Orcfax that they Submit to the Cardano network. The signed transaction contains the fact statement record in the transaction Datum as well as an exclusive security token to prove it came from an Orcfax authorized Publisher. 

The Consumer can reference this signed transaction and the fact statement in the Datum in their own script and submit both transactions together in the same block. This gives the fact statement user access to this data on-chain one block before anyone else can read it as a published Reference Input. This creates a possible business advantage and incentive to be the first to pay for a new fact statement.

Orcfax will also arrange for a number of sponsored data feeds where funds are held in escrow to pay for the publication fee for a given fact statement type, making this data available as CIP-31 Referendce Inputs to on-chain smart contracts and scripts.




