import ItemEmocao from "./ItemEmocao";
import emocaoStyles from './emocao.module.css';

const CatalagoEmocoes = ({titulo, catalagos}) => {
    
    return (
        <>
            <h1  className={emocaoStyles.sentindo}>Como está se sentindo hoje?</h1>
            <h1 className={emocaoStyles.subTitle}>{titulo}</h1>
            <div className={emocaoStyles.sectionItens}>
                {
                    catalagos.map((catalago) =>
                        <ItemEmocao titulo={catalago.nome} imagem={catalago.imagem} />
                )
                }
            </div>
        </>
    )
}

export default CatalagoEmocoes;