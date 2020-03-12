import * as skyApm from 'skyapm-nodejs'
import { APP_NAME, SKY_WALKING_IP } from '../config'

export const connectSkyWalking = () =>
  skyApm.start({
    // Application code is showed in sky-walking-ui. Suggestion: set an unique name for each application, one
    // application's nodes share the same code.
    // this value cannot be empty.
    serviceName: APP_NAME,
    // Collector agent_gRPC/grpc service addresses.
    // default value: localhost:11800
    directServers: SKY_WALKING_IP,
  })
