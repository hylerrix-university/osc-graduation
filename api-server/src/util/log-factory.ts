import debug from 'debug'

export const logFactory = (tag) => debug(tag)
export const testLog = logFactory('test')
export const mainLog = logFactory('app:main')
