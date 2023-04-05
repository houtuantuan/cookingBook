import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import '../img.css'

export default function TitlebarImageList ({ recipes }) {
  return (
    <>
      <div className='titleContainer'>
        <h2 className='title'>Beliebte Rezeptes</h2>
      </div>

      <Box
        style={{ display: 'flex', justifyContent: 'center' }}
        sx={{ flexGrow: 1 }}
      >
        <Grid
          className='picContainer'
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {recipes.map((rec, index) => (
            <Grid
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}
              item
              xs={3}
              sm={4}
              md={4}
              key={index}
            >
              <Card key={index} sx={{ maxWidth: 370 }}>
                <CardActionArea>
                  <Link to={`/cookingBook/${index}`}>
                    <CardMedia
                      component='img'
                      height='440'
                      image={rec.fields.rezeptBilder.fields.file.url}
                      alt='green iguana'
                    />
                  </Link>
                  <CardContent>
                    <Link to={`/cookingBook/${index}`} style={{ textDecoration: 'none' }}>
                      <Typography
                        sx={{ fontWeight: 'bold' }}
                        gutterBottom
                        variant='h5'
                        component='div'
                        color='success.main'
                      >
                        {rec.fields.rezeptName}
                      </Typography>
                    </Link>
                    <Typography variant='body2' color='text.secondary'>
                      {rec.fields.beschreibung}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Link to={`/cookingBook/${index}`}>
                    <Button size='small' color='success'>
                      go for it
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
