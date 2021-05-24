import {Command, flags} from '@oclif/command'

import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {AccountClient} from '../proto/grpcoin_grpc_pb'
import * as path from 'path'
import {TestAuthRequest, TestAuthResponse} from '../proto/grpcoin_pb'

export default class Buy extends Command {
  static description = 'Buy coin'

  static examples = [
    `$ grpcoin buy 2.5
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'amount'}]

  async run() {
    const {args} = this.parse(Buy)
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

    const client: AccountClient = new grpcoin.Account(server, grpc.credentials.createSsl())

    const meta = new grpc.Metadata()
    meta.add('authorization', 'Bearer ' + token)

    // eslint-disable-next-line new-cap

    client.testAuth(new TestAuthRequest(), meta, (err: Error | null, response: TestAuthResponse) => {
      if (err) {
        this.error(err)
      }
      this.log('Greeting:', response.getUserId())
    })
  }
}
