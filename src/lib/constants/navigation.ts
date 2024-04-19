import type { Link } from './types'

type NavLink = Link & {
  external?: boolean
  label?: string
}

const nav: {
  title: string
  links: (NavLink | 'apply')[]
}[] = [
  {
    title: 'SORA Card',
    links: [
      { title: 'Features', href: '/#features' },
      { title: 'Integrations', href: '/integrations' },
      { title: 'Earn', href: '/earn' },
      { title: 'Fees', href: '/fees' },
      { title: 'Blog', href: '/blog' },
      { title: 'Referrals', href: '/referrals', label: 'soon' },
      'apply',
    ],
  },
  {
    title: 'About',
    links: [
      { title: 'Vision', href: '/vision' },
      { title: 'SORAnomics', href: '/soranomics' },
      { title: 'Technology', href: '/technology' },
      { title: 'Ambassadors', href: '/ambassadors' },
      { title: 'Partners', href: '/partners' },
    ],
  },
  {
    title: 'Help',
    links: [
      { title: 'FAQ', href: '/#faq' },
      { title: 'Support', href: '/support/' },
      { title: 'Contact', href: '/contact' },
      { title: 'Request Feature', href: '/request-feature' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'SORA Wiki', href: 'https://wiki.sora.org/', external: true },
      {
        title: 'Builders',
        href: 'https://medium.com/sora-xor/sora-builders-programme-979bea8831ed',
        external: true,
      },
      {
        title: 'SII Insurance',
        href: 'https://medium.com/sora-xor/social-insurance-for-systematically-important-infrastructure-18a63ef711ca',
        external: true,
      },
      {
        title: 'Bug Bounty',
        href: 'https://medium.com/sora-xor/announcing-the-sora-and-polkaswap-bug-bounty-programme-65ff37fe4876',
        external: true,
      },
      { title: 'Brand Kit', href: 'https://github.com/sora-xor/sora-branding', external: true },
    ],
  },
]

export default nav
