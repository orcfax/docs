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

[cat-1]:
    https://projectcatalyst.io/funds/12/f12-cardano-use-cases-product/orcfax-explorer-improving-trust-but-verify

## Problem statement

Users that rely on external oracle data to trigger their DeFi financial
transactions need assurances that it can be trusted, but this information is
difficult for a human to trace and read.

### Proposed solution

The Orcfax Explorer allows users to "trust but verify" the oracle data that
their Cardano dApps use. We will enhance it with visualizations, audit log
downloads, real-time stats and incident reports.

## Milestone 1

Orcfax developed a dashboard page on the Orcfax Explorer that utilizes highly
informative visualizations to aid users in sense making. This dashboard
highlights several new features that were the direct result of this milestone.

What follows is a mapping of <u>what was promised</u> for Milestone 1 to the
<u>newly integrated explorer features</u>. Links will direct readers to
additional context and the relevant code enhancements for each.

-   Orcfax feed price charts
    -   [Feeds list page][m1-1]
    -   [Feed details page][m1-2]
    -   [Feed price charts][m1-3]
-   State change timelines
    -   [Show calculation details on UI][m1-4]
-   Data provenance
    -   [Display sources][m1-5]
    -   [Show collection details on UI][m1-6]
    -   [Show validation details on UI][m1-7]

These Orcfax Explorer upgrades give users an enhanced ability to verify the
authenticity and provenance of the collected data. While this information has
been present within our archival packages from the beginning, these enhancements
aid users by surfacing the salient archival details and visualizing them in a
more accessible manner.

For test cases, we have recorded a walkthrough of the [Orcfax Explorer][m1-8] so
that users can see how the new features work in tandem to deliver an incredible
explorer experience. This walkthrough also serves as a resource for users
looking to better understand the upgrades within the context of the explorer UI.

[![Explorer walkthrough](https://img.youtube.com/vi/MVLOBT58PlA/0.jpg)](https://youtu.be/At8AoJ6f_zA?feature=shared)

[m1-1]: https://github.com/orcfax/explorer.orcfax.io/issues/10
[m1-2]: https://github.com/orcfax/explorer.orcfax.io/issues/9
[m1-3]: https://github.com/orcfax/explorer.orcfax.io/issues/8
[m1-4]: https://github.com/orcfax/explorer.orcfax.io/issues/4
[m1-5]: https://github.com/orcfax/explorer.orcfax.io/issues/2
[m1-6]: https://github.com/orcfax/explorer.orcfax.io/issues/3
[m1-7]: https://github.com/orcfax/explorer.orcfax.io/issues/5
[m1-8]: https://explorer.orcfax.io/

## Milestone 2

Orcfax developed new functionality for the Orcfax Explorer which allows users to
download and read the audit log package for a given fact statement offline on
their own computers; this new feature is the Explorer Viewer.

The upgrades which enable this functionality are now included in the public
github explorer [repo][m2-1], along with additional context, source code, tests,
and user documentation to aid in use.

Orcfax published the announcement for our explorer feature upgrade on [X][m2-2]
and [Discord][m2-3].

For test cases, we recorded a walkthrough of the explorer so that users can see
how the new features work in tandem to deliver an incredible Explorer Viewer
experience. This walkthrough also serves as a resource for users looking to
better understand the upgrades within the context of the explorer UI.

[![Explorer walkthrough](https://img.youtube.com/vi/MVLOBT58PlA/0.jpg)](https://www.youtube.com/watch?v=bhoPL5H_AWM)

[m2-1]: https://github.com/orcfax/explorer.orcfax.io/issues/13
[m2-2]: https://x.com/orcfax/status/1854221701849997411
[m2-3]:
    https://discord.com/channels/918870284331802674/1082742450268942386/1305649489478160454

## Milestone 3

Orcfax has developed new features for the Orcfax Explorer which results in new
dynamic displays; the new features enhance the existing dashboard page so that
it now displays information about Orcfax network activity in real time.

The new feature set for the explorer brings the following changes:

-   The dashboard now has a section which dynamically displays statistics
    relating to node participation
    -   Identifies when each node last published.
    -   Identifies the feed each node last published to.
    -   Identifies the total number of publications (i.e. Facts) for each node.
    -   Provides the status/health of each node.

The upgrades which enable this functionality are now included in the public
github explorer [repo][m3-1] along with additional context.

For test cases, we recorded a walkthrough of the explorer so that users can see
how the new features work in tandem to deliver an incredible Explorer Viewer
experience. This walkthrough also serves as a resource for users looking to
better understand the upgrades within the context of the explorer UI.

[![Explorer walkthrough](https://img.youtube.com/vi/MVLOBT58PlA/0.jpg)](https://youtu.be/8kPMwpoXhN0?feature=shared)

[m3-1]: https://github.com/orcfax/explorer.orcfax.io/milestone/3?closed=1

## Milestone 4

Orcfax has developed new features for the Orcfax Explorer which enables viewers
to access real-time network health statistics and allows them to subscribe to
network updates. These features were developed to provide users and integrators
access to network notifications and to provide enhanced access to incident
reports during network events.

The new feature set for the explorer brings the following changes:

-   Adds a [landing page to a Status Dashboard with key statistics][m4-1]
-   Adds [“Incidents” to Status Dashboard][m4-2]
-   Adds [“Network Updates” to Status Dashboard][m4-3]
-   Adds an [RSS Feed Url Builder to Status Dashboard][m4-4]
    -   Allows Orcfax to [Serve Orcfax RSS Feed from Status App][m4-5]
-   Provides an [index of Sources for the Orcfax RSS Feed][m4-6]

These new features are now included in the public github [explorer repo][m4-7]
where we provide additional context and the relevant code enhancements for each.

For test cases, we have recorded a walkthrough of explorer.orcfax.io so that
users can see how the new features work in tandem to deliver an incredible
Explorer Viewer experience. This walkthrough also serves as a resource for users
looking to better understand the upgrades within the context of the explorer UI.

[![Explorer walkthrough](https://img.youtube.com/vi/MVLOBT58PlA/0.jpg)](https://youtu.be/fjjgkOZrNnk?si=y4TwO2e3sCqOzE1l)

[m4-1]: https://github.com/orcfax/status.orcfax.io/issues/3
[m4-2]: https://github.com/orcfax/status.orcfax.io/issues/4
[m4-3]: https://github.com/orcfax/status.orcfax.io/issues/4
[m4-4]: https://github.com/orcfax/status.orcfax.io/issues/5
[m4-5]: https://github.com/orcfax/status.orcfax.io/issues/2
[m4-6]: https://github.com/orcfax/status.orcfax.io/issues/1
[m4-7]: https://github.com/orcfax/explorer.orcfax.io/milestone/4?closed=1

## Final Milestone
