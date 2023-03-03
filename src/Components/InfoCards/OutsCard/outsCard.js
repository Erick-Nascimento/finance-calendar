import './outsCard.scss'
import outsIcon from '../../../Images/outsIcon.svg'

function Outs(){
    return(
        <div className='outsCard__container'>
            <div className='outsCard__content'>
                <div className='outsCard__header'>
                    <h2>Saídas</h2>
                    <img src={outsIcon} alt="Outs" />
                </div>
                
                <span>R$3.700,00</span>
            </div>
        </div>
    )
}

export default Outs