---
id: f12 staking
sidebar_position: 4
slug: /f12-staking
---

# Orcfax staking: rewarding good behaviour

R&D into Orxfax Network staking funded through the Catalyst F12 campaign.

This page will provide documentation pertaining to the execution of the proposal
and links to each of the deliverables required for their respective Milestones.
The full Catalyst proposal can be found [here][cat-1].

[cat-1]: https://projectcatalyst.io/funds/12/f12-cardano-use-cases-concept/orcfax-staking-rewarding-good-behaviour

## Problem statement

Game theory remains under-utilized within Cardano. As we progress to full
decentralization, Cardano dApps need more tools and protocols to incentivize
desired behaviour while mitigating bad actors.

### Proposed solution

Orcfax will research staking mechanisms for Web3 networks, design an
architecture stack of relevant tools and protocols, and develop a proof of
concept for testing in our validator network.

## Project management

```mermaid
gantt
    title Orcfax staking
    dateFormat YY-M-D
    axisFormat %m-%d
    tickInterval 1week
    weekday monday
    excludes    weekends
    section Milestone 1
        Create public repo             :active,          pt1, 24-9-1, 1d
        Draft sys. req's               :                 t1, 24-9-1, 5d
        Identify resources/tools       :                 t2, 24-9-1, 10d
        Evaluate resources/tools       :                 t3, after t2, 5d
        Draft research report          :                 t4, after t3, 3d
        Publish report - Github        :crit,            d1, after t4, 1d

        Submit evidence                :milestone,       m1, after d1, 1d

    section Milestone 2
        Draft use case desc.           :                 t5, after t4, 3d
        Draft network arch. diagrams   :                 t6, after t5, 2d
        Dev economic model/report      :                 t7, after t4, 10d
        Publish deliverables - Github  :crit,            d2, after t7, 1d

        Submit evidence                :milestone,       m2, after d2, 1d

    section Milestone 3
        Dev node ability dept. stake   :                 t8, after t7, 15d
        Test cases (stake)             :                 t9, after t8, 5d
        Dev sys. ability to award      :                 t10, after t7, 15d
        Test cases (award)             :                 t11, after t10, 5d
        Dev sys. ability to slash      :                 t12, after t7, 15d
        Test cases (award)             :                 t13, after t12, 5d
        Publish tests - Github         :crit,            d3, after t13, 1d
        Publish code - Github          :crit,            d4, after t13, 2d

        Submit evidence                :milestone,       m3, after d4, 1d

   section Final Milestone
        Closeout report                :crit,            d5, after d4, 5d
        Closeout video                 :crit,            d6, after d5, 2d
        Announce -- Twitter            :crit,            d7, after d6, 1d
        Announce -- Twitter            :crit,            d7, after d6, 1d

        Submit evidence                :milestone,       m4, after d7, 1d
```

## Milestone 1

Orcfax will produce a qualitative research report which evaluates current Web3
staking protocols and tools available to Cardano projects.

## Milestone 2

Orcfax will produce the following:

* Economic model report
* Use case descriptions
* Network architecture diagrams

## Milestone 3

Orcfax will produce software code that demonstrates how a validator node
operator can:

* deposit testFACT stake
* receive testFACT rewards
* have testFACT slashed for non-conformant behaviour

## Final Milestone
