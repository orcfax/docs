---
id: phase 1 manual
sidebar_position: 2
slug: /phase-1-manual
---

# Phase 1 manual

**More info to be provided as we approach this ITN phase.**

## Data collection for CEXes

During this phase, validators will begin decentralizing the collection function
of the Orcfax Network.

Validators will initially run a limited suite of software responsible for the
collection of data from centralized exchanges which have been identified as
primary sources of information.

Validators will then participate in funneling that data to the Orcfax federated
validator and publisher.

### Hardware and infrastructure

During this phase of the ITN, the hardware requirements will be minimal to
handle the tasks involved. Participants should expect to meet the following
minimum requirements:

-   2GB of RAM
-   A single CPU

### Logging issues

ITN Phase 1 will use a [GitHub repository][issues-0] to record issues. You can
use this with a GitHub account if you have one.

You can also send issues to Orcfax via the support channels in Discord; Orcfax
will then transpose them to the GitHub Issues for the benefit of the Orcfax
community.

The issues can be found [here][issues-1].

[issues-0]: https://github.com/orcfax/ITN-Phase-1/
[issues-1]: https://github.com/orcfax/ITN-Phase-1/issues

:::info[N.B.]

The measurable participation of operators, including via GitHub, is one way in
which the health of the Orcfax network will be made apparent to integrators,
which will be critical to the network's ability to attract and generate revenue.

:::

### Aliasing your signing key

Before you continue, you will need to alias your signing key by following the
guide [here][alias-1].

[alias-1]: signing-key-aliasing

### Software and setup

There are three components needed for Phase 1 of the ITN. You will need the
latest versions of each.

-   [collector-node][collector-1]
-   [cex collector (gofer)][collector-2]
-   [cer-feeds.json][collector-3]

:::info[KEEPING UP TO DATE]

There needs to be some flexibility in the versions of software being run on a
decentralized network.

That being said, Orcfax will coordinate with ITN participants to provide them
the most up to date information about maintaining their setup and if versions
can or need to be upgraded. This page will also be added to as required.

:::

[collector-1]: https://github.com/orcfax/collector-node/releases
[collector-2]: https://github.com/orcfax/oracle-suite/releases
[collector-3]:
    https://raw.githubusercontent.com/orcfax/cer-feeds/refs/tags/2024.10.30.0001/feeds/mainnet/cer-feeds.json

#### Collector node

The latest release of the collector node needs to be installed in a Python
virtual environment and will be configured to run via cron.

#### Installing in a virtual environment

Assume we download the Python Wheel (\*.whl)
`collector_node-2.0.0a11-py3-none-any.whl`. The software can be installed with:

```sh
python3 -m venv venv
source venv/bin/activate
python -m pip install collector_node-2.0.0a11-py3-none-any.whl
```

:::info[STAYING INFORMED]

Take the time to look through the different repositories and their README files
to fully understand the software you're running as part of the Orcfax Network.

:::

#### CEX collector (gofer)

Gofer was originally published by [Chronicle-Labs][chronicle-1] and has been
modified to publish data according to Orcfax's data standard.

There are multiple releases available, it is likely you will want the
`gofer_0.4.0_Linux_x86_64` release. When you download this you will need to give
it executable permissions, i.e. `chmod +x /path/to/gofer`.

[chronicle-1]: https://chroniclelabs.org/

##### node-identity.json

A node-identity file will need to be created. The quickest way to do this is to
run gofer standalone:

```sh
./gofer data ADA/USD -o orcfax
```

:::note

You can prettify this data using tools such as [jq][jq-1], e.g. with the
command:

```sh
./gofer data ADA/USD -o orcfax | jq
```

:::

[jq-1]: https://jqlang.github.io/jq/

The identity file will be output to `/tmp/.node-identity.json` and will be
referenced in the cron job described below.

#### cer-feeds.json

`cer-feeds.json` is used by Orcfax to coordinate publication. It contains a list
of CEX and DEX feeds that we publish. DEX publication will not be triggered in
Phase 1.

`cer-feeds.json` will be provided to the collector as a command line argument.
It can be downloaded from [GitHub][cer-feeds-1].

The latest feeds for the preview network can be downloaded from this
[link][cer-feeds-2], or alternatviely on the command line using a tool like
`wget`.

```sh
wget https://raw.githubusercontent.com/orcfax/cer-feeds/refs/heads/main/feeds/preview/cer-feeds.json
```

[cer-feeds-1]: https://github.com/orcfax/cer-feeds
[cer-feeds-2]:
    https://raw.githubusercontent.com/orcfax/cer-feeds/refs/heads/main/feeds/preview/cer-feeds.json

### Signing key

Information has been provided about the [signing key and signing key aliasing
protocol][alias-1] which you should have already done. For completeness, the
process is as follows:

<!--markdownlint-disable-->

1. Create a new verification (`vkey`) and signing (`skey`) key pair:

```sh
cardano-cli address key-gen \
 --verification-key-file payment.vkey \
 --signing-key-file payment.skey
```

2. Build the new payment address:

```sh
cardano-cli address build \
 --payment-verification-key-file payment.vkey \
 --out-file payment.addr \
 --mainnet
```

3. Calculate the `vkey` hash:

```sh
cardano-cli address key-hash \
  --payment-verification-key-file payment.vkey \
  --out-file payment.hash
```

<!--markdownlint-enable-->

You will use a path to your `payment.skey` in the environment variables and the
cron job described below.

### Directory layout

There are different ways to organize the collector code. Orcfax uses a number of
directories internally, e.g. for the collector, gofer, and signing-key.

```text
├── collector
│   └── venv
├── gofer/
    └── gofer
├── signing-key
    └── payment.skey
```

These could all be in one directory, e.g.

```text
.orcfax
└── collector
    ├── gofer
    ├── payment.skey
    └── venv
```

And they will be pointed at in the cron job described below. The contents of the
payment.hash file will be used to alias the wallet in which you hold the Orcfax
Validator License.

### Environment variables

When configuring the Orcfax collector node you will need a set of environment
variables, these are:

```sh
# example layout for a .env file.

## variables used in ITN Phase 1.
export ORCFAX_VALIDATOR=
export NODE_IDENTITY_LOC=
export NODE_SIGNING_KEY=
export GOFER=

# variables not used in ITN Phase 1 but cannot be null.
export CNT_DB_NAME=/var/tmp/notused.db
export OGMIOS_URL=ws://example.com/ogmios
```

If you run the Orcfax collector standalone, e.g. to get a feel for how it works
you can set these before hand. You can store them in an environment file, e.g.
`node.env` and on the command line run:

```sh
source node.env
```

:::info

The variables will only remain in-scope in a given session window. They will
need to be set each time you run the collector-node in a different command-line
window. For the cron task (below) we set them within the scope of a cron job.

:::

#### Configuring unused variables

Because ITN Phase 1 collectors do not yet collect CNT prices there are some
excess configuration values that need to be set, but remain unused.

For ogmios, we can just use a non-existent url, e.g.

```text
export OGMIOS_URL=ws://example.com
```

For the database, we need to point to a path that does exist, but we can do this
using `touch` as follows:

```sh
touch /var/tmp/notused.db
```

We can then set the path as follows:

```text
export CNT_DB_NAME=/var/tmp/notused.db
```

:::note

`/var/tmp` is a good location to use for this value as it won't delete itself
when a node is rebooted.

:::

:::info[COMMUNITY LEARNING]

While the settings in this document are required, their implementation here are
largely informational. The more advanced you are at configuring nix-based
systems, the more you may want to customise what you are doing. If you believe
your optimisations will be beneficial to someone else, please do feel free to
share in Discord or in GitHub [discussions][discussions-1].

:::

[discussions-1]: https://github.com/orcfax/ITN-Phase-1/discussions

### Cron

Cron is used to schedule collection. The collector uses a number of environment
variables, and can be configured inside the cron runner. Cron is configured to
ask for data every minute. The config look as follows:

<!--markdownlint-disable-->

```cron
ORCFAX_VALIDATOR=
NODE_IDENTITY_LOC=
NODE_SIGNING_KEY=
GOFER=
CNT_DB_NAME=/var/tmp/notused.db
OGMIOS_URL=ws://example.com/ogmios

* * * * * /path/to/collector-node --feeds /path/to/cer-feeds.json 2>&1 | logger -t orcfax_collector
```

An example that assumes an user called `orcfax` with a virtual environment
configured to run the Python-based code:

```cron
ORCFAX_VALIDATOR=wss://itn.0.orcfax.io/ws/node
NODE_IDENTITY_LOC=/tmp/.node-identity.json
NODE_SIGNING_KEY=/home/orcfax/signing-key/payment.skey
GOFER=/home/orcfax/gofer/gofer
CNT_DB_NAME=/var/tmp/notused.db
OGMIOS_URL=ws://example.com/ogmios

* * * * * /home/orcfax/collector/venv/bin/collector-node --feeds /home/orcfax/collector/cer-feeds.json 2>&1 | logger -t orcfax_collector
```

<!--markdownlint-enable-->

### Monitoring logs

Logs can be monitored with the command:

```sh
sudo tail -f /var/log/syslog | grep "orcfax_collector
```

:::tip

Not every log message is important for users of the ITN. Output needs to be read
and understood critically. Primarily, we need to use the output if collection
halts entirely (not partially) although some output might be interesting to
observe and learn from.

:::
