const { IpcChannel } = require('@obsidians/ipc')
const KeypairManager = require('@obsidians/keypair')
const { AutoUpdate } = require('@obsidians/global')
const CompilerManager = require('@obsidians/eth-compiler')
const { InstanceManager } = require('@obsidians/heco-network')
const ProjectChannel = require('@obsidians/eth-project')
const SdkChannel = require('@obsidians/heco-sdk')
const AuthChannel = require('@obsidians/auth')

let ipcChannel, keypairManager, autoUpdate, compilerManager, instanceManager, projectChannel, sdkChannel, authChannel
module.exports = function () {
  ipcChannel = new IpcChannel()
  keypairManager = new KeypairManager(process.env.PROJECT)
  autoUpdate = new AutoUpdate('https://app.obsidians.io/api/v1/check-update/heco/')
  compilerManager = new CompilerManager()
  instanceManager = new InstanceManager()
  projectChannel = new ProjectChannel()
  sdkChannel = new SdkChannel()
  authChannel = new AuthChannel()
}
