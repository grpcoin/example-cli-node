import {Command, flags} from '@oclif/command'

export default class Watch extends Command {
  static description = 'Watch coin'

  static examples = [
    `$ grpcoin watch
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args} = this.parse(Watch)

    this.log(`hello ${args} from ./src/commands/hello.ts`)
  }
}
