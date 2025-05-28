import React, { useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import mockBlurbs from "~mock_data/mock_blurbs"

import BlurbCard from "./BlurbCard"

interface StoredBlurb {
  index: string
  title: string
  description: string
  links: string[]
}

const BlurbFrame = ({ mock }) => {
  const [blurbs, setBlurbs] = mock
    ? useState<StoredBlurb[]>(mockBlurbs)
    : useStorage<StoredBlurb[]>("blurbs", [])
  const [titleInput, setTitleInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [linksInput, setLinksInput] = useState<string[]>([""])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newBlurb: StoredBlurb = {
      index: crypto.randomUUID(),
      title: titleInput,
      description: descriptionInput,
      links: linksInput
    }

    setBlurbs((prevBlurbs) => [...prevBlurbs, newBlurb])
    setTitleInput("")
    setDescriptionInput("")
    setLinksInput([""])
  }

  const handleLinkChange = (index: number, value: string) => {
    setLinksInput((prevLinks) => {
      const newLinks = [...prevLinks]
      newLinks[index] = value
      return newLinks
    })
  }

  const handleRemoveLink = (index: number) => {
    setLinksInput((prevLinks) => prevLinks.filter((_, i) => i !== index))
  }

  const deleteBlurb = (index: string) => {
    setBlurbs((prevBlurbs) =>
      prevBlurbs.filter((blurb) => blurb.index !== index)
    )
  }

  return (
    <>
      <h1>Saved Blurbs</h1>
      <form className="experience-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          id="titleInput"
          placeholder="Title (e.g. Investment Portfolio Project)"
          required
        />
        <label>Description</label>
        <textarea
          id="descriptionInput"
          placeholder={`• Developed a full-stack web application to display a users investment portfolio`}
          required
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}></textarea>
        {linksInput.map((link, index) => (
          <div key={index} className="blurb-form-link-container">
            <input
              type="text"
              placeholder="Enter link"
              value={link}
              required
              onChange={(e) => handleLinkChange(index, e.target.value)}
            />
            {linksInput.length >= 1 && (
              <button
                type="button"
                onClick={() => handleRemoveLink(index)}
                title="Remove link"
                style={{ color: "red" }}
                className="blurb-form-remove-link">
                ✖
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="submit-button"
          onClick={() => {
            setLinksInput((prevLinks) => [...prevLinks, ""])
          }}>
          Add Link
        </button>
        <button type="submit" className="submit-button">
          Save Blurb
        </button>
      </form>
      <ul id="linkList">
        {blurbs.map((blurb, index) => {
          return (
            <BlurbCard
              key={index}
              index={blurb.index}
              title={blurb.title}
              description={blurb.description}
              links={blurb.links}
              handleDelete={deleteBlurb}
            />
          )
        })}
      </ul>
    </>
  )
}

export default BlurbFrame
