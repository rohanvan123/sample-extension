interface StoredLink {
  index: string
  title: string
  url: string
}

const mockLinks: StoredLink[] = [
  {
    index: "1",
    title: "Personal Website",
    url: "https://app1.com"
  },
  {
    index: "2",
    title: "GitHub Repository",
    url: "https://app2.com"
  }
]

export default mockLinks
