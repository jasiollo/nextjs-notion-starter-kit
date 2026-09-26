import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '3e7cb3b4a87280598e6ef9c3df5e16c7',

  // if you want to restrict pages to a single notion workspace (optional)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Portfolio taneczne Barbara Mrowińska',
  domain: 'nextjs-notion-starter-kit-gilt-gamma.vercel.app', 
  author: 'Barbara Mrowińska',

  // open graph metadata (optional)
  description: 'Portfolio tancerki - Warszawa',

  // social usernames - KOMPLETNIE USUNIĘTE, ŻEBY TYPESCRIPT NIE KRZYCZAŁ

  // default notion icon and cover images for site-wide consistency (optional)
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  pageUrlOverrides: null,

  // whether to use the default notion navigation style
  navigationStyle: 'default'
})
