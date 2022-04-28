import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function MuiSwitch() {
    const [checked, setChecked] = useState(false)
    console.log(checked)
    const handleChange = (e) => {
        setChecked(e.target.checked)
    }

  return (
    <div>
         <FormControlLabel control={<Switch color='success' size='small' checked={checked} onChange={handleChange} />} label="Dark mode" />
    </div>
  )
}

export default MuiSwitch