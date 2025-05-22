---
id: phase 1 period 8 upgrade
sidebar_position: 3
slug: /phase-1-upgrade-period-8
---

# Phase 1 upgrade (Period 8)

:::info

Period 8 sees the introduction of more feeds. This requires the upgrade of the
cex collector software and the feed runner file. Details are provided below.

:::

## Upgrades required for period 8

Period 8 requires the upgrade of two components:

-   gofer (cex collector).
-   cer-feeds.json (collector runner).

ITN participants will need to upgrade these components so as to collect enough
information to be able to claim rewards.

### Upgrading Gofer

To upgrade gofer:

1. Download the latest version of gofer via [GitHub][gofer-1] (should be 0.5.1).
2. Ensure it is placed in the correct directory.
3. Ensure it has executable permissions.

E.g. given the following crontab:

<!--markdownlint-disable-->

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

Gofer needs to be in: `/home/orcfax/gofer/gofer` and executable permissions are
provided with the command;

```sh
sudo chmod +x /home/orcfax/gofer/gofer
```

The new Gofer will be picked up and run the next time the cron task ticks over.

### Upgrading cer-feeds.json

To upgrade cer-feeds.json:

1. download the updated feeds list: [cer-feeds.json][cer-feeds-1]
2. place the cer-feeds.json file in the same folder as the collector runner, or
   wherever your crontab task is pointing, e.g. in the following scenario:

<!--markdownlint-disable-->

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

The file needs to be in: `/home/orcfax/collector/cer-feeds.json`.

The file will automatically be picked up in your configuration and feeds should
start being collected the next time the cron task ticks over.

## Troubleshooting

Ensure everything looks okay in the system logs. You can learn more about how to
monitor those via the monitoring section of the
[phase 1 manual](phase-1-manual#monitoring-logs).

## Feedback

Validators can provide feedback via the Discord channels as per usual, or the
[GitHub Issues][issues-1] repisotory as described in the
[phase 1 manual](phase-1-manual).

[issues-1]: https://github.com/orcfax/ITN-Phase-1/issues
[cer-feeds-1]:
    https://raw.githubusercontent.com/orcfax/cer-feeds/refs/heads/main/feeds/itn/cer-feeds.json
[gofer-1]: https://github.com/orcfax/oracle-suite/releases
