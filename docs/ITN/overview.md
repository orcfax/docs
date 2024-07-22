---
id: overview
sidebar_position: 1
slug: /overview
---

# Incentivized Testnet overview

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
validator node functionality; these phases, and their manuals, are listed below:

  * [Phase 1](phase-1-manual): Data collection for CEXes

  * [Phase 2](phase-2-manual): Incorporating DEX data

  * [Phase 3](phase-3-manual): Decentralized validator protocol

  * [Phase 4](phase-4-manual): Decentralized publication & Mainnet soft launch


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

### Technical requirements

The minimum hardware requirements for each phase will be published within their
corresponding manuals; requirements will also be released well in advance of
rollout so that operators have sufficient time to ensure tht they meet the
necessary requirements. Software requirements will be similarly disclosed as ITN
phases progress.

With that said, participants should anticipate that these requirements will
change as development, and ITN phases, progress.

### Knowledge requirements

Participants must possess the skills to operate a Linux server and install
various software packages, including those provided by Orcfax. Additionally,
participants should be capable of updating both the operating system and any
installed software packages to maintain security and functionality.

While it is not a requirement at the outset, having experience operating a
Cardano Node, with an understanding of its underlying protocols, is recommended
in order to facilitate a smoother adaptation to the ITN environment.

## ITN Rewards

ITN participants will operate software that initially collects, later validates,
and ultimately publishes Fact Statements on-chain. The completion of each of
these functions by participants will be recorded and used as metrics for the
calculation of $FACT rewards throughout the ITN.

### Monthly rewards

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

1. Send small amount of ADA to a given address (covering the minimum UTXO and
transaction fees)
1. Shortly after, participants will receive their $FACT rewards.

This process can be repeated as often as a validator wishes to claim their
rewards.
