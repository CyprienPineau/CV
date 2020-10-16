import React, { useEffect, useState } from 'react';
import './Intro.css'

function Intro ({}){
    const [endIntro,setEndIntro] = useState(false)

    //temporiration pour montrer l'intro
    useEffect(()=>{
        setTimeout(() => {
            setEndIntro(true)
          }, 1000);
    },[])
    
    return <div className=  { endIntro ?"intro end" : "intro" }>
        <p className="intro-text">Bonjour à vous !</p>
    </div>
}

export default Intro