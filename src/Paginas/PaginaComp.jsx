import "./Alegria.css"
import React, {useState} from 'react';



function PaginaComp({emoji, emocao, img, cor}) {
   const style = 
   {
    'background': `radial-gradient(${cor}, black)`,
    'background-repeat': 'no-repeat',
    'background-attachment': 'fixed'
   }

  return (
    <div className="conteudo" style={style}>
        <h1>{emoji} você está sentindo {emocao + emoji}</h1>
        <img src={img}/>
      </div>
    )
    
  }
    export default PaginaComp;  