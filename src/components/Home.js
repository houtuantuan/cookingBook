import React from 'react'
import Navbar from "./Navbar"
import Seachbar from './Seachbar'
import TitlebarImageList from "./TitlebarImageList"
import Tipps from "./Tipps"
import Footer from './Footer'


export default function Home({recipes}) {
    return (
        <>
            
            <div><Seachbar /></div>
            <div><TitlebarImageList 
            recipes={recipes}
            /></div>
            <div><Tipps /></div>
            
            
        </>

    )
}
