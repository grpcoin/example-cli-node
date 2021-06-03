grpcoin
=======

Grpc Coin Node cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/grpcoin.svg)](https://npmjs.org/package/grpcoin)
[![Downloads/week](https://img.shields.io/npm/dw/grpcoin.svg)](https://npmjs.org/package/grpcoin)
[![License](https://img.shields.io/npm/l/grpcoin.svg)](https://github.com/TheYkk/grpcoin/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npx grpcoin@latest
$ npx grpcoin COMMAND
running command...
$ npx grpcoin (-v|--version|version)
grpcoin/0.3.0 linux-x64 node-v16.1.0
$ npx grpcoin --help [COMMAND]
USAGE
  $  grpcoin COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`grpcoin buy [COIN] [AMOUNT]`](#grpcoin-buy-coin-amount)
* [`grpcoin help [COMMAND]`](#grpcoin-help-command)
* [`grpcoin sell [COIN] [AMOUNT]`](#grpcoin-sell-coin-amount)
* [`grpcoin watch [COIN]`](#grpcoin-watch-coin)

## `grpcoin buy [COIN] [AMOUNT]`

Buy coin

```
USAGE
  $ npx grpcoin buy [COIN] [AMOUNT]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ npx grpcoin buy ETH 2.5
```

_See code: [src/commands/buy.ts](https://github.com/TheYkk/grpcoin/blob/v0.3.0/src/commands/buy.ts)_

## `grpcoin help [COMMAND]`

Display help. To display help for a specific command run `grpcoing help [command]`

```
USAGE
  $ npx grpcoin help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `grpcoin sell [COIN] [AMOUNT]`

Sell coin

```
USAGE
  $ npx grpcoin sell [COIN] [AMOUNT]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ npx grpcoin sell ETH 2.5
```

_See code: [src/commands/sell.ts](https://github.com/TheYkk/grpcoin/blob/v0.3.0/src/commands/sell.ts)_

## `grpcoin watch [COIN]`

Watch coin

```
USAGE
  $ npx grpcoin watch [COIN]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ npx grpcoin watch ETH
```

_See code: [src/commands/watch.ts](https://github.com/TheYkk/grpcoin/blob/v0.3.0/src/commands/watch.ts)_
<!-- commandsstop -->
