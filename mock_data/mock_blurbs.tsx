interface StoredBlurb {
  index: string
  title: string
  description: string
  links: string[]
}

const mockBlurbs: StoredBlurb[] = [
  {
    index: "1",
    title: "Investment Portfolio Project",
    description: `
• Developed a full-stack web application to display a user’s custom investment portfolio using SimFin’s Financial API
• Implemented a user authentication and data retrieval procedure utilizing Firebase Auth, Flask, and Firebase Realtime DB
• Built an API data retrieval system to sequentially fetch data without exceeding rate limits
• Designed a frontend with stylistic graphs using the ReCharts library to display real-time data about stock prices and portfolio performance`,
    links: [
      "https://investment-portfolio-rohanvan123.vercel.app/dashboard",
      "https://github.com/rohanvan123/investment-portfolio"
    ]
  }
]

export default mockBlurbs
