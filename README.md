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
grpcoin/0.2.1 linux-x64 node-v16.1.0
$ npx grpcoin --help [COMMAND]
USAGE
  $ npx grpcoin COMMAND
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
  $ npx grpcoin buy [AMOUNT]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ npx grpcoin buy 2.5
```

_See code: [src/commands/buy.ts](https://github.com/TheYkk/grpcoin/blob/v0.2.1/src/commands/buy.ts)_

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

## `grpcoin sell [AMOUNT]`

Sell coin

```
USAGE
  $ npx grpcoin sell [AMOUNT]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ npx grpcoin sell 2.5
```

_See code: [src/commands/sell.ts](https://github.com/TheYkk/grpcoin/blob/v0.2.1/src/commands/sell.ts)_

## `grpcoin watch`

Watch coin

```
USAGE
  $ npx grpcoin watch

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ npx grpcoin watch
```

_See code: [src/commands/watch.ts](https://github.com/TheYkk/grpcoin/blob/v0.2.1/src/commands/watch.ts)_
<!-- commandsstop -->
