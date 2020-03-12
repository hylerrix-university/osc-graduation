import * as os from 'os'
import * as cluster from 'cluster'
import { bootstrap as bootstrapServer } from './main'
import debug from 'debug'

const log = debug('app:main')

if (cluster.isMaster) {
  log('master start')
  os.cpus().forEach(i => cluster.fork())
  cluster.on('exit', (worker, code, signal) => {
    log(code)
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      log(`工作进程 ${worker.id} 崩溃了，正在开始一个新的工作进程`)
      cluster.fork()
      // bootstrapServer()
    }
  })
} else {
  log('worker start')
  bootstrapServer()
}
