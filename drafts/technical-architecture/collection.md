---
id: Data collection
sidebar_position: 2
slug: /collection
---

# Data collection

The Orcfax oracle service collects data about real world events from multiple
primary sources using a network of decentralized validator nodes.

These nodes are run independently and permissionlessly by anyone that is able to
download our node software and commit a small amount of our [FACT](scorecard)
token as stake.

The node software are signed binaries that ensure each node is running identical
versions of the same code.

The Orcfax node provides a user-interface that allows the operator to manage
their staking and rewards. They also use it to select which Orcfax data feeds
their node will participate (e.g. ADA/USD).

## Data triangulation
The fact statements published by each Orcfax feed are based on data that is collected from at least three independent, primary sources.

Orcfax collects raw data from at least three independent sources to triangulate and average the information. For example, to determine the price of ADA to U.S. dollars, Orcfax nodes will query APIs at Kraken, Binance, and CoinGecko.

triangulation of data is a design principle that Orcfax has adopted as a
method for developing comprehensive understandings of the phenomena which it
report on;

it is a system requirement that each Orcfax feed utilizes a minimum
of three sources (S1, S2, S3, Sn+1) but can accommodate a dynamic number of
sources in order to compensate for type or the need for more sources to achieve
validity.

These three sources can comprise of application programming interfaces
(API’s), internet of things (IoT) devices, weather stations, and crowdsourced
reporting data (eg a series of geotagged photographs).




Example
If the target data was the outcome or score of a football match between
Manchester United and Chelsea, Orcfax nodes could hit a sports website and
scrape the results, do the same for a second, and for the third. At the end, the
node has received information regarding the target from three independent
sources.

Grounding this example, nodes executing their Collection function will receive
at least three API responses similar to the below example.

```
{
  "@context": "https://schema.org",
  "type": "Message",
  "name": "ADA-USD",
  "sender": "api-name",
  "identifier": "",
  "dateReceived": "Wed, 19 Jul 2023 16:38:41 GMT",
  "messageAttachment": {
    "encoding": "application/json;base64",
    "text": ""
  }
}
```




