import { red } from '@mui/material/colors'
import React from 'react'
import background from "../pics/backgroundHeader.jpg"
import "../search.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function Seachbar() {
    return (

        <div className='background'
            style={{ backgroundImage: `url(${background})` }}>
            <div className="search">
                <div>
                    <h1>Suche in 3963 Rezepten auf Spoon.de</h1>
                    <p>Entdecken Sie unsere vielen leckeren Rezepte, die einfach & schnell zuzubereiten sind. Stöbern Sie in unserer Rezeptwelt von Kochbuch.de. Probieren Sie etwas Neues aus! Viel Spaß beim Nachkochen!</p>

                    <TextField
                        className="bar"
                        id="outlined-basic"
                        variant="outlined"
                        size="normal"
                        label="Search"
                        margin="dense"

                    />
                    <div>
                        <Button variant="contained"
                            color="success">search</Button>
                    </div>
                </div>



            </div>
        </div>
    )
}
