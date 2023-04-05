import { red } from '@mui/material/colors'
import React from 'react'
import background from '../pics/backgroundHeader.jpg'
import '../search.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box, Typography } from '@mui/material'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export default function Seachbar () {
  return (
    <div
      className='background'
      style={{
        backgroundImage: `url(${background})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box className='search'>
        <Box>
          <Typography variant='h3' color='common.white'>
            Suche in 3963 Rezepten auf Spoon.de
          </Typography>
          <Typography color='common.white'>
            Entdecken Sie unsere vielen leckeren Rezepte, die einfach & schnell
            zuzubereiten sind. Stöbern Sie in unserer Rezeptwelt von
            Kochbuch.de. Probieren Sie etwas Neues aus! Viel Spaß beim
            Nachkochen!
          </Typography>

          <TextField
            className='bar'
            id='outlined-basic'
            variant='outlined'
            size='normal'
            label='Search'
            margin='dense'
          />
          <div>
            <Button variant='contained' color='success'>
              search
            </Button>
          </div>
        </Box>
      </Box>
    </div>
  )
}
