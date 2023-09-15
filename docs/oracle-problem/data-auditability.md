---
id: Data auditability
sidebar_position: 3
slug: /data-auditability
---

**TLDR; Oracles are not trustworthy if they can't demonstrate how their source
data was collected and validated.**

Billions of dollars of DeFi crypto is exchanged every day based on trusted data
points. Most oracle providers provide little to no traceability on how their
published, on-chain data is collected and validated to be authentic and
accurate. Their users simply see a single magic data point appear on chain. The
context of creation and use is provided by the on-chain transaction, not the
oracle datum itself. **This is a critical flaw**.

Users of the oracle feed and the dApps that rely on them, are left to trust the
brand and security policies of the oracle provider without any verifiable proofs
that the real-world data they're dependent on is authentic and accurate.

## Orcfax: standards-compliant audit logs
To address this shortfall found in many other oracle services, Orcfax
generates standards-compliant
**[archival packages](design#5-archive-data-validation-audit-logs)**
that are made available permissionlessly for auditing the flow of its data
collection validation, and publication.

These archival packages are described using **[Schema.org](https://schema.org)**
, **[JSON-LD](https://json-ld.org/)** compliant
taxonomies that are **[Linked Data](https://en.wikipedia.org/wiki/Linked_data)**
and
**[AI-training](https://www.telusinternational.com/insights/ai-data/article/how-to-train-ai)**
ready to serve as the source of a growing data lake of real world fact
statements that will have many secondary reference uses beyond DeFi oracle
publication.

To demonstrate the auditing function and re-usability of its archival packages,
the Orcfax project hosts a
"**[Fact Statement Explorer](https://explorer.orcfax.io)**" app.
