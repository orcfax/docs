---
id: Validator model introduction
sidebar_position: 1
slug: /validator-intro
---

# Validator model introduction

Orcfax validators are the software nodes run by a decentralized network of
operators around the world. These Orcfax software nodes collect, validate,
publish and archive real world data on-chain for Cardano decentralized apps
(dApps) to use. Instead of having off-chain business deals and contracts with
hand-picked validators, Orcfax is implementing a permissionless and
decentralized Oracle pool model for its validator network.

This means that anyone can become an Orcfax validator as long as they are able
to meet the minimum requirements. These requirements are broken down into two
parts:

- Minimum technical requirements <!-- link to section "Technical Requirements -->
- Operational requirements <!-- Link to section "Operational requirements -->

Each of these will be discussed further in their respective sections.

## Incentivized Testnet

After the validator licenses have been distributed, Orcfax will launch the
Incentivized Testnet (ITN). The ITN will take place on the Cardano test net(s)
and also within our private validator channel on our discord. The validators
that are willing to participate in the ITN and help us test the node software,
will be rewarded for their efforts in working with the Orcfax team to finalize
the technical and economical parameters of the model. Active participants will
be rewarded with $FACT tokens.

More details about the ITN will be released soon.

## Validator rewards

When a fact statement is published on chain, the validator that was randomly
selected to put that statement on-chain will be rewarded with FACT tokens. This
means that because the number of Validator licenses are limited, more feeds
means that more rewards will be distributed to each active validator.

The initial version of the validator network (V1) will be designed to select
validators at random to publish a fact statement, giving all validators an equal
chance of earning a reward. Future models will weight this random distribution
by biasing rewards to those with higher $FACT delegation.

## Non-validator rewards

All Orcfax $FACT holders were invited to vote on the first-ever Orcfax proposal:
the implementation of rewards for $FACT holders. The proposal passed. More than
28 million $FACT voted in favor of rewarding $FACT holders, and the results can
be found [here](https://app.summonplatform.io/poll/640336f9-0047-4055-91cf-4238ad4d182f).

Orcfax facilitated this community vote in alignment with our decentralization
goals, and to allow opportunities for community members to participate in
(and shape) the future of the Orcfax network.

This proposal was requested by community members and introduced rewards for
$FACT holders who may not have the capacity to join the Orcfax network as a
validator, yet wish to receive $FACT rewards for locking (and not moving) their
FACT tokens.

Orcfax is investigating methods to implement non-validator staking for the
initial version (V1) of the validator network.

## Where will $FACT rewards come from?

Whenever a fact statement is published by a validator, that validator will be
rewarded via two different revenue streams:

1. **$FACT Validator allocation**:
In the beginning, as the protocol is onboarding paying customers/integrators,
Orcfax will use the [Validator Rewards](tokenomics#validator-rewards)
allocation, which accounts for 50% of the total $FACT supply, to compensate
validators. As time passes these reward emissions will decrease and be replaced
by customer fees.

1. **Customer fees**:
These are the fees which paying customers/integrators will be subject to in
order to utilize Orcfax feeds. The total revenue from these fees will increase
as the network grows and matures until at some point (5–10 years) this revenue
stream will completely replace the decreasing $FACT validator allocation.

As mentioned above, a portion of both revenue streams will go to the validators
and the rest will go to the Orcfax network.

Building off of this structure, this proposal describes how Orcfax proposes to
use a small portion of these revenue streams to reward non-validators.

<!-- You can find the proposed breakdown below: add image -->

Important Note:
these percentages will change as the network grows. As the Validator Rewards
allocation depletes over time and as more paying customers are integrated, we
will increase the Validators percentage for the customer fees (and decrease the
same for Orcfax). Additionally, depending on the total volume of locked $FACT
and the number of paid feeds, non-validator $FACT rewards could result in a 3–8%
APY (measured in $FACT).
