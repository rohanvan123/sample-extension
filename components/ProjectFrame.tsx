import React from "react"

const ProjectFrame = () => {
  return (
    <>
      <h1>Saved Projects</h1>
      <form id="linkForm">
        <input type="text" id="linkInput" placeholder="Enter a URL" required />
        <button type="submit">Add</button>
      </form>
      <ul id="linkList"></ul>
    </>
  )
}

export default ProjectFrame
