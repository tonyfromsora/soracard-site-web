export type Link = {
  title: string
  href: string
  target?: '_blank' | '_parent' | '_self' | '_top'
}
export type BlogArticleMeta = {
  title: string
  description: string
  date: string
  image: string
}
export type QAFeedItem = {
  question: string[]
  answer?: string[]
  links?: { title: string; href: string }[]
  ts: number
}
export type NavLink = Link & {
  external?: boolean
  label?: string
}
export type NavGroup = {
  groupTitle: string
  links: (NavLink | { applyButton: string })[]
}
