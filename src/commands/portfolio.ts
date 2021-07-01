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
import { PaperTradeClient } from '../proto/grpcoin_grpc_pb';
import { server, grpcCreds} from '../lib/utils';

import { PortfolioRequest, PortfolioResponse  } from '../proto/grpcoin_pb'

export default class Portfolio extends Command {
  static description = 'Get user`s portfolio';

  static examples = [
    `$ grpcoin portfolio`,
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  async run() {
    const token = process.env.TOKEN

    const meta = new grpc.Metadata()
    meta.add('authorization', 'Bearer ' + token)

    const tradeClient: PaperTradeClient = new PaperTradeClient(
      server,
      grpcCreds,
    );

    tradeClient.portfolio(
      new PortfolioRequest(),
      meta,
      (err: Error | null, response: PortfolioResponse) => {
        if (err) {
          this.error(err)
        }

        this.log('----Portfolio----')

        this.log(
          'Cash: %s',
          response.getCashUsd()
        )
        let positons = response.getPositionsList()

        positons.forEach(p => {

          this.log(
            '%s: %s,%s',
            p.getCurrency().getSymbol(),
            p.getAmount().getUnits(),
            p.getAmount().getNanos(),
          )
        });
      })
  }
}
