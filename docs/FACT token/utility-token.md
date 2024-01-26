---
id: faq-1
sidebar_position: 2
slug: /utility-token
---

# FACT utility
The Orcfax platform includes a Cardano-native utility token named FACT.

The FACT token is used for:

1. Payment for oracle data publications
2. Staking by our data validator nodes
3. Reward payments to validators
4. Voting power in Orcfax DAO governance decisions

There is a fixed supply of [1 Billion FACT tokens](tokenomics) with 50% reserved
for validator node rewards.

## Utility 1: Payment
The FACT token is used in the Orcfax network as the form of payment for the fees
charged to publish new fact statements.

If an Orcfax feed consumer (e.g. dApp, smart contract) would like a more current
update for a given datum feed (e.g. ADA/USD), then an on-demand publication
request can be triggered. The cost of publishing this new fact datum on-chain is
quoted and paid in FACT.

If an Orcfax feed consumer (e.g. dApp, smart contract) would like to either use
our heartbeat or on-demand feeds (e.g. ADA/USD), then the cost of publishing
these fact datum on-chain is quoted and paid in FACT.

An Orcfax feed consumer can also pay in ADA but will incur an additional fee
(covering the costs of converting the ADA to FACT) tokens in order to fulfill
the feed payment.

## Utility 2: Staking
The FACT token is used by Orcfax validator node operators as staked collateral
to incentivize good performance and trust in the network.

If, for whatever reason, a node reports irregular data or has persistent
networking issues then their deposited stake will be slashed by the protocol.
This is both a penalty for jeopardizing the integrity of the Orcfax network,
as well as an incentive to re-calibrate their node operations.

## Utility 3: Rewards
The FACT token is used to reward Orcfax validator node operators. Each time a
fact datum is published by an Orcfax node, the participating validators split
the FACT publication payment.

As well, one validator node is nominated randomly
each publication event to publish the fact datum and submit the audit log
archival package to the Arweave network. These random nodes are rewarded for
this function in FACT.

A full 50% of the FACT token allocation is reserved to pay validator node
rewards. This will incentivize network participation long enough to allow the
network to become fully self-sustaining via its publication fees.


## Utility 4: Voting
Governance of the Orcfax network, including its technical operations, R&D,
community management, new feed nominations, fee schedule, etc., will all be
transitioned from Orcfax Ltd. to a Decentralized Autonomous Organization after
the network has proven to be healthy and self-sustaining.

As different proposals are brought to the Orcfax DAO for approval, the FACT
token will serve as stake in weighted voting scores. That is to say, the more
FACT that an Orcfax DAO member holds, the more weight their up or down
votes will have.
