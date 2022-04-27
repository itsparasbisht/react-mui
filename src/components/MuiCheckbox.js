import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, FormLabel } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function MuiCheckbox() {
    const [accept, setAccept] = useState(false)
    const [bookmark, setBookmark] = useState(false)
    const [skills, setSkills] = useState([])

    console.log(skills)

    const handleChange = (e) => {
        setAccept(e.target.checked)
    }

    const handleBookmark = (e) => {
        setBookmark(e.target.checked)
    }

    const handleSkillsChange = (e) => {
        const index = skills.indexOf(e.target.value)
        if(index === -1){
            setSkills([...skills, e.target.value])
        }
        else{
            setSkills(skills.filter(skill => skill !== e.target.value))
        }
    }

  return (
      <>
        <Box>
            <FormControlLabel
                control={<Checkbox checked={accept} />}
                label="accept terms and conditions"
                onChange={handleChange}
            />
        </Box>
        <Box>
            <Checkbox
                checked={bookmark}
                onChange={handleBookmark}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
            />
        </Box>
        <Box>
            <FormGroup>
                <FormLabel>Skills</FormLabel>
                <FormControlLabel control={<Checkbox value="react.js" checked={skills.includes('react.js')} onChange={handleSkillsChange} />} label="React.js" />
                <FormControlLabel control={<Checkbox value="next.js" checked={skills.includes('next.js')} onChange={handleSkillsChange} />} label="Next.js" />
                <FormControlLabel control={<Checkbox value="vue.js" checked={skills.includes('vue.js')} onChange={handleSkillsChange} />} label="Vue.js" />
            </FormGroup>
        </Box>
    </>
  )
}

export default MuiCheckbox