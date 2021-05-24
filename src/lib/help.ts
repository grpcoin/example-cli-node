
const Help = require('@oclif/plugin-help').default

const isHelpCommand = (id: string) => id === 'help'

const formatDescription = (description: any, id: string) => {
  if (isHelpCommand(id)) {
    return 'Display help. To display help for a specific command run `grpcoing help [command]`'
  }

  return description
}

module.exports = class CustomHelp extends Help {
  constructor(config: { commands: any[] }, opts = {}) {
    config.commands.forEach(command => {
      command.description = formatDescription(command.description, command.id)
    })
    super(config, opts)
  }
}
