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

import { Command, flags } from "@oclif/command";
import * as grpc from "grpc";
import {
  AccountClient,
  PaperTradeClient,
  TickerInfoClient,
} from "../proto/grpcoin_grpc_pb";
import {
  Quote,
  QuoteTicker,
  TestAuthRequest,
  TestAuthResponse,
  TradeAction,
  TradeRequest,
  TradeResponse,
} from "../proto/grpcoin_pb";

export default class Watch extends Command {
  static description = "Watch coin";

  static examples = [
    `$ grpcoin watch
`,
  ];

  static flags = {
    help: flags.help({ char: "h" }),
  };

  async run() {
    const { args } = this.parse(Watch);

    const token = process.env.TOKEN;
    const server = "grpcoin-main-kafjc7sboa-wl.a.run.app:443";

    const tickerClient = new TickerInfoClient(
      server,
      grpc.credentials.createSsl()
    );

    const meta = new grpc.Metadata();
    meta.add("authorization", "Bearer " + token);

    let call = tickerClient.watch(new QuoteTicker().setTicker("BTC-USD"), meta);

    call.on("data", (response: Quote) => {
      this.log(
        "[server:%s] --  %d.%d",
        response.getT()?.toDate(),
        response.getPrice()?.getUnits(),
        response.getPrice()?.getUnits()
      );
    });
  }
}
