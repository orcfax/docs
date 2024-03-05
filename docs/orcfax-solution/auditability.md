---
id: Auditability
sidebar_position: 6
slug: /auditability
---

# Auditability

## Standards-compliant audit logs

Can oracle solutions be trusted if they cannot, or will not, demonstrate how
their source data was collected and validated? We at Orcfax strongly believe
that they should not be.

As a response to this question, Orcfax generates standards-compliant archival
packages that are made available permissionlessly so that anybody has the
ability to audit the flow of Orcfax data collection, validation, and
publication.

### The Orcfax Explorer

To demonstrate the audit-enabling function and re-usability of these archival
packages, while further simplifying the auditing process for users, Orcfax
launched its [Orcfax Explorer](https://explorer.orcfax.io/); this tool provides
a user friendly dashboard which enables users to quickly and easily navigate all
data published by Orcfax, along with complete documentation for all processes
leading to publication.

Each Orcfax fact statement that is published on the Cardano blockchain has a
corresponding audit trail that documents how the primary source data was
collected and validated before it was published as a Cardano transaction datum.
These audit logs are marked up using both industry-standards and open-data
standards that enable machine-readable interoperability, like
[IETF Bagit](https://datatracker.ietf.org/doc/rfc8493/), which improves digital
repository interoperability for digital archival packages.

While navigating through the Explorer, users can click on a fact statement card
to see the detailed summary for that fact statement. The Archive Explorer viewer
loads the archival audit log package from the Arweave network (via Arkly.io) and
provides the user with an intuitive view of all the audit log files.

Click on the link below to view a walkthrough of the Orcfax Explorer!
[![Explorer walkthrough](https://img.youtube.com/vi/MVLOBT58PlA/0.jpg)](https://www.youtube.com/watch?v=MVLOBT58PlA)

This product brings additional value to the Orcfax solution by giving users the
ability to freely search for, and review, all Fact Statements published by
Orcfax. The Explorer does this through purposeful user-centered design decisions
which have prioritized accessibility and ease of use for a dynamic and diverse
user group.

## Future value

The archival packages created by Orcfax are described using
[Schema.org](https://schema.org) and [JSON-LD](https://json-ld.org/) compliant
taxonomies, which have been purposefully selected in order to enrich Orcfax
data. Additionally, by leveraging these taxonomies, Orcfax makes its outputs
[Linked Data](https://en.wikipedia.org/wiki/Linked_data) and
[AI-training](https://www.telusinternational.com/insights/ai-data/article/how-to-train-ai)
compatible, which dramatically enhances downstream value.

JSON-LD is the most widely used serialization of the Resource Description
Framework (RDF); this framework ensures that data is machine-readable.
And schema.org is the single most impactful markup language for making any type
of metadata machine-readable. In Orcfax's case, that means metadata related to
[Claims](https://schema.org/Claim) made about events happening in the real
world.

The use of these taxonomies, and the highly structured data as aa result, will
perfectly position Orcfax feeds to serve as the source of a growing data lake of
real world fact statements that will have many secondary reference uses beyond
DeFi oracle publication. The highly machine and human readable data lake of
validated fact statements can be used, for example, to train enterprise or
personal AI models with reliable real-world data.

Some of the most [current research on AI](https://www.youtube.com/watch?v=cEyHsMzbZBs)
progress makes it clear that the in-deterministic nature of Large Language
Models (LLM) cannot be relied upon for factual citations; these technologies
need to be supported and trained by highly structured fact statements about the
real world that humans inhabit. We anticipate that the Orcfax protocol, anchored
by the decentralized resiliency of the Cardano blockchain network, will have the
ability to provide this foundational layer.

We anticipate a suite of enterprise service layers on top of this data lake of
decentralized, validated fact statements as a secondary revenue stream for the
Orcfax protocol once we reach a critical mass of feed types, data sources, and
validator nodes.
