export type RSS = {
  items: RSS_Item[]
  image: object
  title: string
  description: string
  generator: string
  link: string
  language: string
  copyright: string
  lastBuildDate: string
  ttl: string
}

type RSS_Item = {
  content: string
  contentSnippet: string
  guid: string
  isoDate: string
  link: string
  pubDate: string
  title: string
}
