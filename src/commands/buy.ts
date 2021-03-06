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
import { server, grpcCreds} from '../lib/utils';

import { PaperTradeClient } from '../proto/grpcoin_grpc_pb'
import {
  Currency,
  TradeAction,
  TradeRequest,
  TradeResponse,
} from '../proto/grpcoin_pb'

import { Parse } from '../lib/utils'
export default class Buy extends Command {
  static description = 'Buy coin';

  static examples = ['$ grpcoin buy ETH 2.5'];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [{ name: 'coin' }, { name: 'amount' }];

  async run() {
    const { args } = this.parse(Buy)
    const token = process.env.TOKEN
    let coin = "BTC"
    if (!token) {
      this.error(
        'Create a permissionless Personal Access Token on GitHub https://github.com/settings/tokens and set it to TOKEN environment variable',
      )
    }

    if (!Number(args.amount)) {
      this.error('Amount must be number')
    }

    if (args.coin) {
      coin = args.coin.toUpperCase()
    }

    const meta = new grpc.Metadata()
    meta.add('authorization', 'Bearer ' + token)

    const tradeClient: PaperTradeClient = new PaperTradeClient(
      server,
      grpcCreds,
    )

    const trade = new TradeRequest()
    trade.setAction(TradeAction.BUY)
    trade.setQuantity(Parse(args.amount))
    trade.setCurrency(new Currency().setSymbol(coin))

    // Execute trade
    tradeClient.trade(
      trade,
      meta,
      (err: Error | null, response: TradeResponse) => {
        if (err) {
          this.error(err)
        }
        this.log(
          'ORDER EXECUTED: BUY [%s] %s coins at USD[%s] (cash remaining: %s)',
          response.getQuantity(),
          response.getCurrency().getSymbol(),
          response.getExecutedPrice(),
          response.getResultingPortfolio().getRemainingCash(),
        )
      },
    )
  }
}
