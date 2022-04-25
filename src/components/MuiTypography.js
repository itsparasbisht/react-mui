import { Typography } from '@mui/material'
import React from 'react'

function MuiTypography() {
  return (
    <div>
        <Typography variant='h1' gutterBottom={true}>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component={'h1'}>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>
        <Typography variant='subtitle1'>subtitle 1</Typography>
        <Typography variant='subtitle2'>subtitle 2</Typography>

        <Typography variant='body1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae placeat dolores aut ipsa id commodi corrupti earum cupiditate iusto hic?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dicta?</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque quibusdam fugiat cupiditate accusantium nobis libero culpa mollitia soluta debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, atque?</Typography>
    </div>
  )
}

export default MuiTypography