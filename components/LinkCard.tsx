import React, { useState } from "react"

type LinkCardProps = {
  title: string
  url: string
  index: string
  handleDelete: (index: string) => void
}

const LinkCard = ({ title, url, index, handleDelete }: LinkCardProps) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("Copied to clipboard:", url)
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
        <a href={url} target="_blank">
          {url}
        </a>
        <button
          onClick={handleCopy}
          title="Copy to clipboard"
          className="copy-button">
          {copied ? "✅" : "📋"}
        </button>
      </div>
    </li>
  )
}

export default LinkCard
