import type { Link } from './types'

type NavLink = Link & {
  isExternal?: boolean
  label?: string
}

const nav: {
  title: string
  links: NavLink[]
}[] = [
  {
    title: 'SORA Card',
    links: [
      { title: 'Features', href: 'https://soracard.com/#features' },
      { title: 'Integrations', href: 'https://soracard.com/integrations/' },
      { title: 'Earn', href: 'https://soracard.com/earn/' },
      { title: 'Fees', href: 'https://soracard.com/fees/' },
      { title: 'Blog', href: '/' },
      { title: 'Referrals', href: 'https://soracard.com/referrals/', label: 'soon' },
      { title: 'Apply', href: 'https://soracard.com/' },
    ],
  },
  {
    title: 'About',
    links: [
      { title: 'Vision', href: 'https://soracard.com/vision/' },
      { title: 'SORAnomics', href: 'https://soracard.com/soranomics/' },
      { title: 'Technology', href: 'https://soracard.com/technology/' },
      { title: 'Ambassadors', href: 'https://soracard.com/ambassadors/' },
      { title: 'Partners', href: 'https://soracard.com/partners/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { title: 'FAQ', href: 'https://soracard.com/#FAQ' },
      { title: 'Support', href: 'https://soracard.com/support/' },
      { title: 'Contact', href: 'https://soracard.com/contact/' },
      { title: 'Request Feature', href: 'https://soracard.com/request-feature/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'SORA Wiki', href: 'https://wiki.sora.org/', isExternal: true },
      {
        title: 'Builders',
        href: 'https://medium.com/sora-xor/sora-builders-programme-979bea8831ed',
        isExternal: true,
      },
      {
        title: 'SII Insurance',
        href: 'https://medium.com/sora-xor/social-insurance-for-systematically-important-infrastructure-18a63ef711ca',
        isExternal: true,
      },
      {
        title: 'Bug Bounty',
        href: 'https://medium.com/sora-xor/announcing-the-sora-and-polkaswap-bug-bounty-programme-65ff37fe4876',
        isExternal: true,
      },
      { title: 'Brand Kit', href: 'https://github.com/sora-xor/sora-branding', isExternal: true },
    ],
  },
]

export default nav
