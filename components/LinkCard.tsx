import React from "react"

type LinkCardProps = {
  title: string
  url: string
  index: number
  handleDelete: (index: number) => void
}

const LinkCard = ({ title, url, index, handleDelete }: LinkCardProps) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log("Copied to clipboard:", url)
        // Optionally show a temporary "Copied!" toast or icon
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
          📋
        </button>
      </div>
    </li>
  )
}

export default LinkCard
