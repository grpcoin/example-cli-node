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
$ npm install -g grpcoin
$ grpcoin COMMAND
running command...
$ grpcoin (-v|--version|version)
grpcoin/0.2.0 linux-x64 node-v16.1.0
$ grpcoin --help [COMMAND]
USAGE
  $ grpcoin COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`grpcoin buy [AMOUNT]`](#grpcoin-buy-amount)
* [`grpcoin help [COMMAND]`](#grpcoin-help-command)
* [`grpcoin sell [AMOUNT]`](#grpcoin-sell-amount)
* [`grpcoin watch`](#grpcoin-watch)

## `grpcoin buy [AMOUNT]`

Buy coin

```
USAGE
  $ grpcoin buy [AMOUNT]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ grpcoin buy 2.5
```

_See code: [dist/commands/buy.ts](https://github.com/TheYkk/grpcoin/blob/v0.2.0/dist/commands/buy.ts)_

## `grpcoin help [COMMAND]`

Display help. To display help for a specific command run `grpcoing help [command]`

```
USAGE
  $ grpcoin help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `grpcoin sell [AMOUNT]`

Sell coin

```
USAGE
  $ grpcoin sell [AMOUNT]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ grpcoin sell 2.5
```

_See code: [dist/commands/sell.ts](https://github.com/TheYkk/grpcoin/blob/v0.2.0/dist/commands/sell.ts)_

## `grpcoin watch`

Watch coin

```
USAGE
  $ grpcoin watch

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ grpcoin watch
```

_See code: [dist/commands/watch.ts](https://github.com/TheYkk/grpcoin/blob/v0.2.0/dist/commands/watch.ts)_
<!-- commandsstop -->
