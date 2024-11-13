---
id: Signing-key aliasing
sidebar_position: 99
slug: /signing-key-aliasing
---

# Signing-key aliasing

Validators need to be able to sign messages without their primary keys being
made available to a live networked node.

If a node is compromised a primary signing key must remain safe for the node
operator and the network itself. For the node to be able to recover it must be
possible to switch a signing key out for another while associating it with a
user's license and stake.

We do this through signing-key aliasing.

## Process for signing-key aliasing

At the end of this process a user will have a new (aliased) public/private key
signing pair that is linked to their accounts holding the Orcfax License and
staked $FACT.

1. Each user holding a license and who wants to participate in the ITN creates a
new payment verification (vkey) and signing key (skey) on mainnet.
1. Given a new payment address, create a transaction for their primary
wallet (e.g. internal transaction on Eternl) with metadata listing the
verification key-hash with the wallet NFT attached.

### Example process and transaction

#### Create a new dAPP address  (secondary address)

##### Install the cardano-cli

Operators will need to install the `cardano-cli`. The `cardano-cli` is
distributed as part of the [cardano-node][cardano-node-1] and accessed from the
node's `bin` folder, e.g. if installed in your home directory:
`/home/<user>/cardano-node/bin/cardano-cli`. It is idiomatic to add the `bin`
directory to your local `$PATH`, e.g. in the example below, replacing `<user>`
with the name of your user's home folder.

```sh
export PATH=$PATH:/home/<user>/cardano-node/bin/
```

[cardano-node-1]: https://github.com/IntersectMBO/cardano-node/releases

##### Create verification and signing key pair

```sh
cardano-cli address key-gen \
 --verification-key-file payment.vkey \
 --signing-key-file payment.skey
```

##### Create address

```sh
cardano-cli address build \
 --payment-verification-key-file payment.vkey \
 --out-file payment.addr \
 --mainnet
```

##### Calculate the verification key hash

```sh
cardano-cli address key-hash \
  --payment-verification-key-file payment.vkey \
  --out-file payment.hash
```

Let’s assume the `payment.hash` file contains:

“`37bf5119bb8ea27ad0796f04951456ad16748001c78aea8cab2b49c0`”. The metadata label
and content should be:

|Metadata Label | Metadata Content | ADA Value |
|---|---|---|
| 674  | REGISTER <br/>ITN<br/> 37bf5119bb8ea27ad0796f04951456ad16748001c78aea8cab2b49c0 | 1.122601  |

### Transaction

1. Construct a transaction to send `1.122601` in ADA from your primary wallet (
the one containing your Orcfax validator license) back to itself.
1. Add the metadata label ‘674’ and metadata as described above. The data will
need to be on separate lines (different fields) so as to fit within the Cardano
metadata character limit (max-length: [64 bytes][md-1]).
1. Attach the Orcfax Validator License to the transaction (IMPORTANT: this
allows Orcfax to index the transaction using the policy ID. You are only
sending it back to yourself and will need to do this in future if you need to
alias your address again.)
1. Sign and complete the transaction.
1. Ensure that the `payment.skey` created above is available on the collector
node you will be running in the ITN.

[md-1]: https://developers.cardano.org/docs/transaction-metadata/#schema

### What Orcfax will see

Orcfax will be monitoring the Cardano network for the ADA value
(1.122601) and NFT policy ID
(`0c6f22bfabcb055927ca3235eac387945b6017f15223d9365e6e4e43`). When a transaction
is registered, metadata is expected, the message will be processed, and the
sending address compared against all known license holders.

>NB
>
>If the wallet holds a validator license and the correct amount of
staked $FACT it will be eligible for participation in the ITN. There is no need
to deregister an address as this process only needs to be done to claim ITN
rewards. If you find you have a need to change your secondary (aliased) address
then you can submit a new transaction and it will not affect your ability to
participate in the ITN.

Secondary (aliased) addresses, validator license wallets, and staked $FACT
will be checked at runtime at all times and so information about participation
will remain up-to-date if validator licenses change hands.

### Example transaction

An example transaction that results in the correct metadata is shown
[here][tx-1].

[tx-1]: https://cexplorer.io/tx/791c3d699f1236a227edd611dc6408034523b98858cd15b4b495415c2835a242/metadata#data

![Orcfax solution overview](/img/2024-11-12-example-metadata.png)
