---
id: faq-1
sidebar_position: 1
slug: /oracle-basics
---

# Oracle basics
## What is an oracle?
Oracles like [Orcfax](https://orcfax.io/), [Chainlink](https://chain.link),
[Charli3](https://charli3.io), etc. are the technical component in blockchain
architectures that deliver data about the real-world to on-chain smart contracts
.

The name is derived from people in the ancient world who delivered messages and
knowledge from the gods to the mortals.

![The oracle at Delphi](/img/oracle-of-delphi-bw.png)

Software oracles process information from online sources such as website content
and open datasets but mostly from server-based application programming
interfaces (API). These are the most common types of oracles and are used, for
example, by algorithmic stablecoins or automated market maker (AMM) exchanges to
monitor for changes in currency exchange rates.

## What is a smart contract?
Smart contracts are software programs that execute conditional logic on
next-generation blockchains like Cardano  (e.g. when event X happens, trigger
action Y).  Because their source code is immutably stored and run on
decentralized blockchain networks, they constrain the range of permissible user
actions and their effects.

This means that they can reasonably be expected to have the same outcome each
time they are triggered. Therefore smart contracts are often referred to as
having "trustless" qualities. The term "trustless" is a popular word to
characterize blockchain technology because its cryptographic proofs and
distributed consensus algorithms ensure that its shared data is authentic,
accurate, and secure without reliance on a trusted third-party to verify the
information.

Smart contracts are the key enabler for the explosion of the trillion-dollar
DeFi industry. What most people don’t realize however, is that the vast majority
of smart contracts are critically dependent on off-chain data
provided by a very small group of oracle service providers.

This is because almost all smart contracts need reliable real-world facts to
serve as inputs to their application logic. This data must be “trustworthy”
because the execution of smart contract logic can have significant economic
and social consequences. Especially considering that the consequences of a
blockchain transaction are irreversible by their very design.

For example:
* A change in the Bitcoin to ADA price may trigger a limit order in a DeFi smart
contract.
* The final score in a sports event may trigger a payout in a betting dApp smart
contract.
* An extreme weather event may trigger a payout for a crop insurance smart contract.
* The words spoken in a political speech and authenticated via blockchain
notarization may trigger policy changes or protests.

## What is the oracle problem?
The blockchain industry refers to the "oracle problem" to refer to the various
issues related to ensuring that on-chain smart contracts can trust real world
data inputs to be authentic and accurate.

The trillion dollar DeFi industry is critically dependent on real-world data
provided by oracles. However, oracle engineering is still in an early stage.
There are still many opportunities to introduce false data about real-world
events into oracle data collection, validation and publication pipelines.

This is a very lucrative attack vector for bad actors as introducing false
oracle data can trigger large financial payouts from smart contract scripts.
Unfortunately, there are significant challenges to preventing a so-called
“man-in-the-middle” attack and proving that external real-world data introduced
to smart contracts can be trusted to be authentic and accurate.

Most oracle providers provide little to no traceability on how their
published, on-chain data is collected and validated to be authentic and
accurate. Their users simply see a single magic data point appear on chain. The
context of creation and use is provided by the on-chain transaction, not the
oracle datum itself.

Most leading oracle platforms are beginning to implement some form of
decentralized oracle pools as another technique to address the oracle problem.
In its purest form, a decentralized oracle pool uses distributed networking and
computation nodes to achieve consensus on the authenticity and accuracy of
source data before it is published on-chain.

Unfortunately, most current implementations do not go this far. Instead they
often receive data from a single, black box provider. They then use an oracle
pool to arrive at a consensus about the *uniformity* of that data and not
necessarily about its *authenticity* or *accuracy*.

**Orcfax is a second-generation oracle that directly tackles

## What is the real world?
![What is the real world?](/img/2023-09-28--Orcfax-What-Is-The-Real-World.jpg)

## What is a fact?

A fact is something that is known to have happened or to exist, especially
something for which proof exists, or about which there is information.
(Cambridge Dictionary, 2021)

Truths can be interpretive, opinionated, exclusionary, contextual or personal,
e.g. "this cylinder makes pretty shadows that are blue and circular".

![Facts lead to truths](/img/2023-09-05--Orcfax--The-Nature-Of-Facts.png)

Fact statements are more definitive, e.g.
"the name of this image file is what-is-true.png". Orcfax publishes fact
statements about the real world to the Cardano blockchain.

![The nature of facts](/img/2023-09-06--Orcfax--Nature-of-Facts.png)
