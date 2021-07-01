/**
 * Copyright 2021 Kaan Karakaya
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Command, flags } from '@oclif/command'
import * as grpc from 'grpc'

import { TickerInfoClient } from '../proto/grpcoin_grpc_pb'
import { Currency, Quote, TickerWatchRequest } from '../proto/grpcoin_pb'

export default class Watch extends Command {
  static description = 'Watch coin';

  static examples = [
    `$ grpcoin watch ETH`,
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'coin' }];

  async run() {
    const { args } = this.parse(Watch)
    const token = process.env.TOKEN
    const server = 'api.grpco.in:443'
    let coin = "BTC"

    const tickerClient = new TickerInfoClient(
      server,
      grpc.credentials.createSsl(),
    )

    if (args.coin) {
      coin = args.coin.toUpperCase()
    }

    const meta = new grpc.Metadata()
    meta.add('authorization', 'Bearer ' + token)

    const call = tickerClient.watch(new TickerWatchRequest().setCurrency(new Currency().setSymbol(coin)), meta)

    call.on('data', (response: Quote) => {
      this.log(
        '[server:%s] --  %d.%d',
        response.getT()?.toDate(),
        response.getPrice()?.getUnits(),
        response.getPrice()?.getNanos(),
      )
    })
  }
}
