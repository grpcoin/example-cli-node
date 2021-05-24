import {Command, flags} from '@oclif/command'

export default class Sell extends Command {
  static description = 'Sell coin'

  static examples = [
    `$ grpcoin sell 2.5
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args} = this.parse(Sell)

    this.log(`hello ${args} from ./src/commands/hello.ts`)
  }
}
