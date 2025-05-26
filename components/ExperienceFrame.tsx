import React, { useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import ExperienceCard from "./ExperienceCard"

interface StoredExperience {
  index: string
  company: string
  position: string
  description: string
}

const ExperienceFrame = () => {
  const [experiences, setExperiences] = useStorage<StoredExperience[]>(
    "experiences",
    []
  )
  const [companyInput, setCompanyInput] = useState("")
  const [positionInput, setPositionInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newExperience: StoredExperience = {
      index: crypto.randomUUID(),
      company: companyInput,
      position: positionInput,
      description: descriptionInput
    }

    setExperiences((prevExperiences) => [...prevExperiences, newExperience])
    setCompanyInput("")
    setPositionInput("")
    setDescriptionInput("")
  }

  const deleteExperience = (index: string) => {
    setExperiences((prevExperiences) =>
      prevExperiences.filter((exp) => exp.index !== index)
    )
  }

  return (
    <>
      <h1>Saved Experiences</h1>
      <form className="experience-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={companyInput}
          onChange={(e) => setCompanyInput(e.target.value)}
          id="companyInput"
          placeholder="Company (e.g. Google)"
          required
        />
        <input
          type="text"
          value={positionInput}
          onChange={(e) => setPositionInput(e.target.value)}
          id="positionInput"
          placeholder="Position (e.g. Software Engineer)"
          required
        />
        <label>Description</label>
        <textarea
          id="descriptionInput"
          placeholder={`• Boosted performance by 20% using React\n• Wrote 10+ unit tests with Jest`}
          required
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}></textarea>
        <button type="submit" className="submit-button">
          Add
        </button>
      </form>
      <ul id="linkList">
        {experiences.map((experience, index) => {
          return (
            <ExperienceCard
              key={experience.index}
              index={experience.index}
              company={experience.company}
              position={experience.position}
              description={experience.description}
              handleDelete={deleteExperience}
            />
          )
        })}
      </ul>
    </>
  )
}

export default ExperienceFrame
