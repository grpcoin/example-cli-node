import {Command, flags} from '@oclif/command'

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

    if (!Number(args.amount)) {
      this.error("Amount must be number")
    }

  }
}
