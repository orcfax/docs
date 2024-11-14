---
id: Signing-key aliasing
sidebar_position: 99
slug: /signing-key-aliasing
---

# Signing-key aliasing

Validators need to be able to sign messages without their primary keys being
made available to a live networked node.

If a node is compromised a primary signing key must remain safe for the node
operator and the network itself.

For the node to be able to recover it must be possible to [rotate][key-rotation]
the signing key while still keeping it associated with the user's license and
stake.

We do this through signing-key aliasing.

## Process for signing-key aliasing

1. Install the `cardano-cli`
1. Create a new payment address on mainnet
1. Construct and send a self transaction with custom metadata

At the end of this process a user will have a new (aliased) public/private key
signing pair that is linked to their accounts holding the Orcfax License and
staked $FACT.

### 1. Install the cardano-cli

Operators will need to install the `cardano-cli` which is distributed as part of
the [cardano-node][cardano-node-1]. This can be done on your local machine.

Download the latest release asset for your platform (e.g linux, macos, or win64)
and extract its contents.

The `cardano-cli` is accessed from the node's `bin` folder, e.g. if installed in
your home directory: `/home/<user>/cardano-node/bin/cardano-cli`.

Either move the contents of the bin folder to a directory that’s part of your
PATH (or add it to your PATH) e.g. in the example below, replacing `<user>` with
the name of your user's home folder:

```sh
export PATH=$PATH:/home/<user>/cardano-node/bin/
```

To verify it is installed correctly, run:

```sh
cardano-cli --version
```

[cardano-node-1]: https://github.com/IntersectMBO/cardano-node/releases
[key-rotation]: https://csrc.nist.gov/glossary/term/key_rotation

### 2. Create a new payment address on mainnet

#### Create a new verification (`vkey`) and signing (`skey`) key pair

```sh
cardano-cli address key-gen \
 --verification-key-file payment.vkey \
 --signing-key-file payment.skey
```

#### Build the new payment address

```sh
cardano-cli address build \
 --payment-verification-key-file payment.vkey \
 --out-file payment.addr \
 --mainnet
```

#### Calculate the `vkey` hash

```sh
cardano-cli address key-hash \
  --payment-verification-key-file payment.vkey \
  --out-file payment.hash
```

:::note

At this point, you should have the following files in your working directory:

-   `payment.addr`
-   `payment.skey`
-   `payment.vkey`
-   `payment.hash`

:::

You will need to send the contents of the `payment.hash` file as part of the
custom metadata in the next step. It should look something like:
`37bf5119bb8ea27ad0796f04951456ad16748001c78aea8cab2b49c0`.

Later, you will also need to make the `payment.skey` created above available on
the collector node you will be running in the ITN. This is described further
[here](/phase-1-manual#cron).

### 3. Construct and send a self transaction with custom metadata

Finally, to complete the process, you will need to construct a transaction to
yourself using the wallet that holds your Orcfax Validator License.

:::note

You are only sending it back to yourself and will need to do this in the future
if you need to alias your address again.

:::

The transaction **must** be constructed as follows:

1. Send exactly `1.24601` in ADA
2. Attach your Orcfax Validator License to the transaction <br/> **(IMPORTANT:
   this allows Orcfax to index the transaction using the policy ID.)**
3. Add the custom metadata

The metadata label must be `"674"` and must have the following 3 fields in
order:

-   `"REGISTER"`
-   `"ITN"`
-   `"<YOUR_PAYMENT_HASH>"`

:::info[NB.]

The metadata fields will need to be on separate lines so as to fit within the
Cardano metadata character limit (max-length: 64 bytes).

For more information, refer to the following Cardano transaction metadata
specifications:

-   [CIP-20][md-1]
-   [Schema][md-2]
-   [JSON Conversion][md-3]

:::

:::note

If using eternl wallet, you will need to click `options` and then
`Custom Metadata` to add the metadata. `NoConversions` should be selected.

:::

An example transaction that results in the correct metadata can be seen
[here][tx-1] and should look like this:

```json
{
    "674": {
        "msg": ["REGISTER", "ITN", "<YOUR_PAYMENT_HASH>"]
    }
}
```

If all looks good, sign and complete the transaction.

[md-1]: https://cips.cardano.org/cip/CIP-20
[md-2]: https://developers.cardano.org/docs/transaction-metadata/#schema
[md-3]:
    https://developers.cardano.org/docs/get-started/cardano-serialization-lib/transaction-metadata/#json-conversion
[tx-1]:
    https://cexplorer.io/tx/791c3d699f1236a227edd611dc6408034523b98858cd15b4b495415c2835a242/metadata#data

## What Orcfax will see

Orcfax will be monitoring the Cardano network for the ADA value (`1.24601`) and
NFT policy ID (`0c6f22bfabcb055927ca3235eac387945b6017f15223d9365e6e4e43`).

When a transaction is registered, metadata is expected, the message will be
processed, and the sending address compared against all known license holders.

:::info[NB.]

If the wallet holds a validator license and the correct amount of staked $FACT
it will be eligible for participation in the ITN.

There is no need to deregister an address as this process only needs to be done
to claim ITN rewards.

If you find you have a need to change your secondary (aliased) address then you
can submit a new transaction and it will not affect your ability to participate
in the ITN.

:::

Secondary (aliased) addresses, validator license wallets, and staked $FACT will
be checked at runtime at all times and so information about participation will
remain up-to-date if validator licenses change hands.
