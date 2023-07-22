---
id: Reference
sidebar_position: 7
slug: /reference
---

# Fact statement reference
An exacmple $FACT datum derived from the Orcfax ADA/USD price feed<br/>
```
{
  "@context": "https://schema.org/",
  "type": "PropertyValue",
  "name": "ADA/USD",
  "value": 0.3172074226666667,
  "valueReference": [
    {
      "@type": "PropertyValue",
      "name": "validFrom",
      "value": 1689963052
    },
    {
      "@type": "PropertyValue",
      "name": "validThrough",
      "value": 1689963352
    }
  ],
  "identifier": {
    "type": "PropertyValue",
    "PropertyID": "Arkly Identifier",
    "value": "orcfax:036b901d-b25b-400d-bd44-674af4ed96cf"
  },
  "_:SecurityToken": "32R43243223432432"
}
```
