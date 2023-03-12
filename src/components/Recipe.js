
import * as React from 'react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { CardMedia, Container } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';




const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));
export default function Recipe({ recipes }) {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(true);
    const { index } = useParams();

    const recipe = recipes[index];

    return (
        <div>


            <Grid item xs={12} md={6} style={{ marginLeft: "25%" }}>
                <Typography sx={{ mt: 4, mb: 2 }}
                    variant="h6" component="div">
                    {recipe && recipe.fields.rezeptName}
                </Typography>
                <Box style={{ display: "flex" }}>
                    <Box sx={{
                        display: 'flex', borderRadius: "1%", borderStyle: "ridge",width:1000,
                        maxWidth: 1200,
                    }}>
                        <CardMedia component="img"
                            image={recipe && recipe.fields.rezeptBilder.fields.file.url}
                            style={{ maxHeight: 450, width: "60%", maxWidth: 560 }} />
                        <List sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper',marginLeft:"5%" }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AccessTimeIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Zubereitungszeit" secondary="Jan 9, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LocalDiningIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Schwierigkeitsgrad" secondary="Jan 7, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <SoupKitchenIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Portionen" secondary="July 20, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <DinnerDiningIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Mahlzeit" secondary="Jan 9, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <TakeoutDiningIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Art" secondary="Jan 7, 2014" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ThumbUpIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Bewertungen" secondary="July 20, 2014" />
                            </ListItem>
                        </List>
                    </Box>
                    <div style={{border:"solid",marginLeft:"10%"}}>
                        <TextField
                        style={{border:"solid pink",display:"block"}}
                        
                            className="bar"
                            id="outlined-basic"
                            variant="outlined"
                            size="normal"
                            label="Search"
                            margin="dense" />

                        <Button variant="contained"
                            color="success">search</Button>
                    </div>
                </Box>

                <Demo>
                    <List dense={dense}>
                        <h2>Arbeitsschritte für Schupfnudelrezept</h2>


                        {recipe && recipe.fields.anleitung.map((an, i) =>
                            <>
                                <ListItem key={i}>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={an}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>
                            </>)}
                    </List>
                </Demo>
            </Grid>
        </div>

    )
}
