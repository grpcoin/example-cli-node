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
