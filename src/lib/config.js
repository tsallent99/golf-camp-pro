/**
 * Client-side configuration.
 *
 * These values are embedded in the production bundle. Only put
 * non-secret, public identifiers here (pixel IDs, public API keys).
 */
const config = {
  metaPixelId: '1409370891268563',
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || '',
}

export default config
