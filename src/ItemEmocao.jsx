import React from 'react';
import emocaoStyles from './emocao.module.css';
import { Link } from "react-router-dom";


const ItemEmocao = ({titulo, imagem}) => {
    const Cliqado = () => {
        alert(`Você está sentindo ${titulo}`)
    };

    return(
        <div  className={emocaoStyles.cardEmocao}>

            <div className={emocaoStyles.nomeEmocao}>
                {/* <a href='./Tristeza.jsx'></a> */}
                <Link to={titulo}><img src={imagem} alt={titulo} /></Link>
            </div>
            <h3>{titulo}</h3>
        </div>
    )
}

export default ItemEmocao;