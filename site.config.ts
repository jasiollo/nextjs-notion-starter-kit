import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '3e7cb3b4a87280598e6ef9c3df5e16c7',

  // if you want to restrict pages to a single notion workspace (optional)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Portfolio taneczne Barbara Mrowińska',
  domain: 'nextjs-notion-starter-kit-gilt-gamma.vercel.app', // <-- Wasza darmowa domena z Vercela
  author: 'Barbara Mrowińska',

  // open graph metadata (optional)
  description: 'Portfolio tancerki - Warszawa',

  // social usernames (optional) - Wyzerowane
  twitter: null,
  github: null,
  linkedin: null,

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,
  pageUrlOverrides: null,

  // Menu - ustawione na default. Jeśli dziewczyna zrobi podstrony, zmienisz na 'custom' i dodasz linki.
  navigationStyle: 'default' 
})
