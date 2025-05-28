import React, { useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import LinkCard from "~components/LinkCard"
import mockLinks from "~mock_data/mock_links"

interface StoredLink {
  index: string
  url: string
  title: string
}

const LinkFrame = ({ mock }) => {
  const [links, setLinks] = mock
    ? useState<StoredLink[]>(mockLinks)
    : useStorage<StoredLink[]>("links", [])
  console.log("Links from storage:", links)
  const [linkInput, setLinkInput] = React.useState("")
  const [linkTitle, setLinkTitle] = React.useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("Submitting link:", linkInput, linkTitle)
    event.preventDefault()
    const newStoredLink: StoredLink = {
      index: crypto.randomUUID(),
      url: linkInput,
      title: linkTitle
    }

    setLinks((prevLinks) => [...prevLinks, newStoredLink])
    setLinkInput("")
    setLinkTitle("")
  }

  const deleteLink = (index: string) => {
    setLinks((prevLinks) => prevLinks.filter((link) => link.index !== index))
  }

  return (
    <>
      <h1>Saved Links</h1>
      <form id="linkForm" className="link-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="linkTitle"
          value={linkTitle}
          onChange={(e) => setLinkTitle(e.target.value)}
          placeholder="Link Title (e.g. Personal Website)"
          required
        />
        <div className="submit-container">
          <input
            type="text"
            id="linkInput"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            placeholder="URL (e.g. https://example.com)"
            required
          />
          <button type="submit" className="submit-button">
            Add
          </button>
        </div>
      </form>
      <ul id="linkList">
        {links.map((storedLink, index) => {
          return (
            <LinkCard
              title={storedLink.title}
              url={storedLink.url}
              handleDelete={deleteLink}
              index={storedLink.index}
              key={index}
            />
          )
        })}
      </ul>
    </>
  )
}

export default LinkFrame
