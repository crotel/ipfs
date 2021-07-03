'use strict'

const peekable = require('it-peekable')
const map = require('it-map')
const { callbackify } = require('util')

/**
 * @param {import('ipfs-core-types').IPFS} ipfs
 * @param {import('../../types').Options} options
 */
module.exports = function grpcMfsWrite (ipfs, options = {}) {
  /**
   * TODO: Fill out input/output types after https://github.com/ipfs/js-ipfs/issues/3594
   *
   * @type {import('../../types').ClientStreamingEndpoint<any, any, any>}
   */
  async function mfsWrite (source, metadata) {
    const opts = {
      ...metadata
    }

    if (opts.mtime) {
      opts.mtime = {
        secs: opts.mtime,
        nsecs: opts.mtimeNsecs
      }
    }

    // path is sent with content messages
    const content = peekable(source)
    const result = await content.peek()
    const {
      value: {
        path
      }
    } = result
    content.push(result.value)

    await ipfs.files.write(path, map(content, ({ content }) => content), opts)

    return {}
  }

  return callbackify(mfsWrite)
}
