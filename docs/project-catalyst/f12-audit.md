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

[cat-1]: https://projectcatalyst.io/funds/12/f12-cardano-use-cases-product/orcfax-architecture-audit

## Problem statement

Cardano dApps use Orcfax oracle data to trigger transactions with significant
financial outcomes. Their users need assurance from a qualified auditor that
Orcfax delivers authentic and accurate data.

### Proposed solution

Orcfax will procure auditing services for its on-chain and off-chain
architecture, perform fixes and enhancements as per auditor recommendations and
report on the audit status and outcomes.

## Project management

```mermaid
gantt
    title Orcfax architecture audit
    dateFormat YY-M-D
    axisFormat %m-%d
    tickInterval 1week
    weekday monday
    excludes    weekends
    %% gantt covers both on-chain and off-chain tasks (on#, off#)
    section Milestone 1
        Identify on-chain auditors     :done,            on1, 24-8-1, 24-8-11
        Identify off-chain auditors    :done,            off1, 24-8-1, 24-8-11
        Request quotes (on)            :done,            on2, 24-8-11, 24-8-20
        Request quotes (off)           :done,            off2, 24-8-11, 24-8-20
        Sign contract (on)             :crit, done,      on3, 24-8-20, 5d
        Announce - Twitter             :crit, done,      on4, after on3, 2d
        Announce - Discord             :crit, done,      on5, after on3, 2d
        Off-chain analysis             :active,          off3, 24-8-26, 15d
        Submit evidence                :milestone,       on6, after on5, 1d

        click on4 href "https://x.com/orcfax/status/1828499168609837088/"
        click on5 href "https://discord.com/channels/918870284331802674/1082742450268942386/1278059047571951738"
        %% use the above convention to link out to public deliverables
    section Milestone 2
        Give audit access              :                 on7, after on3, 1d
        Off-chain hardening            :                 off4, after off3, 15d
        Begin Audit (on)               :                 on8, after on7, 15d
        Interim report (on) - Github   :crit,            on9, after on8, 2d
        Submit evidence                :milestone,       on10, after on9, 1d

        click on9 href "https://mermaidjs.github.io/"
    section Milestone 3
        Respond to feedback (on)       :                 on11, after on9, 10d
        Request quotes (off)           :                 off5, after off4, 5d
        Audit (on)                     :                 on12, after on11, 15d
        Sign contract (off)            :                 off6, after off5, 2d
        Give audit access              :                 off7, after off6, 1d
        Begin Audit (off)              :                 off8, after off7, 15d
        Interim report (on) - Github   :crit,            on13, after on12, 2d
        Submit evidence                :milestone,       on14, after on13, 1d

        click on13 href "https://mermaidjs.github.io/"
    section Milestone 4
        Respond to feedback (on)       :                 on15, after on13, 10d
        Interim report -- Github (off) :crit,            off9, after off8, 2d
        Respond to feedback (off)      :                 off10, after off9, 10d
        Audit (on)                     :                 on16, after on15, 15d
        Audit (off)                    :                 off11, after off10, 15d
        Interim report (on) - Github   :crit,            on17, after on16, 2d
        Submit evidence                :milestone,       on18, after on17, 1d

        click on17 href "https://mermaidjs.github.io/"
    section Milestone 5
        Final report (on) - Github     :crit,            on19, after on17, 5d
        Final report (off) - Github    :crit,            off12, after off11, 5d
        Push audit upgrades            :milestone,       on20, after on19, 5d

        click on19 href "https://mermaidjs.github.io/"
        click on20 href "https://mermaidjs.github.io/"
    section Final Milestone
        Closeout report                :crit,            on21, after on20, 5d
        Closeout video                 :crit,            on22, after on20, 2d
        Post-mortem -- Medium          :crit,            on23, after on20, 5d
        Submit evidence                :milestone,       on24, after on23, 1d

        click on23 href "https://mermaidjs.github.io/"
```

## Milestone 1

Orcfax will leverage best practice and precedence within the Cardano ecosystem
to identify auditing firms for and request for the Orcfax architecture audit.

Once identified, Orcfax will finalize a Contract for Services with the selected
audit firm.

### On-chain

Orcfax contacted several auditing firms in order to receive quotes for
performing an audit of its on-chain components.

Our team has selected [TxPipe][m1-1] to go forward with the audit and
successfully signed a contract for services in August of 2024.

* Announcement on [X][m1-2]
* Announcement on [Discord][m1-3]

[m1-1]: https://txpipe.io/
[m1-2]: https://x.com/orcfax/status/1828499168609837088
[m1-3]: https://discord.com/channels/918870284331802674/1082742450268942386/1278059047571951738

### Off-chain

Orcfax contacted institutions in order to receive a quote for performing an
audit of its off-chain components; one of these firms identified several key
areas which Orcfax can address in house before moving forward with the audit
in order to minimize costs.

Our team has begun with a off-chain component analysis and will follow this
review with component hardening.

## Milestone 2

Auditors will release feedback relating to the first review round; this feedback
will be formatted into an audit status report.

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
