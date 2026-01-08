---
id: f12 audit
sidebar_position: 2
slug: /f12-audit
---

# Orcfax architecture audit

An audit funded through the Catalyst F12 campaign.

This page will provide documentation pertaining to the execution of the proposal
and links to each of the deliverables required for their respective Milestones.
The full Catalyst proposal can be found [here][cat-1].

[cat-1]:
    https://projectcatalyst.io/funds/12/f12-cardano-use-cases-product/orcfax-architecture-audit

## Problem statement

Cardano dApps use Orcfax oracle data to trigger transactions with significant
financial outcomes. Their users need assurance from a qualified auditor that
Orcfax delivers authentic and accurate data.

### Proposed solution

Orcfax will procure auditing services for its on-chain and off-chain
architecture, perform fixes and enhancements as per auditor recommendations and
report on the audit status and outcomes.

## Milestone 1

Because Orcfax has divided the audit into two separate deliverables (i.e.
on-chain and off-chain architecture audits), Orcfax will leverage best practice
and precedence within the Cardano ecosystem to identify auditing firms and
request quotes for each.

Once identified, Orcfax will finalize a Contract for Services with the selected
audit firms.

### M1 On-chain

Orcfax contacted several auditing firms in order to receive quotes for
performing an audit of its on-chain components.

Our team has selected [TxPipe][m1-1] to go forward with the audit and
successfully signed a contract for services in August of 2024.

<!-- markdownlint-disable MD013 -->

<iframe src="https://drive.google.com/file/d/1aKiyGWJ_mjKF5pcp8JQgdYzo9b5tnll0/preview" width="640" height="480" allow="autoplay"></iframe>

<!-- markdownlint-enable MD013 -->

- Announcement on [X][m1-2]
- Announcement on [Discord][m1-3]

![Discord announcement](/img/2024-08-27--audit-txpipe-announcement.png)

[m1-1]: https://txpipe.io/
[m1-2]: https://x.com/orcfax/status/1828499168609837088
[m1-3]:
    https://discord.com/channels/918870284331802674/1082742450268942386/1278059047571951738

### M1 Off-chain

Orcfax contacted several auditing firms in order to receive quotes for
performing an audit of its off-chain architecture.

Our team has selected [BlinkLabs][m1-4] to go forward with the audit and
successfully signed a contract for services in September of 2024.

<!-- markdownlint-disable MD013 -->

<iframe src="https://drive.google.com/file/d/105O8V3EtKTEL6f3hu4_sKRNHNm-VK9Wz/preview" width="640" height="480" allow="autoplay"></iframe>

<!-- markdownlint-enable MD013 -->

- Announcement on [X][m1-5]
- Announcement on [Discord][m1-6]

![Discord announcement](/img/2024-09-30--audit-blink-announcement.png)

[m1-4]: https://blinklabs.io/
[m1-5]: https://x.com/orcfax/status/1840374361695404438
[m1-6]:
    https://discord.com/channels/918870284331802674/1082742450268942386/1290427915850350642

## Milestone 2

After contract finalization, auditors were given access to Orcfax systems. The
following constitutes the feedback received from each.

### M2 On-chain

TxPipe provided the following interim report:

<!-- markdownlint-disable MD013 -->

<iframe src="https://drive.google.com/file/d/1iE4Fce3s_-7MJ02oyFFZ6SWTPGL5T0aL/preview" width="640" height="480" allow="autoplay"></iframe>

<!-- markdownlint-enable MD013 -->

After review of the report, the Orcfax team acknowledged the identified
info-level finding. However, as this does not constitute an issue with the
on-chain code, Orcfax has decided not to resolve the finding at this time. It is
our opinion that this is, at worst, a tooling concern.

The finding can be simplified as follows: When using a chain indexer, if an
integrator filters on address, they may miss utxos that have different stake
credentials. This is correct.

However, integrators can just as easily filter on the payment credential, which
is the preferred method as this ensures the use of a valid FS as publication is
permissionless.

:::info["INFO" as defined by TxPipe]

Info are not issues. These are just pieces of information that are beneficial to
the dApp creator. These are not necessarily acted on or have a resolution, they
are logged for the completeness of the audit. (Audit Report, 18)

:::

### M2 Off-chain

For the off-chain audit, BlinkLabs came back after an initial review of relevant
components and discussed the value of a SOC2 audit; upon agreement, BlinkLabs
requested that Orcfax provide evidence demonstrating its ability to meet each of
the SOC2 requirements.

These requirements are provided below.

<!-- markdownlint-disable MD013 -->

<iframe src="https://docs.google.com/spreadsheets/d/1ksfblvhATokoGXIcQhPONistjunvJvoo/preview" width="640" height="480" allow="autoplay"></iframe>

<!-- markdownlint-enable MD013 -->

This request for additional access and materials amounts to nearly 200 items,
some of which (such as policies) must be drafted or amended to meet SOC2
requirements.

Orcfax developed the following strategy for accommodating this request: the
Orcfax team will divide these requests into 3 batches of deliverables based on
their category, and volume of requests, with a 4th dedicated to the development
of policies. The latter will be incrementally worked on in conjunction with the
other batches so that the batch 3 & 4 are submitted to BlinkLabs together; this
deliverable schedule aligns with the remaining milestones for the project.

We believe that by dividing the work into these deliverables we will increase
efficiency when responding to any feedback received after batch submission.

## Milestone 3

After acknowledging initial feedback and providing the additional access
described in the previous milestone, the auditors continued their work. The
following constitutes the feedback received from each.

### M3 On-chain

TxPipe provided the following Final audit report:

<!-- markdownlint-disable MD013 -->

<iframe src="https://drive.google.com/file/d/16UrMHDOQWAy5t09f1ICM6Wqx73avC7VM/preview" width="640" height="480" allow="autoplay"></iframe>

<!-- markdownlint-enable MD013 -->

The report lists four Info-level (i.e. advisory) findings which the Orcfax team
has acknowledged. However, as these do not constitute issues with the on-chain
code, Orcfax has decided not to resolve them at this time. This decision has
been made because resolution would result in a disruption of service for
integrators, and the potential improvements are outweighed by the possible cost
of remediation (e.g. the possibility of making new mistakes by renaming or
refactoring code); if or when an update to the Orcfax on-chain service is
needed, this decision will be reevaluated. This business decision balances
reliability and responsibility given that these info-level findings in some
cases constitute, at worst, tooling concerns.

The findings can be simplified as follows:

**ORC-301**: When using a chain indexer, if an integrator filters on address,
they may miss utxos that have different stake credentials.

- This is correct. However, integrators can just as easily filter on the payment
  credential, which is the preferred method as this ensures the use of a valid
  FS as publication is permissionless.

**ORC-302**: The frequent use of acronyms in the documentation added some
difficulty in navigation as readers may need to reference explanations
elsewhere.

- Readers are expected to take care when reviewing technical documentation.
  Additionally, the use of acronyms is advantageous in code.

**ORC-303**: The auditor questioned the need for the FSP to be included within
its current repository, and therefore its inclusion within the scope of the
audit.

- While the suggestion is not without merit, we disagree as the FSP is an
  integral part of the current design. Ultimately, the FSP is quite simplistic;
  t is underpinned by a single key and is thereby entirely controlled by a
  single entity. As Orcfax continues to decentralize its processes, we hope that
  this component will be subsumed by a decentralized model, where the FSP and
  other components are controlled by the network not single entity.

**ORC-304**: A potential inefficiency was found in the FS UTxO spending; in a
collect transaction, for each UTxO being spent, the inputs list is traversed to
look for the own script hash. A potential solution was proposed wherein the own
script hash is stored in the FS datum during FS UTxO creation in the FsMint
redeemer and verify its correctness against the script hash from the Mint
purpose. this way, during FS UTxO spending, the datum field can be read instead
of traversing the inputs list.

- Our team was interested in this proposal. However, without additional testing
  it'sa difficult to know whether the proposal would result in a decrease to the
  cost of collect but at the cost of increasing the tx size of publish (and so
  decrease max number of outputs). Unfortunately, the scope of TxPipe's work did
  not include tests of this type.

:::info["INFO" as defined by TxPipe]

Info are not issues. These are just pieces of information that are beneficial to
the dApp creator. These are not necessarily acted on or have a resolution, they
are logged for the completeness of the audit. (Audit Report, 18)

:::

### M3 Off-chain

In accordance with the delivery schedule outlined in the last milestone, Orcfax
provided BlinkLabs with the first batch of records to demonstrate infrastructure
adherence to SOC2 standards.

Batch one requirements can be found below.

<!-- markdownlint-disable MD013 -->

<iframe src="https://docs.google.com/spreadsheets/d/1Vdh2nhreVkGP570KCTfuBhWaAzFnWzjg/preview" width="640" height="480" allow="autoplay"></iframe>

<!-- markdownlint-enable MD013 -->

Each of these has been accepted by BlinkLabs as satisfactory, and a letter
evidencing progress was provided by their staff. The letter includes notes where
BlinkLabs requested, and received, additional evidence to meet specific
requirements within the batch.

![BlinkLabs Confirmation](/img/2025-01-08--batch-1-audit-progress.png)

Future milestones will address the remaining batches per the schedule outlined
in Milestone 2.

## Milestone 4

After accepting the audit material in the previous milestone, the audit
continued, following the batch delivery schedule outlined in milestone 2. The
following constitutes feedback received from each auditor.

### M4 On-chain

TxPipe provided their final report in milestone three; this portion of the
Orcfax audit is complete.

### M4 Off-chain

In accordance with the delivery schedule outlined in the milestone two, Orcfax
provided BlinkLabs with the second batch of records to demonstrate
infrastructure adherence to SOC2 standards.

Batch two requirements can be found below.

<!-- markdownlint-disable MD013 -->

<iframe src="https://docs.google.com/spreadsheets/d/1Sf_U4QYYzyywKI-nnNprMZ1Nz14nIzY9/preview" width="640" height="480" allow="autoplay"></iframe>

<!-- markdownlint-enable MD013 -->

Each of these has been accepted by BlinkLabs as satisfactory, and a letter
evidencing progress was provided by their staff. The letter includes notes where
BlinkLabs requested, and received, additional evidence to meet specific
requirements within the batch.

![BlinkLabs Confirmation](/img/2025-12-30--batch-2-audit-progress.png)

Future milestones will address the remaining batches per the schedule outlined
in Milestone 2.

## Milestone 5

A final report containing auditor findings, recommendations, and summary of
Orcfax team remediation actions in response to audit.

## Final Milestone
