import handler from 'vinext/server/app-router-entry'

export default {
  async fetch(request: Request): Promise<Response> {
    // Delegate everything else to vinext
    return handler.fetch(request)
  },
}
