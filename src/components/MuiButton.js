import { Button, IconButton, Stack } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';

function MuiButton() {
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
    </Stack>
  )
}

export default MuiButton