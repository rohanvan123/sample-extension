import React, { useState } from "react"

import "./sidepanel.css"

import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { Box, Tab, Tabs } from "@mui/material"

import BlurbFrame from "~components/BlurbFrame"
import ExperienceFrame from "~components/ExperienceFrame"
import LinkFrame from "~components/LinkFrame"

const frames = ["Links", "Experiences", "Misc"]

const cache = createCache({
  key: "css",
  prepend: true
})

function IndexPopup() {
  const mock = false
  const [currentFrame, setCurrentFrame] = useState(frames[0])
  return (
    <CacheProvider value={cache}>
      <div>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={currentFrame}
            onChange={(event, newValue) => setCurrentFrame(newValue)}
            TabIndicatorProps={{ style: { height: 2 } }}
            TabScrollButtonProps={{ style: { fontSize: "0.5rem" } }}
            sx={{
              "& .MuiTab-root": {
                fontSize: "0.75rem"
              }
            }}>
            {frames.map((frame) => (
              <Tab key={frame} label={frame} value={frame} />
            ))}
          </Tabs>
        </Box>
        {currentFrame === "Links" && <LinkFrame mock={mock} />}
        {currentFrame === "Experiences" && <ExperienceFrame mock={mock} />}
        {currentFrame === "Misc" && <BlurbFrame mock={mock} />}
      </div>
    </CacheProvider>
  )
}

export default IndexPopup
