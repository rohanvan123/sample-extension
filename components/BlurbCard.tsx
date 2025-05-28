import React, { useState } from "react"

type BlurbCardProps = {
  index: string
  title: string
  description: string
  links: string[]
  handleDelete: (index: string) => void
}

const BlurbCard = ({
  index,
  title,
  description,
  links,
  handleDelete
}: BlurbCardProps) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)
  const handleCopy = (text: string, key: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedKey(key)
        setTimeout(() => setCopiedKey(null), 1000)
      })
      .catch((err) => {
        console.error("Failed to copy: ", err)
      })
  }

  return (
    <li>
      <div className="link-sub-containter">
        <p id="link-name">
          <b>{title}</b>
        </p>
        <button
          onClick={() => handleDelete(index)}
          title="Delete"
          className="text-lg cursor-pointer hover:opacity-80">
          🗑️
        </button>
      </div>
      <div className="link-sub-containter">
        <span style={{ fontSize: "0.9rem", color: "#555" }}>
          <b>Description</b>
        </span>
        <button
          onClick={() => handleCopy(description, "desc")}
          title="Delete"
          className="text-lg cursor-pointer hover:opacity-80">
          {copiedKey == "desc" ? "✅" : "📋"}
        </button>
      </div>

      <div style={{ whiteSpace: "pre-wrap" }}>
        <p>
          {!expanded
            ? `${description.substring(0, 95)} ... `
            : `${description} `}
          <a onClick={() => setExpanded(!expanded)}>
            {expanded ? "Less" : "More"}
          </a>
        </p>
      </div>
      <div className="link-list-container">
        <span style={{ fontSize: "0.9rem", color: "#555" }}>
          <b>Links</b>
        </span>
        {links.map((url, index) => {
          const key = `link-${index}`
          return (
            <div className="link-sub-containter" key={index}>
              <a href={url} target="_blank">
                {url}
              </a>
              <button
                onClick={() => handleCopy(url, key)}
                title="Copy to clipboard"
                className="copy-button">
                {copiedKey == key ? "✅" : "📋"}
              </button>
            </div>
          )
        })}
      </div>
    </li>
  )
}

export default BlurbCard
