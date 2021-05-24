import {Command, flags} from '@oclif/command'

import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {PaperTradeClient} from '../proto/grpcoin_grpc_pb'
import * as path from 'path'
import {Amount, TradeAction, TradeRequest, TradeResponse} from '../proto/grpcoin_pb'

export default class Sell extends Command {
  static description = 'Sell coin'

  static examples = [
    `$ grpcoin sell 2.5
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'amount'}]

  async run() {
    const {args} = this.parse(Sell)
    const token = process.env.TOKEN
    const server = 'grpcoin-main-kafjc7sboa-wl.a.run.app:443'
    const options = {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    }

    // eslint-disable-next-line no-path-concat
    const PROTO_PATH = path.join(__dirname + '../../../proto/grpcoin.proto')
    if (!token) {
      this.error('Create a permissionless Personal Access Token on GitHub https://github.com/settings/tokens and set it to TOKEN environment variable')
    }

    if (!Number(args.amount)) {
      this.error('Amount must be number')
    }
    const definition = await protoLoader.load(PROTO_PATH, options)
    const {grpcoin}: any = grpc.loadPackageDefinition(definition)

    const client: PaperTradeClient = new grpcoin.Account(server, grpc.credentials.createInsecure())

    const meta = new grpc.Metadata()
    meta.add('authorization', 'Bearer ' + token)

    // eslint-disable-next-line new-cap
    const am = new Amount()
    am.setNanos(5000)

    const sa = new TradeRequest()
    sa.setAction(TradeAction.SELL)
    sa.setQuantity(am)

    client.trade(sa, meta, (err: Error | null, response: TradeResponse) => {
      this.log('Greeting:', response)
    })
  }
}
