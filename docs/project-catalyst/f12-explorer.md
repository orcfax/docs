---
id: f12 explorer
sidebar_position: 3
slug: /f12-explorer
---

# Orcfax Explorer: Improving "Trust But Verify

An Explorer feature suite upgrade funded through the Catalyst F12 campaign.

This page will provide documentation pertaining to the execution of the proposal
and links to each of the deliverables required for their respective Milestones.
The full Catalyst proposal can be found [here][cat-1].

[cat-1]: https://projectcatalyst.io/funds/12/f12-cardano-use-cases-product/orcfax-explorer-improving-trust-but-verify

## Problem statement

Users that rely on external oracle data to trigger their DeFi financial
transactions need assurances that it can be trusted, but this information is
difficult for a human to trace and read.

### Proposed solution

The Orcfax Explorer allows users to “trust but verify” the oracle data that
their Cardano dApps use. We will enhance it with visualizations, audit log
downloads, real-time stats and incident reports.

## Milestone 1

Orcfax will develop a dashboard page on the Orcfax Explorer that utilizes highly
informative visualizations to aid users.

The following features were the result of this milestone:

* The ability to [Show validation details on UI][m1-1]

  This information gives users an enhanced ability to to verify the authenticity
  of the collected data by visualizing the validation steps taken on the data
  received by our collector nodes.

* The ability to [show calculation details on UI][m1-2]

    This information explains how data is aggregated and what calculations are
    executed over that data which results in the on-chain value.

* The ability to [show collection details on UI][m1-3]

    This information allows users to trace where data is being pulled from and
    from which entities as feeds are constructed. This gives users an unrivaled
    ability to check the provenance of the data.

* The ability to [display sources][m1-4]

While much of the above information has been present within our archival
packages, the introduction of these visualizations makes it easier for our users
to quickly and efficiently locate pertinent information.

For test cases, we have recorded a walkthrough of explorer.orcfax.io so that
users can see how the new features work in tandem to deliver an incredible
explorer experience. This walkthrough also serves as a resource for users
looking to better understand the upgrades within the context of the explorer UI.

[![Explorer walkthrough](https://img.youtube.com/vi/MVLOBT58PlA/0.jpg)](https://www.youtube.com/watch?v=MVLOBT58PlA)

[m1-1]: https://github.com/orcfax/explorer.orcfax.io/issues/5
[m1-2]: https://github.com/orcfax/explorer.orcfax.io/issues/4
[m1-3]: https://github.com/orcfax/explorer.orcfax.io/issues/3
[m1-4]: https://github.com/orcfax/explorer.orcfax.io/issues/2

## Milestone 2

Orcfax will develop a new feature for the Orcfax Explorer which allows users to
download and read the audit log package for a given fact statement.

## Milestone 3

Orcfax will develop a dashboard page on the Orcfax Explorer that displays
information about Orcfax network activity in real time

## Milestone 4

Orcfax will develop a new Orcfax Explorer feature which notifies users in the
event of a network issue, and provides users with links to incident reports.

## Final Milestone
