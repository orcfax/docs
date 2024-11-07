---
id: Auditability
sidebar_position: 4
slug: /auditability
---

# Auditability

## Standards-compliant audit logs

Can oracle solutions be trusted if they cannot, or will not, demonstrate how
their source data was collected and validated? We don't think they should be.

As a response to this question, Orcfax generates standards-compliant archival
packages that are made available permissionlessly so that anybody has the
ability to audit the flow of Orcfax data collection, validation, and
publication.

### The Orcfax Explorer

To demonstrate the audit-enabling function and re-usability of these archival
packages, while further simplifying the auditing process for users, Orcfax
launched its [Orcfax Explorer][explorer-1]; this tool provides a user friendly
dashboard which enables users to quickly and easily navigate all data published
by Orcfax, along with complete documentation for all processes leading to
publication.

Each Orcfax Fact Statement that is published on the Cardano blockchain has a
corresponding audit trail that documents how the primary source data was
collected and validated before it was published as a Cardano transaction datum.
These audit logs are marked up using both industry-standards and open-data
standards that enable machine-readablility, like [IETF Bagit][bagit-1], which
improves digital repository interoperability for digital archival packages.

While navigating through the Explorer, users can click on a Fact Statement card
to see the detailed summary for that Fact Statement. The Archive Explorer viewer
loads the archival package from the Arweave network (via Arkly.io) and
provides the user with an intuitive view of all the audit log files.

Click on the link below to view a walkthrough of the Orcfax Explorer.
[![Explorer walkthrough](https://img.youtube.com/vi/MVLOBT58PlA/0.jpg)](https://www.youtube.com/watch?v=MVLOBT58PlA)

This product brings additional value to the Orcfax solution by providing tooling
for users which enables them to freely search for, and review, all Fact
Statements published by Orcfax. The Explorer does this through purposeful
user-centered design decisions which have prioritized accessibility and ease of
use for a dynamic and diverse user group.

Orcfax will continue to build upon this service in order to deliver meaningful
user tools which allow them to "trust but verify".

[explorer-1]: https://explorer.orcfax.io/
[bagit-1]: https://datatracker.ietf.org/doc/rfc8493/

## Future value

The archival packages created by Orcfax are described using
[Schema.org][schema-1] and [JSON-LD][jsonld-1] compliant taxonomies, which have
been purposefully selected in order to enrich Orcfax data. Additionally, by
leveraging these taxonomies, Orcfax makes its outputs
[Linked Data][linkeddata-1] and [AI-training][ai-1] compatible, which
dramatically enhances downstream value.

JSON-LD is the most widely used serialization of the Resource Description
Framework (RDF); this framework ensures that data is machine-readable.
And schema.org is the single most impactful markup language for making any type
of metadata machine-readable. In Orcfax's case, that means metadata related to
[Claims][claim-1] made about events happening in the real world.

The use of these taxonomies, and the resulting highly structured data, will
perfectly position Orcfax feeds to serve as the source of a growing data lake of
real world Fact Statements that will have many secondary reference uses beyond
DeFi oracle publication. The highly machine and human readable data lake of
validated Fact Statements can be used, for example, to train enterprise or
personal AI models with reliable real-world data.

Some of the most [current research on AI][ai-2]
makes it clear that the in-deterministic nature of Large Language
Models (LLM) cannot be relied upon for factual citations; these technologies
need to be supported and trained by highly structured Fact Statements about the
real world that humans inhabit. We anticipate that the Orcfax protocol, anchored
by the decentralized resiliency of the Cardano blockchain network, will have the
ability to provide this foundational layer.

We anticipate a suite of enterprise service layers on top of this data lake of
decentralized, validated Fact Statements as a secondary revenue stream for the
Orcfax protocol once we reach a critical mass of feed types, data sources, and
validator nodes.

[schema-1]: https://schema.org
[jsonld-1]: https://json-ld.org/
[linkeddata-1]: https://en.wikipedia.org/wiki/Linked_data
[ai-1]: https://www.telusinternational.com/insights/ai-data/article/how-to-train-ai
[claim-1]: https://schema.org/Claim
[ai-2]: https://www.youtube.com/watch?v=cEyHsMzbZBs
