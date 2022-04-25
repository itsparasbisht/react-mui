import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MuiButton() {
    const [format, setFormat] = useState([])
    console.log(format)
    const handleFormatChange = (event, updatedFormat) => {
        setFormat(updatedFormat)
    }

  return (
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
            <Button variant='text' href='http://localhost:3000'>Text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>error</Button>
            <Button variant='contained' color='warning'>warning</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='success'>success</Button>
        </Stack>
        <Stack display='block' spacing={2} direction="row">
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon />} disableRipple={true} >send</Button>
            <Button variant='contained' endIcon={<SendIcon />} disableElevation={true} >send</Button>
            <IconButton aria-label='send' size='small' color='success' ><SendIcon /></IconButton>
        </Stack>
        <Stack direction="row">
            <ButtonGroup variant="contained" orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction="row">
            <ToggleButtonGroup aria-label='text formatting' value={format} onChange={handleFormatChange} size="small" color='success'>
                <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
                <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>
                <ToggleButton value="underlined"><FormatUnderlinedIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

export default MuiButton