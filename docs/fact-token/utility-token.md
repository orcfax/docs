---
id: utility-token
sidebar_position: 3
slug: /utility-token
---

# The FACT utility token

The Orcfax platform includes a Cardano-native utility token which has been named
$FACT. This utility token has been designed with a limited number of explicit
uses. $FACT can be  used for:

1. Payment by consumers for data publication, either by a heartbeat publication
model or an on-demand publication model
2. Staking by our data validator nodes to participate in oracle processes
3. Reward payments to validators for participation in the Orcfax Network
4. Voting power in Orcfax DAO governance decisions

Importantly, Orcfax has grounded the utility of the token by minting a fixed
supply; there will only ever be [1 Billion FACT tokens](tokenomics), and 50% of
this total supply has been reserved for validator node rewards to
incentivize participation.

More information about the utility of the FACT token can be found in thr Orcfax
[Economic Model](economic-model).

## Utility 1: Payment

The FACT token is used in the Orcfax Network as the form of payment for the fees
charged to publish new Fact Statements.

Orcfax feed consumers (e.g. dApp, smart contract) seeking to fund feeds which
are published on a user-stipulated heartbeat schedule will have the cost of
publication quoted in FACT.

Alternatively, if an Orcfax feed consumer needs a more current update for a
given datum feed (e.g. ADA-USD) than is available on-chain, then an on-demand
publication request can be triggered. The cost of publishing this new fact datum
on-chain will likewise be quoted in $FACT.

While consumers can also use ADA, these payments will be sold for FACT tokens,
creating a positive feedback loop that boosts demand for the FACT token.

![Orcfax Economic Model](/img/2024-02--Orcfax-economic-model2.jpg)

## Utility 2: Staking

$FACT will also be used by Orcfax validator node operators as staked collateral
to incentivize good performance and trust in the network.

On January 9th, 2024 Orcfax published its
[Orcfax Validator License Announcement][announce-1], which outlined what
potential node operators, and non-validators, could look forward to as licenses
became available and as the Incentivized Testnet (ITN) is being developed.

To become an Orcfax Validator, users are required to 1) mint and/or hold a
Validator license, and 2) deposit $FACT tokens into the Orcfax validator smart
contract.

1. There are only 100 validator licenses available for node operation. During
the origin minting process, each license cost 100,000 $FACT.
2. When the validator nodes begin operating, a deposit of 500,000 $FACT will be
required in the validator smart contract.

By requiring operators to put up a certain amount of $FACT to run a node,
operators demonstrate their "skin in the game". Orcfax decided on the required
amount of $FACT which simultaneously encourages a diverse community of node
operators while also discouraging bad actors. If, for whatever reason, a node
reports irregular data or has persistent networking issues, then their deposited
stake may be slashed by the protocol. This is both a penalty for jeopardizing
the integrity of the Orcfax Network, as well as an incentive to diligently
monitor and re-calibrate node operation as appropriate.

[announce-1]: https://medium.com/@orcfax/orcfax-validator-license-announcement-5da07ef1439c

## Utility 3: Rewards

When a Fact is published on chain, the validator which was randomly
selected to put that statement on-chain will be rewarded with FACT tokens. This
means that because the amount of Validator licenses are limited, more feeds
will result in more rewards being distributed to each active validator.

The initial version of the Validator Network (v1) will be designed to select
validators at random to publish a fact statement, giving all validators an equal
chance of earning a reward. Future models will weight this random distribution
by biasing rewards to those with higher $FACT delegation.

A full 50% of the FACT token allocation has been reserved to subsidize the
payment of validator node rewards. This will incentivize network participation
long enough to allow the network to become fully self-sustaining via its
publication fees.

### Validator incentives

Validators have the ability to estimate potential rewards that they can expect
by utilizing the [initial rewards calculator][calc-1].

The calculator allows users to simulate certain scenarios by modifying the most
important parameters that define the estimated rewards (e.g. number of feeds).
The yellow fields can be modified by the user. Some fields include notes to help
users understand how the calculation works.

[calc-1]: https://docs.google.com/spreadsheets/d/1aH4Zwtn8KUTtrdzBBZFK1_Kulb7_a4uJGjzLhmPTLFc/edit#gid=1934045699

## Utility 4: Voting

Governance of the Orcfax Network, including its technical operations, R&D,
community management, new feed nominations, fee schedule, etc., will all be
transitioned from Orcfax Ltd. to a Decentralized Autonomous Organization (DAO)
after the network has proven to be healthy and self-sustaining.

As different proposals are brought to the Orcfax DAO for approval, the FACT
token will serve as stake in weighted voting scores. That is to say, the more
FACT that an Orcfax DAO member holds, the more weight their up or down
votes will have.
