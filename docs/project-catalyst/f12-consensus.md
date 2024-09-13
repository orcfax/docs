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

[cat-1]: https://projectcatalyst.io/funds/12/f12-cardano-use-cases-concept/orcfax-validators-reaching-l2-consensus

## Problem statement

Many Cardano projects need a Layer 2 solution for scaling the performance of
their decentralized consensus logic but they are struggling to understand and
implement appropriate solutions.

### Proposed solution

Orcfax will research Cardano-native and L2 protocols, design an architecture
stack, and develop proof-of-concept software to test the L2 consensus model in
the Orcfax validator network.

## Project management

```mermaid
gantt
    title Orcfax consensus
    dateFormat YY-M-D
    axisFormat %m-%d
    tickInterval 1week
    weekday monday
    excludes    weekends
    section Milestone 1
        Create public repo             :active,          pt1, 24-9-1, 1d
        Draft functional req's         :                 t1, 24-9-1, 5d
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
        Dev node ability to collect    :                 t8, after t7, 15d
        Test cases (collect)           :                 t9, after t8, 5d
        Dev sys. ability to validate   :                 t10, after t7, 15d
        Test cases (validate)          :                 t11, after t10, 5d
        Dev node ability to compare    :                 t12, after t7, 15d
        Test cases (compare)           :                 t13, after t12, 5d
        Dev sys. consensus ability     :                 t14, after t13, 15d
        Test cases (compare)           :                 t15, after t14, 5d
        Publish tests - Github         :crit,            d3, after t15, 1d
        Publish code - Github          :crit,            d4, after t15, 2d

        Submit evidence                :milestone,       m3, after d4, 1d

   section Final Milestone
        Closeout report                :crit,            d5, after d4, 5d
        Closeout video                 :crit,            d6, after d5, 2d
        Announce -- Twitter            :crit,            d7, after d6, 1d
        Announce -- Twitter            :crit,            d7, after d6, 1d

        Submit evidence                :milestone,       m4, after d7, 1d
```

## Milestone 1

Orcfax will produce a qualitative research report which evaluates current L2
protocols and tools available to Cardano projects With the hope of using this
to inform proof-of-concept development.

## Milestone 2

Orcfax will produce the following:

* economic model report
* use case descriptions
* network architecture diagrams

## Milestone 3

Orcfax will produce software code that demonstrates how a validator node
operator can:

* receive external source data
* apply validation logic
* compare results with other nodes in the L2 network
* arrive at consensus on datum value

## Final Milestone
