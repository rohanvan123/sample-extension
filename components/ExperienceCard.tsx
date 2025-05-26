import React, { useState } from "react"

type ExperienceCardProps = {
  index: string
  company: string
  position: string
  description: string
  handleDelete: (index: string) => void
}

const ExperienceCard = ({
  index,
  company,
  position,
  description,
  handleDelete
}: ExperienceCardProps) => {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const handleCopy = () => {
    navigator.clipboard
      .writeText(description)
      .then(() => {
        console.log("Copied to clipboard:", description)
        setCopied(true)
        setTimeout(() => setCopied(false), 1000) // Reset copied state after 1 second
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  return (
    <li>
      <div className="link-sub-containter">
        <p id="link-name">
          <b>{company}</b>
        </p>
        <button
          onClick={() => handleDelete(index)}
          title="Delete"
          className="text-lg cursor-pointer hover:opacity-80">
          🗑️
        </button>
      </div>
      <div>
        <p>
          <b>{position}</b>
        </p>
      </div>
      <div style={{ whiteSpace: "pre-wrap" }}>
        <p>{!expanded ? `${description.substring(0, 95)} ...` : description}</p>
        <div className="experience-sub-container">
          <p>Click to expand</p>
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? "▲" : "▼"}
          </button>
        </div>
      </div>
      <button onClick={handleCopy} className="copy-btn-large">
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>
    </li>
  )
}

export default ExperienceCard
