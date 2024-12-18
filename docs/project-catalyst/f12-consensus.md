---
id: f12 consensus
sidebar_position: 5
slug: /f12-consensus
---

# Orcfax validators: reaching L2 consensus

R&D into Orxfax Network consensus funded through the Catalyst F12 campaign.

This page will provide documentation pertaining to the execution of the proposal
and links to each of the deliverables required for their respective Milestones.
The full Catalyst proposal can be found [here][cat-1].

[cat-1]:
    https://projectcatalyst.io/funds/12/f12-cardano-use-cases-concept/orcfax-validators-reaching-l2-consensus

## Problem statement

Many Cardano projects need a Layer 2 solution for scaling the performance of
their decentralized consensus logic but they are struggling to understand and
implement appropriate solutions.

### Proposed solution

Orcfax will research Cardano-native and L2 protocols, design an architecture
stack, and develop proof-of-concept software to test the L2 consensus model in
the Orcfax validator network.

## Milestone 1

Orcfax produced a research report which evaluated L2 protocols and tools
available to Cardano projects with the hope that the exercise would inform
proof-of-concept development in subsequent milestones.

Orcfax conducted limited research which investigates a sample set of consensus
protocols. This research was executed with a limited initial understanding of
the consensus landscape, but covers topics such as:

-   what might be Orcfax requirements for staking?
-   what consensus resources exist for Cardano developers?
-   how do these resources map to Orcfax requirements?

This research and its findings are made available in _A Comparative Analysis of
Consensus Protocols used in Blockchain Networks_ [(Wallis &
Koch, 2024)][consensus-paper]

[consensus-paper]: ./wallis-koch--2024--a-comparative-analysis-consensus.md

## Milestone 2

After the successful completion of milestone 1 and its research objectives, work
on the consensus PoC can begin; however, a number of considerations must be be
assessed which are quite impactful on design. Some of these consideration are
economical.

As Orcfax prepares to for milestone 3 which will conclude with the completion of
a consensus PoC, we have documented the economic considerations and their
relationship to our other proposal (i.e. implementing a staking mechanism); our
findings are made available [here][m2-1] along with a use case description, and
diagrams where appropriate.

[m2-1]: ./f12-economic-model.md

## Milestone 3

Orcfax will produce software code that demonstrates how a validator node
operator can:

-   receive external source data
-   apply validation logic
-   compare results with other nodes in the L2 network
-   arrive at consensus on datum value

## Final Milestone
