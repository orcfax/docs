---
id: The Cardano Open Oracle Protocol
sidebar_position: 3
slug: /coop
---

The Orcfax oracle service uses the Cardano Open Oracle Protocol
([COOP](https://github.com/mlabs-haskell/cardano-open-oracle-protocol/))
to publish and format its data feeds. The protocol constitutes a set of
technical guidelines that specify a process, and format, for the publication and
consumption of off-chain data by smart contracts on the Cardano blockchain. The
Orcfax team developed the Cardano Open Oracle Protocol as a Catalyst funded
research project that maximizes the eUTXO model and design principles in order
to demonstrate a cost-sensitive, post-Vasil native method for publishing secure,
signed, datums on-chain for Reference Input consumption by Cardano dApps.

The initial version of COOP was developed in collaboration with
[MLabs](https://mlabs.city/) consultancy. These guidelines and specification in
COOP are free, open-source, and can be implemented by any other project seeking
to develop their own Cardano oracle feeds.

By making it freely available to developers, Orcfax has established the protocol
as one of many well-structured tools and schemas that will be provided to
community members in order to aid in viewing and consuming trustworthy off-chain
data in their smart contracts.

R&D on the protocol is ongoing, and our team continues to find ways to bring
value to Orcfax products. The Orcfax team has since onboarded its own Plutus
development in-house and expanded on the beta-version of COOP; the subsequent
version included a full schema.org, JSON-LD compliant Cardano datum
specification that anchors machine-readable fact-statements in the worlds' most
decentralized and stable L1 blockchain network.

Current work on the protocol is being done in collaboration with the same MLabs
team as our teams. This updated version is working towards an optimized COOP
deployment that will include, among other things, an improved datum structure to
further increase cost efficiency and ease of integration for dApps.

### Levering eUTXO strengths
The Cardano open oracle protocol (COOP) was designed to take advantage of the
[Cardano CIP-31](https://cips.cardano.org/cips/cip31/) reference inputs
enhancements introduced in Cardano network's Vasil hard fork. During the design
process, the primary design goals for the Cardano Open Oracle Protocol (COOP)
were to leverage CIP-31 in order to provide:

* Financial sustainability – minimize the cost and deposit needed to post,
maintain, and use COOP datum in eUTXOs, providing opportunities to share costs
amongst stakeholders.
* Data accessibility – minimize the probability of datum payloads not being
available for reference by downstream dApp scripts.
* Security – minimize the risk of exposure for the cryptographic keys used in
verifying the authenticity of COOP datums.

COOP was able to meet each of these design goals. The reference inputs
within each Orcfax feed allow the data provider (Orcfax) to publish data points
once, while simultaneously allowing multiple consumers to use the data point in
on-chain dApp scripts.

This enhancement allows a datum written to a single Cardano eUTXO to be read by
multiple consumers without competing with each other for exclusive access to
a transaction output.
