import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '3e7cb3b4a87280598e6ef9c3df5e16c7', // np. 3e7cb3b4a87280598e6ef9c3df5e16c7
  rootNotionSpaceId: null,

  name: 'Barbara Mrowińska - Portfolio Taneczne',
  domain: 'barbaramrowinska.pl', // Docelowa domena
  author: 'Barbara Mrowińska',
  description: 'Portfolio tancerki: Heels, Hip-hop, Eventy, Teatr.',

  // Zerujemy domyślne sociale (usunie to ikony GitHuba, Twittera itp.)
  twitter: null,
  github: null,
  linkedin: null,

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,
  pageUrlOverrides: null,

  // Włączamy własne menu i wklejamy ID utworzonych podstron
  navigationStyle: 'custom',
  navigationLinks: [
    { title: 'Polaroidy', pageId: 'ID_PODSTRONY_POLAROIDY' },
    { title: 'Heels', pageId: 'ID_PODSTRONY_HEELS' },
    { title: 'Hip-hop', pageId: 'ID_PODSTRONY_HIPHOP' },
    { title: 'Eventy & Teatr', pageId: 'ID_PODSTRONY_EVENTY_TEATR' },
    { title: 'Muzyka', pageId: 'ID_PODSTRONY_MUZYKA' }
  ]
})
