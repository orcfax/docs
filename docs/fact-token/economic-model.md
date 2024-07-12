---
id: economic model
sidebar_position: 2
slug: /economic-model
---

# Economic model

The FACT token lies at the core of Orcfax's economic model. To access Orcfax
feeds, consumers (e.g. dApps, smart contracts) can use $FACT for payment. While
consumers can also use ADA, these payments are exchanged for FACT tokens,
creating a positive feedback loop that boosts demand for the FACT token.

Since consumers pay for on-chain publications, an increase in consumers leads to
more publications, driving up the demand for the FACT token. The generated $FACT
payments are distributed to entities crucial for network operation and security:
Orcfax Validators and the Orcfax Network.

![Orcfax Economic Model](/img/2024-02--Orcfax-economic-model2.jpg)

Initially, with a relatively low number of consumers and publications after the
decentralized network launches on mainnet, validators and the Orcfax Network
will receive compensation through the
'[Validator Rewards Allocation][rewards-1]'. This allocation, constituting 50%
of the total FACT token supply, rewards Validators and the Orcfax Network. The
amount of FACT tokens per publication from this allocation will decrease over
time. As more consumers start using Orcfax oracle feeds, the increasing FACT
payments from these customers will compensate for the reduced emission from the
Validator Rewards Allocation, and will eventually replace them completely.

Though other FACT holders aren't involved in operating and securing the initial
version of the validator Network (V1), the community has [decided][vote-1] to
allocate a small portion of FACT rewards to be used as rewards for FACT holders
willing to lock their tokens. The estimated APY for doing this is 3-8%. These
rewards will partly come from the Validator Rewards Allocation and partly from
the FACT fees paid by integrators.

[rewards-1]: tokenomics#validator-rewards
[vote-1]: https://app.summonplatform.io/poll/640336f9-0047-4055-91cf-4238ad4d182f

## Monetizing Orcfax feeds

Definitions:

* Base Price: The price of a publication without discount.
* Discount: A specific reduction in price for a publication.
* Price: The net cost of a publication less any discounts.

### Heartbeat feeds

#### Pricing mechanism

* Pricing is based on publications only, independent of whether multiple
publications are combined into one transaction or not.
* Each feed has a base price per publication (e.g. 2 ADA).
* Each participating integrator pays for all their feed publications.
* Feeds with multiple integrators receive a discount. The discounted price per
publication is calculated as follows:
  * $D(n) = MAX(LN(n)/k, Dc)$
  * $P(n) = Po*(1-D(n))$
  * Where:
    * $D(n)$ = Discount percentage
    * $n$ = Number of integrators using the same feed
    * $k$ = Discount constant
    * $Dc$ = integrator specific discount percentage
    * $Po$ = Base price per publication
    * $P(n)$ = Discounted price per publication

Examples:

1. $Po=2$ ADA, $n=1$, $Dc=0%$ :
    * $P(n)=2$ ADA
    * Revenue for Orcfax = 2 ADA
2. $Po=2$ ADA, $n=10$, $Dc=0%$ :
    * $P(n)=1.08$
    * Revenue for Orcfax = 1.8 ADA
3. $P0=2$ ADA, $n=1$, $Dc=25%$ :
    * $P(n)=1.5$
    * Revenue for Orcfax = 1.5 ADA

#### Payment method

* Each integrator has a unique wallet controlled by Orcfax/DAO.
* The explorer/portal estimates the number of publications per feed, per month,
based on the requested interval and deviation, rounding up to account for
periods of high volatility.
* The total estimated number of publications per feed for one month is
multiplied by the base price of each requested feed.
* integrators deposit this total amount in FACT or ADA into their wallet.
  * ADA price is calculated based on the FACT price.
  * This ADA price is fixed for 1 month.
* The start date of actual publication is determined by Orcfax, and later
automatically via the explorer.
* Before the month ends, integrators must deposit for the next month.
* After a full month, and after the next month's deposit has been received,
integrators are credited based on the discounted price formula. The discounted
fee is sent to the corresponding Orcfax/Validator/Staker wallets, and the rest
is refunded to the integrator.
* If a integrator does not pay for a new month, their credit is not processed.
* If the wallet is empty, the feed continues for 7 days into the new month.
After 7 days, if payments are not fulfilled, new fact statements belonging to
the feed will not be published.

#### Modifying/canceling existing Feeds

Imagine two integrators utilize the cer/ADA-USD feed.

* If one integrator decides they need a shorter heartbeat interval, they should
be able to change their feed registration from 1 hour to 30 minutes. Because of
this, both integrators will have their discount adjusted to reflect the
publications which they share.
* Similarly, if five integrators are using the same feed and one terminates
their use of it, the remaining four integrators will pay more as their
discounted price will increase.

Canceling and changing feeds can only start with a new month.

### On-demand Feeds

The price of each on-demand feed will be the base price of that feed with the
addition of a possible surcharge (TBD). Each on-demand publication will include
the fees to pay for them in the same transaction.
