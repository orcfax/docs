---
id: Publication
sidebar_position: 5
slug: /publication
---

# Fact statement publication
Example of an Orcfax $FACT statement with all provenance information captured
for future auditability.<br/>
```{
  "@context": "https://schema.org",
  "type": "Claim",
  "description": "The price of 1 ADA at 2023-07-19 16:38:42.364056 is 0.31068563
  84666667 USD",
  "claimInterpreter": "Orcfax",
  "about": {
    "@type": "PropertyValue",
    "name": "ADA price in USD"
  },
  "value": 0.3106856384666667,
  "unitCode": "USD",
  "valueReference": [
    {
      "@type": "PropertyValue",
      "name": "validFrom",
      "value": 1689790926
    },
    {
      "@type": "PropertyValue",
      "name": "validThrough",
      "value": 1689791226
    }
  ],
  "appearance": [
    "message-ADA-USD-Wed-19-Jul-2023-16:38:41-GMT-kraken-collector-0.0.0-dev.jso
    n",
    "message-ADA-USD-Wed-19-Jul-2023-16:38:42-GMT-kucoin-collector-0.0.0-dev.jso
    n",
    "message-ADA-USD-Wed-19-Jul-2023-16:38:42-GMT-coinbase-collector-0.0.0-dev.j
    son"
  ],
  "isBasedOn": {
    "@type": "CreativeWork",
    "name": "validation-ADA-USD-Orcfax-2023-07-19-18:22:06.510809+00:00.json"
  },
  "creator": "Orcfax Validator Node: v0.0.0",
  "identifier": "9168fc06-5de0-4970-b77d-491821284514",
  "license": "https://creativecommons.org/licenses/by/4.0/"
}```
