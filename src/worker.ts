import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

export default {
  async fetch(request: Request, env: any, ctx: any) {
    try {
      // Try to serve static assets
      return await getAssetFromKV(
        {
          request,
          waitUntil: ctx.waitUntil.bind(ctx)
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
        }
      )
    } catch (error) {
      // If the asset is not found, return the index.html for client-side routing
      if (error.status === 404) {
        return getAssetFromKV(
          {
            request: new Request(new URL('/index.html', request.url), request),
            waitUntil: ctx.waitUntil.bind(ctx)
          },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
          }
        )
      }
      return new Response(`Error: ${error.message}`, { status: 500 })
    }
  }
}