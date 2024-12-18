---
sidebar_class_name: hidden
---

# EchoNet: considerations for the economy of a decentralized network

# Context

A decentralized service is a service provided by a set of separate autonomous
participants that are not subject to a hierarchy. Of the network of
participants, the majority share a common purpose of providing a good service.
However, some participants may be incompetent or even have malign intent. This
network of mutually suspicious participants must coordinate the running of a
distributed service.

Part of an overall design of such a system is providing tooling which enables
them to reach agreement over various network related tasks; this is consensus.
The design must also ensure that participants in that process are rewarded for
the good service they provide and are strongly discouraged from behaving badly;
staking is the term we use to encapsulate the process governing this aspect of a
decentralized service.

The following will seek to assess the economic implications for Orcfax as it
continues research and development into maturing its decentralized network of
validator nodes, known as EchoNet, through the integration of staking and
consensus mechanisms. Where necessary, specific considerations relating to
staking and consensus in terms of economic impacts will be addressed separately.

## Use cases

Projects which may benefit from the catalyst project deliverables, from either
consensus or staking, may be any which require a set of participants to provide
a service on behalf of the project in a decentralized manner; the design of the
consensus and staking proof of concepts continue to be executed in such a way
that while in context of this proposal, the service provision is an oracle, it
need not be as this aspect is off-chain.

The deliverables from these projects have broad utility and may be used by
projects offering diverse services to their users.

### Specific considerations for Staking

Projects assessing the implementation of a decentralized network may assume that
most participants will be honest and competent, and that they will continue to
participate honestly and with competence providing participation is
straightforward and financially neutral. However, they are without hierarchy or
a priori obligation to provide this service or cooperate with one another.

This is why the output system must provide the incentive structure that, under
these assumptions, will result in good service provision.

A participant's behaviour is accounted for: good behaviour that aids the quality
of service provision is measured, as is bad behaviour. We can assume that the
participants are able to reach consensus on these accounts and produce a
signature/signatures as proof of general acceptance. This happens periodically -
say once every 24 hours.

The rewards are paid out from a 'treasury' and forfeit funds are paid to the
treasury. The currency is a native asset. The project output should include the
scripts governing these aspects of the treasury. Other funding of the treasury
is beyond project scope. We will assume the treasury is sufficiently funded to
meet the burden of conveying rewards.

## Staking

Orcfax is an aspiring decentralized Oracle service. To participate within the
network, a participant must be in possession of two types of Cardano native
assets:

One Orcfax Validator License, one of 100 NFTs At least 500,000 \$FACT

Participants are strongly discouraged from behaving badly through the use of
slashing. A participant must first put 'at stake' some asset(s). If the
participant's actions are deemed bad, some or all of their assets are forfeit
through a slashing mechanism.

To incentivize good behavior, a participant receives rewards proportionate to
their good service.

However, when balancing incentives and penalties for participants care must be
taken. The wrong incentive structure may either:

cause a race to the top. Rewards only go to a few participants. Eventually this
leads to centralization which degrades robustness. cause a race to the bottom.
Participants are rewarded even if they are poor service providers.

Both are bad for the long term health of the service.

### Components overview

There are the following key components of the consensus PoC:

1. Constitution - holds the signing key.
1. Hold - rewards awaiting collection.
1. Safe - locks a participants funds.
1. Treasury - holds funds awaiting dispensing.
1. Dispenser - manages the dispensing of rewards.

#### The Constitution

The constitution holds any dynamic data required by the protocol. This is a
simple, classic design consisting of a multipurpose script with spend and mint
purpose. The script is seeded so that it can only be initiated once.

A validity token (NFT) is locked at the script, its utxo's inlined datum
contains the pubkey. It can be spent only if the pubkey signs the transaction.

If the tokens are not burnt in the transaction, then the validity token must be
output to the same address.

#### The Safe

The safe holds participants' funds. These are at risk if the participant is
deemed to behave badly. It is also required to claim rewards.

A participant locks funds in (an instance of) a **safe**. While it exists, it is
represented on the L1 tip by a single utxo.

```mermaid
---
title: Safe lifecycle
---
stateDiagram-v2
    [*] --> Locked : lock
    Locked --> Locked : update
    Locked --> Renounced : renounce
    Renounced --> [*] : free
    Locked --> [*] : slash
    Renounced --> [*] : slash
```

This is the basic lifecycle of a safe.

First, participants take part in a decentralized key generation (DKG) process.
The output of the DKG is one key pair for each participant as well as a single
collective pubkey. The signature generation procedure requires multiple
coordinated rounds. We'll call this the 'signature dance'. The output of the
signature dance is a single signature. On-chain verification of the signature
with the collective pubkey is indistinguishable from that of a 'vanilla'
signature.

We may assume that off-chain, the participants are able to organise a DKG, and
will organise FROST style signing of the rewards and slashing data. Each
individual pubkey can then be used to identify the participant. The collective
pubkey is used to verify the signature.

If the participant is satisfied with the DKG step they perform a `lock` step.
This initialises the safe. It is now `Locked` with the owners keys in the datum.

While `Locked` the owner may `update` the safe with new keys.

If the participant wishes to no longer participate, they `renounce`. The safe is
now `Renounced`.

All participants should be watching the chain for `renounce` actions, as they
should no longer accept signatures associated with the renouncer. The `renounce`
begins a limited period of time where the other participants can still apply
penalties.

Once this time period has elapsed, the participant may `free` their locked
funds. All funds are again at the participants disposal.

If sufficient participants deem a participant with either a `Locked` or
`Renounced` safe to have acted badly, they can produce a slash transaction. This
empties the contents of the safe into the treasury. The script ensures this is
permitted only when signed by the constitution.

#### The Hold

The `Hold` is a simple script which "holds" rewards until they are claimed.

A utxo at the `Hold` address has an inline datum indicating to which safe owner
it belongs.

##### The Dispenser

The dispenser facilitates the dispensing of rewards to the `Hold`.

## Consensus

The economics of consensus look quite different. The focus here is in
understanding the cost of validator participation, the cost to a validator when
slashed, and the potential benefits of performing maliciously. If the potential
profit of providing bad information outweighs the cost, validator nodes would be
financially advantageous to act badly and there would be significant risk to
network integrity.

At the time of this writing, the cost of acquiring 500,000 FACT tokens is
approximately 5,025 ADA or 5,577 USD. The floor price for a Orcfax Validator
License is 10,500 ADA or 11,653 USD. This means that the cumulative stake
required to participate has a value of approximately 17,230 USD.

In order to combat the risks associated with validators having financial
advantage to act badly, Orcfax is tasked with devising a strategy by which
malicious behavior becomes cost prohibitive or disadvantageous. However, at this
stage of research and development, Orcfax has not yet decided on the process
through which consensus will be reached over a given fact statement; the
different ways this might be orchestrated have implications on how malicious
behavior may need to be addressed. For this reason, we will explore two options:
1.) where one node proposes a statement, and a subset of the 100 nodes within
the network verifies that statement; 2.) where all nodes within a randomly
selected subset propose a statement, and the median entry is selected.

In the first, where a proposer has their statements verified by a subset of n
nodes, then the cost of the lie (using the values given above) becomes
$n * 17,230$ USD. So, in a system where the threshold for verification was 10
nodes, then the cost of the lie is more than 170,000 USD.

However, if instead of requiring any subset for verification we had the n nodes
selected at random, then the lie becomes significantly more expensive as even If
the bad actor corrupted 10 of the total 100 nodes, it would be very unlikely
those 10 would be randomly selected.

In the second where a subset of nodes is randomly selected, each proposes a
statement, and the median is selected, then the cost of the lie at a minimum is
$((n + 1) / 2) * 17,230$ USD or the value of half the selected nodes +1. So in a
case where, from 100 nodes, a subset of 21 are selected at random, the cost of
the lie would be nearly 190,000 USD.

But again, the fact that this subset of nodes is selected at random means that
these costs are the minimum. Even with a bad actor having at least 11 licenses,
and the corresponding fact, the probability of them all being selected to
propose within the subset is very slim.

For either of the above scenarios, the value of \$FACT and cost of acquiring a
Validator License have immense impact on the appropriate size of the subset of
nodes; It could very well be that, using the values given previously, it's
necessary to select a subset of 21 (or more) nodes in order to adequately reduce
the risk of bad actors and to make bad data cost prohibitive. However, this
narrative dramatically changes should \$FACT halve in value, or increase 10x.

These are all considerations thatOrcfax must weigh as we continue to develop a
consensus solution.

## Participation costs

Participants will need to shoulder the cost of either acquiring their own
equipment by which they will participate in the network, or the cost of
maintaining a subscription to cloud infrastructure. While the cost of
implementing the software responsible for consensus and staking is unknown at
this time, the current cost of running a mainnet node within the Orcfax
federated network is approximately 200 USD per month, which should serve as a
basic understanding of costs for network participants; its important to
understand that this approximation of cost is an estimate and may not reflect
the total cost of participation for validators.

:::info[N.B.]

The cost of implementing and running staking and consensus mechanisms remains
unknown because design choices relating to either can have significant impacts.
This section will be updated after the next milestone and the completion of the
PoC's.

:::

## Rewards

Early on in Orcfax development, we established the mechanisms by which
Validators would be onboarded and rewarded for their participation in the
network. Our [tokenomics][r-1] ensured that the biggest allocation of \$FACT was
reserved to reward our decentralized validators for running Orcfax nodes.

Initially, with a relatively low number of integrators, validators will be
rewarded for their participation in the network with \$FACT from the [Validator
Rewards Allocation][r-2], which contains 50% of the total FACT token supply, or
500,000,000 (50%) \$FACT.

The amount of FACT tokens rewarded from this allocation per publication will
decrease over time. As more consumers start using Orcfax oracle feeds, the
increasing \$FACT payments from these customers will compensate for the reduced
emission from the Validator Rewards Allocation, and will eventually replace them
completely.

The following demonstrates how having integrators pay for feeds in FACT (or ADA)
creates a positive feedback loop and buy pressure for \$FACT. The generated
\$FACT payments from integrators are then distributed to entities crucial for
network operation like Orcfax Validators.

![Orcfax Economic Model](/img/2024-09-17--orcfax-economic-model.png)

[r-1]: docs/fact-token/tokenomics.md
[r-2]: docs/fact-token/tokenomics.md#validator-rewards

## Beyond the PoC

While research for both consensus and staking was completed within budget,
systems analysis and development have, to date, exceeded initial estimates; this
has largely been due to complexities which while foreseen, their scope was not
entirely appreciated. The difference between the budget and actual costs is
being covered by Orcfax.

Going forward, the reality of these cost discrepancies is useful for better
understanding the real cost of any work which may be needed after the successful
completion of catalyst closeout to move both the consensus and staking PoC’s
towards mature software and beyond with the integration of consensus and staking
mechanisms into EchoNet.
