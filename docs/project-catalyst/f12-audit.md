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

-   Announcement on [X][m1-2]
-   Announcement on [Discord][m1-3]

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

-   Announcement on [X][m1-5]
-   Announcement on [Discord][m1-6]

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

<iframe src="https://drive.google.com/file/d/1AqjBhChi3SVA4jW6ymMbPnnchXKbiaSW/preview" width="640" height="480" allow="autoplay"></iframe>

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

This request for additional access and materials amounts to nearly 200 items.

Orcfax developed the following strategy for accommodating this request: the
Orcfax team will divide these requests into 3 batches of deliverables based on
their category, and volume of requests, with a 4th dedicated to the development
of policies. The latter will be incrementally worked on in conjunction with the
other batches so that the batch 3 & 4 are submitted to BlinkLabs together.

We believe that by dividing the work into these deliverables we will increase
efficiency when responding to any feedback received after batch submission.

## Milestone 3

Orcfax will respond to feedback with code pull requests for software fixes and
enhancements that address any concerns highlighted in the audit feedback.

Auditors will execute a secondary review of Orcfax architecture once the above
changes are committed.

## Milestone 4

If Orcfax has passed its Audit, then proceed to final milestone, otherwise

Orcfax will review secondary review feedback from auditors, formatted into an
audit status report, which assessed changes made in response to the previous
feedback.

If necessary, Orcfax will complete code pull requests for software fixes and
enhancements that address audit concerns in feedback.

## Milestone 5

A final report containing auditor findings, recommendations, and summary of
Orcfax team remediation actions in response to audit.

## Final Milestone
