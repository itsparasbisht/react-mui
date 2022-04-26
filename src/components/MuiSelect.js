import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

function MuiSelect() {
    const [countries, setCountries] = useState([])

    const handleChange = (e) => {
        const value = e.target.value
        setCountries(value)
        console.log(value)
    }

  return (
    <Box width="250px">
        <TextField size="small" color="secondary" label="Select country" select value={countries} onChange={handleChange} fullWidth SelectProps={{multiple: true}}>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
        </TextField>
    </Box>
  )
}

export default MuiSelect