import emocaoStyles from './emocao.module.css';
import Emocao1 from './img/alegria.webp';
import Emocao2 from './img/inveja.webp';
import Emocao3 from './img/medo.webp';
import Emocao4 from './img/nojinho.webp';
import Emocao5 from './img/raiva.webp';
import Emocao6 from './img/tedio.avif';
import Emocao7 from './img/tristeza.webp';
import Emocao8 from './img/vergonha.webp';
import Emocao9 from './img/ansiedade.avif';
import Alegria from './Paginas/img2/alegriap.png';
import Raiva from './Paginas/img2/raivap2.png';
import Tedio from './Paginas/img2/tediop.png';
import Vergonha from './Paginas/img2/vergonhap.png';
import Tristeza from './Paginas/img2/tristezap.png';
import Medo from './Paginas/img2/medop.png';
import Ansiedade from './Paginas/img2/ansiedadep.png';
import Inveja from './Paginas/img2/invejap.png';
import Nojinho from './Paginas/img2/nojinhop.png';
import CatalagoEmocoes from './CatalagoEmocao';
import PaginaComp from './Paginas/PaginaComp';
import React, {useState} from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




function App() {
  const [color, setColor] = useState ("blue")
  const click = () => {

  }
  const catalagoEmocoes = [
    {
      nome: 'Alegria',
      imagem: Emocao1,
      emoji: '😁',
      imagempagina: Alegria,
      cor: '#ecae15'  
    },
    {
      nome: 'Inveja',
      imagem: Emocao2,
      emoji: '🥺',
      imagempagina: Inveja,
      cor: '#018a7e'
    },
    {
      nome: 'Medo',
      imagem: Emocao3,
      emoji: '😨',
      imagempagina: Medo,
      cor: '#733e9d'
    },
    {
      nome: 'Nojinho',
      imagem: Emocao4,
      emoji: '🤢',
      imagempagina: Nojinho,
      cor: '#49a236'
    },
    {
      nome: 'Raiva',
      imagem: Emocao5,
      emoji: '👿',
      imagempagina: Raiva,
      cor: '#a11205'
    },
    {
      nome: 'Tedio',
      imagem: Emocao6,
      emoji: '🙄',
      imagempagina: Tedio,
      cor: '#5244b3'
    },
    {
      nome: 'Tristeza',
      imagem: Emocao7,
      emoji: '😢',
      imagempagina: Tristeza,
      cor: '#315ba8'
    },
    {
      nome: 'Vergonha',
      imagem: Emocao8,
      emoji: '🤐',
      imagempagina: Vergonha,
      cor: '#d8439c'
    },
    {
      nome: 'Ansiedade',
      imagem: Emocao9,
      emoji: '😰',
      imagempagina: Ansiedade,
      cor: '#d56a22'
    }

  ]

  const rotas = catalagoEmocoes.map ((i)=> ({
    
      path: `/${i.nome}`,
      element: <PaginaComp emocao={i.nome} emoji={i.emoji} img={i.imagempagina} cor={i.cor}/>
  
  }));

  const rotaHome = 
    [{
      path: "/",
      element: (
      <>
        <CatalagoEmocoes 
        Titulo="Emoções"
        catalagos={catalagoEmocoes}/>
      </>
    )}]

    const todasRotas = [...rotaHome, ...rotas];

  const router = createBrowserRouter(
    todasRotas
  );

  return (
    
    <RouterProvider router={router} />


  )
}

export default App;
