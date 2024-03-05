---
id: Operational requirements
sidebar_position: 2
slug: /operational-requirements
---

Orcfax is a decentralized oracle solution that publishes data about real world
events to the Cardano blockchain. The decentralized oracle feeds issued by
Orcfax are made possible by leveraging a network of independent nodes which are
responsible for collecting and aggregating multiple primary data sources while
providing full audit logs of the complete oracle process.

Those interested in running an Orcfax node will be required to do the following:
1. Reserve, mint and hold a Validator license
1. Deposit FACT tokens in our validator smart contract

## Rationale
The use of a license and the required deposit is designed strategically to
provide network security, clarity, and fairness within the Validator Network.

The Validator License is an NFT that represents the right to operate an Orcfax
validator node. The NFT is non-redeemable, but tradable on the secondary
markets.

The Deposit is a redeemable amount of $FACT staked by validators for network
participation. It ensures validator accountability and is subject to slashing
(penalty) for actions that harm the oracle network (e.g. poor node network
response time, contributing non-conformant data, etc). Validators will be able
to reclaim their deposited $FACT anytime. However, removing the required stake
amount will result in losing the ability to run their node until a deposit is
added once again.

<!-- insert graphic from medium -->

## The Validator License
The decentralized Orcfax network will consist of 100 nodes. This means that only
100 licenses are available. This decision to limit network size was made in
consultation with the Orcfax community.

Each of these licenses will cost 100,000 $FACT to mint.

The ability to demonstrate interest in acquiring a license was first made
available through a reservation process, whereby users were required to submit a
transaction to themselves with a minimum of 250,000 $FACT during a one week
period. A ranking system was then employed to score user reservations based on
two factors:
1. timeliness of the submitted reservation transaction
1. the total $FACT submitted in the transaction (above andd beyond the minimum
requirement of 250K).
This ranking system wwas designed to provide greater opportunity to all while
also disincentivizing “whales” and bots from acquiring multiple licenses for the
purposes of speculation.

The reservation process started on February 17th, 2024 at 19:00:00 UTC and ended
exactly 1 week later on February 24th at 19:00:00 UTC. During, andd after, the
reservation period, users were able to track the status of their reservation
through a realtime [leaderboard](https://status.orcfax.io/validators).

At the end of the reservation process the top 100 valid reservations were
whitelisted to mint their validator license at a later date, and were required
to retain the $FACT amount in their wallet that they reserved with up to the
minting date in order to keep their whitelist status. The remaining valid
reservations will be held in reserve in case some don’t exercise their rights to
mint a license, or a reservation entry is invalidated due to fund movement prior
to the mint event.

### Mint date
The date at which whitelisted wallets may mint their licenses will be announced
shortly. Please watch our Discord for timely updates.

The Orcfax team will share a time-window for whitelisted wallets to mint their
License NFTs. In case of unclaimed licenses, a second round will open for the
group of wallets held in reserve.

The minting price of the license will be 100,000 $FACT.

The $FACT accrued through the minting process will be transferred to the
[ecosystem wallet](tokenomics#ecosystem). This allocation is for future
partnerships, (centralized) exchange liquidity, marketing campaigns and
developer grants. The funds within this wallet have been set aside to fund
research, and to develop tools/services that contribute to the growth of the
Orcfax ecosystem.

<!-- Maybe we can put some stats here that show how much was locked during that week? -->

## The $FACT deposit
On March 1, 2024 The required $FACT deposit for node operation was set at
500,000 $FACT. This sum was determined through market value, whereby either
500,000 $FACT or 10,000 USD equivalent in $FACT on March 1st would be required
(i.e. whichever $FACT amount is larger on that date).
