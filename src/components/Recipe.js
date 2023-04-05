import * as React from 'react'
import { styled } from '@mui/material/styles'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import FolderIcon from '@mui/icons-material/Folder'
import DeleteIcon from '@mui/icons-material/Delete'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { CardMedia, Container } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocalDiningIcon from '@mui/icons-material/LocalDining'
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining'
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import { Link } from 'react-router-dom'

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}))
export default function Recipe ({ recipes }) {
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(true)
  const { index } = useParams()

  let randomIndex = 0
  do {
    randomIndex = Math.floor(Math.random() * recipes.length)
  } while (randomIndex == index)
  const recommendation = recipes[randomIndex]

  const recipe = recipes[index]

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

  return (
    <>
      <Grid container spacing={0} mr={5} mt={10} sx={{ display: 'flex',justifyContent:"center" }}>
        <Grid
          item
          xs={12}
          md={7}
          p={5}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:"center"
            
          }}
        >
          <Typography
            sx={{
              mt: 4,
              mb: 2,
              fontSize: '3em',
              color: 'green',

              width: '80%',
              justifyContent: 'center',
              display: 'flex'
            }}
            variant='h6'
            component='div'
          >
            {recipe && recipe.fields.rezeptName}
          </Typography>
          <Box
            style={{
              display: 'flex',

              width: '100%',
              justifyContent: 'flex-end'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                
                width: 650,
                maxWidth: 1200
              }}
            >
              <CardMedia
                component='img'
                image={recipe && recipe.fields.rezeptBilder.fields.file.url}
                style={{
                  maxHeight: 550,
                  width: '50%',
                  maxWidth: 660
                }}
              />
              <List
                sx={{
                  width: '70%',
                  maxWidth: 660,
                  bgcolor: 'background.paper',
                  marginLeft: '1em'
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <AccessTimeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Zubereitungszeit' secondary='' />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <LocalDiningIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Schwierigkeitsgrad' secondary='' />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <SoupKitchenIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Portionen' secondary='' />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <DinnerDiningIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Mahlzeit' secondary='' />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <TakeoutDiningIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Art' secondary='' />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ThumbUpIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary='Bewertungen' secondary='' />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          style={{
            display: 'flex'
          }}
        >
          <Item
            style={{
              marginTop: '15px',
              
              height: '85%',
              display: 'flex',
              flexDirection:"column",
              justifyContent:"center"
            }}
          >
            <h4>Empfohlen</h4>
            <Box style={{ width: '15rem' }}>
              <CardMedia
                component='img'
                style={{ height: '70%' }}
                image={
                  recommendation &&
                  recommendation.fields.rezeptBilder.fields.file.url
                }
              />
              <Box className='h-50'>
                <Box>{recommendation && recommendation.fields.rezeptName}</Box>
                <Box>
                  {recommendation && recommendation.fields.beschreibung}
                </Box>
                <Link to={`/Kochbuch/${randomIndex}`}>
                  <Button variant='primary'>Go </Button>
                </Link>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
      <Grid
        container
        mx={5}
        sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}
      >
        <Grid
          item
          xs={16}
          md={4}
          justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
          style={{
            display: 'flex'
          }}
        >
          <List dense={dense}>
            <Typography variant='h4' color='success.main'>
              Zutaten
            </Typography>

            {recipe &&
              recipe.fields.ingredients.map((an, i) => (
                <>
                  <ListItem key={i}>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary={an} secondary={''} />
                  </ListItem>
                </>
              ))}
          </List>
        </Grid>
        <Grid
          item
          xs={16}
          md={7}
          justifyContent={{xs:"flex-start",md:"center"}}
          sx={{
            display: 'flex',

            
          }}
        >
          <List dense={dense}>
            <Typography variant='h4' color='success.main'>
              Arbeitsschritte
            </Typography>

            {recipe &&
              recipe.fields.anleitung.map((an, i) => (
                <>
                  <ListItem key={i}>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary={an} secondary={''} />
                  </ListItem>
                </>
              ))}
          </List>
        </Grid>
      </Grid>
    </>
  )
}
