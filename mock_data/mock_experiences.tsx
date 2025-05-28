interface StoredExperience {
  index: string
  company: string
  position: string
  description: string
}

const mockExperiences: StoredExperience[] = [
  {
    index: "1",
    company: "Investment Company",
    position: "Full Stack Developer",
    description: `
• Developed a full-stack web application to display a user’s custom investment portfolio using SimFin’s Financial API
• Implemented a user authentication and data retrieval procedure utilizing Firebase Auth, Flask, and Firebase Realtime DB
• Built an API data retrieval system to sequentially fetch data without exceeding rate limits
• Designed a frontend with stylistic graphs using the ReCharts library to display real-time data about stock prices and portfolio performance`
  }
]

export default mockExperiences
