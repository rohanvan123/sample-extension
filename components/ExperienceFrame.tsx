import React from "react"

const ExperienceFrame = () => {
  return (
    <>
      <h1>Saved Experiences</h1>
      <form id="linkForm">
        <input type="text" id="linkInput" placeholder="Enter a URL" required />
        <button type="submit">Add</button>
      </form>
      <ul id="linkList"></ul>
    </>
  )
}

export default ExperienceFrame
