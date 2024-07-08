---
id: ITN Manual
sidebar_position: 4
slug: /itn-manual
---

# Incentivized Testnet manual

This section will be routinely updated and added to in order to keep our
validators apprised of the most current information pertaining to the upcoming
Incentivized Testnet (ITN). Content will also detail the ITN’s structure,
requirements for participation, and the rewards system which will be used to
encourage robust participation and network growth.

## Rationale

Orcfax’s upcoming Incentivized Testnet (ITN) is a major step in enhancing the
decentralized oracle infrastructure on the Cardano blockchain. This ITN
initiative prepares the network for a smooth Mainnet launch, offering validators
a platform to deeply engage with Orcfax.

## ITN rollout

The ITN will progress through four phases, each adding additional layers of
validator node functionality:

### Phase 1: Data collection for CEXes

During this phase, Validators will begin decentralizing the collection function
of the Oracle network. Validators will initially run a limited suite of software
responsible for the collection of data from centralized exchanges which have
been identified as primary sources of information. Validators will then
participate in funneling that data to the Orcfax centralized validator and
publisher.

### Phase 2: Incorporating DEX data

Validators will now be able to collect the on-chain data from Cardano DEXes,
which underpin Orcfax CNT feeds, and will do so by leveraging their own instance
of a cardano node.

Validators will continue to send all data to the Orcfax centralized validator
and publisher.

### Phase 3: Decentralized validator protocol

During this phase, validators will begin decentralizing the validation function
of the Orcfax network by running validator software. However, the publication of
Fact Statements to the blockchain will remain controlled by the Orcfax
centralized publisher.

This phase will also see the implementation of a consensus mechanism which will
enable the network to elect a single validator for submitting a verified Fact
Statement to the Orcfax’s publisher.

### Phase 4: Decentralized publication & Mainnet soft launch

The final phase will see all validators with the functional ability to
participate in collection, validation and publication on-chain (when nominated).

During this phase, the consensus mechanism will be expanded so as to select a
quorum of validators with approved data in order to then elect one to publish
their Fact Statement on-chain and be rewarded for it.

After this phase has been tested successfully, we will fully move to Mainnet.

## Joining the Incentivized Testnet

Commitment will key for those participating in the ITN. We expect participants
to engage earnestly with the process, dedicating the necessary time and energy.
This will include actively providing feedback that will be instrumental in
refining and strengthening the Mainnet protocol.

To join the ITN, participants must meet the following:

### Validator License

Initially, participants may only be required to hold a validator license on a
Mainnet wallet. However, as we progress through the more advanced phases of the
ITN, participants will also need one on Testnet.

Holding a validator license on Mainnet will allow participants to mint one on
Testnet.

```text
NB
ITN rewards cannot be earned without a valid license.
```

### 500,000 FACT deposit

Participants need to maintain this balance in their Mainnet wallet, which will
later need to be secured in a smart contract on the Testnet with tFACT
(Testnet FACT).

### Hardware and Infrastructure

During [Phase 1](#phase-1-data-collection-for-cexes) of the ITN, the hardware
requirements will be minimal to handle the tasks involved. Participants should
expect to meet the following:

* A broadband internet connection
* 2GB of RAM
* A single CPU

However, as we progress through the ITN, the complexity and demands will
increase. Because of this, Participants should consult our
[Hardware Requirements](technical-requirements#hardware) section while also
anticipating that these requirements will change as development, and ITN phases,
progress.

### Software requirements

Starting with [Phase 2](#phase-2-incorporating-dex-data), participants will be
expected to operate more taxing software (eg a Cardano node, Ogmios, etc.).

Participants should consult our
[Software Requirements](technical-requirements#software) section while also
anticipating that these requirements will change as development, and ITN phases,
progress.

### Knowledge requirements

Participants must be able to run a Linux server and install
various software packages, including those provided by Orcfax.
Participants should be capable of updating both the operating system and any
installed software packages to stay up to date with security and any required functionality.

While it is not a requirement at the outset, having an understanding of the
Cardano node and its underlying protocols is highly recommended to facilitate a
smoother adaptation to the ITN environment.

## ITN Rewards and Calculation Method

ITN participants will operate software that initially collects, later validates,
and ultimately publishes Fact Statements on-chain. The completion of each of
these functions by participants will be recorded and used as metrics for the
calculation of $FACT rewards throughout the ITN.

### Monthly rewards pot

For each month of the ITN, a specific amount of FACT tokens will be allocated
for validator rewards. The first month will make 1,500,000 $FACT available for
ITN participants to claim. This amount will be adjusted monthly to balance the
rewards, based on the required effort and actual validator participation.

### Rewards calculation method

Rewards will be calculated based on the daily number of collections,
validations, and publications, multiplied by each validator’s ITN
[multiplier](https://status.orcfax.io/validators).

The actual rewards accrued per validator will be proportional to their
participation in a given day relative to all other validators.

```text
Example
if a validator has collected 5% of all fact statements on a specific day,
they will receive 5% of that day’s available rewards (after applying the ITN
multiplier). This method ensures that optimal uptime and efficient validator
setup will yield the highest possible rewards.
```

Validators will be able to use the Orcfax Validator Dashboard to track their
metrics and corresponding rewards. You can find a basic ITN rewards calculator
[here][calc-1].

[calc-1]: https://docs.google.com/spreadsheets/d/1aH4Zwtn8KUTtrdzBBZFK1_Kulb7_a4uJGjzLhmPTLFc/edit?source=post_page-----9bc1506da743--------------------------------&gid=1978771855#gid=1978771855

### Maintenance periods

During announced maintenance periods, such as when Orcfax transitions to a new
ITN phase or addresses specific issues, no rewards will be distributed. Excess
rewards not distributed for a given month due to these situations will be moved
back to the validator allocation.

If validators are unable to earn rewards due to unscheduled maintenance or
unexpected issues, they will receive equal rewards for those days.

```text
Example
If on a given day there are 60 registered ITN participants, and the network
experiences unscheduled maintenance or unexpected issues, the available rewards
for that day will be equally divided among participants.
```

### Reward claiming process

As participants accumulate rewards, they will be able to track them on our
Validator Dashboard, and will be able to claim their accrued rewards at any
given time.

This approach prevents scheduled monthly releases that might affect price action
and cause more volatility.

To claim rewards:

1. Send a small amount of ADA to a given address (covering the minimum UTXO and
transaction fees)
1. Shortly after, participants will receive their $FACT rewards.

This process can be repeated as often as a validator wishes to claim their
rewards.

#### Vesting method

We are investigating whether the addition of a vesting method to the claiming
process will be possible before ITN goes live. If we find a way to add this
feature, we will implement it. However, we cannot guarantee at this moment that
we will be able to do so.
