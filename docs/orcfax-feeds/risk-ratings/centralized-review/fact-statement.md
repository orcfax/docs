---
id: centralized-review-1
sidebar_position: 1
slug: /centralized-review-fact-statement
---

import CodeBlock from '@theme/CodeBlock';
import factStatement from '!!raw-loader!/schema/risk-rating/centralized-review/fact-statement.json';

# Fact Statement

A description of the types/properties relevant to a
`fact-statement.json`.

Orcfax utilizes the following Schema.org types and properties in its Fact
Statement records. The description provided by [Schema.org][schema-1]
follows each; if Orcfax maintains a more nuanced understanding, an additional
definition will be provided. If the term appears in its own definition, it will
be replaced when possible with a \[synonym\] in order to aid understanding.

[schema-1]: https://schema.org/

## Schema.org Types

| Type     | Schema.org description     | Orcfax description     |
| -------- | ---------------------------| ---------------------- |
| -------- | ---------------------------| ---------------------- |

Types under review for development

* [Review](https://schema.org/Review)
* [Claim](https://schema.org/Claim)
* [FinancialProduct](https://schema.org/FinancialProduct)
* [Rating](https://schema.org/Rating)
* [ProductGroup](https://schema.org/ProductGroup)

## Schema.org Properties

| Property     | Type     | Schema.org description     | Orcfax definition     |
| ------------ | -------- | ---------------------------| --------------------- |
| ------------ | -------- | ---------------------------| --------------------- |

The values for `bestRating` and `worstRating` are further described in Xerberus
[docs][x-1].

| Rating | Explanation |
| ------ | ----------- |
| AAA - A | Investment Grade |
| BBB - B | Speculative |
| CCC - C | Highly Speculative |
| D | Junk |

[x-1]: https://xerberus.gitbook.io/documentation/apis/risk-ratings/cardano#risk-scores

## Fact Statement example

<CodeBlock language="jsx">{factStatement}</CodeBlock>

<!-- markdownlint-disable MD013 -->
<a target="_blank" href="/schema/risk-rating/centralized-review/fact-statement.json" download="fact-statement.json">Download</a>
<!-- markdownlint-enable MD013 -->
