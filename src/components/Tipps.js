import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../img.css";
import RestaurantMenuSharpIcon from '@mui/icons-material/RestaurantMenuSharp';

export default function Tipps() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'flex-start',

        color: theme.palette.text.secondary,
        height: "100%"
    }));
    return (
        <><div className='tipContainer'>

            <h2 style={{ textAlign: "center" }}>Tipps die du beim Kochen beachten solltest!</h2>
            <Box sx={{ flexGrow: 1 }} >
                <Grid
                    container rowSpacing={3} spacing={3} columns={16}>
                    <Grid item xs={8} >
                        <Item style={{ display: "flex" }}>
                            <RestaurantMenuSharpIcon sx={{ fontSize: "1em" }} style={{ margin: "1% 2%" }} />
                            Lies das Rezept vollständig durch, bevor du anfängst.
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item style={{ display: "flex" }}>
                            <RestaurantMenuSharpIcon sx={{ fontSize: "1em" }} style={{ margin: "1% 2%" }} />
                            Bereite alle Zutaten und Geräte vor. Achte auf Frische und Qualität der Zutaten. Vor allem Fleisch/Fisch, Obst und Gemüse können für einen guten oder schlechten Geschmack verantwortlich sein.</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item style={{ display: "flex" }}>
                            <RestaurantMenuSharpIcon sx={{ fontSize: "1em" }} style={{ margin: "1% 2%" }} />
                            Achte auf die richtige Menge und Dosierung der Zutaten.</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item style={{ display: "flex" }}>
                            <RestaurantMenuSharpIcon sx={{ fontSize: "1em" }} style={{ margin: "1% 2%" }} />
                            Lies die Garzeiten genau und überprüfe, ob der gewünschte Garzustand bereits erreicht oder überschritten ist.</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item style={{ display: "flex" }}>
                            <RestaurantMenuSharpIcon sx={{ fontSize: "1em" }} style={{ margin: "1% 2%" }} />
                            Verwende geeignete Töpfe und Pfannen. Qualität geht vor Quantität. Ein gutes und scharfes Messer, eine gute Pfanne oder ein guter Topf sind wichtig.</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item style={{ display: "flex" }}>
                            <RestaurantMenuSharpIcon sx={{ fontSize: "1em" }} style={{ margin: "1% 2%" }} />
                            Vermeide es, das Gericht zu stark zu würzen. Nachwürzen ist in den meisten Fällen immer möglich.</Item>
                    </Grid>
                    <Grid item xs={16}>
                        <Item style={{ display: "flex" }}>
                            <RestaurantMenuSharpIcon sx={{ fontSize: "1em" }} style={{ margin: "0 1% 0 1%" }} />
                            Iss, lagere oder kühle das Gericht sofort nach dem Kochen. Natürlich gibt es auch hier Ausnahmen.</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
        </>
    )
}
