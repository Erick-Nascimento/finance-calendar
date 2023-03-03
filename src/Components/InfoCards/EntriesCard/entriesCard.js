import './entriesCard.scss'
import entriesIcon from '../../../Images/entriesIcon.svg'

function Entries(){
    return(
        <div className='entriesCard__container'>
            <div className='entriesCard__content'>
                <div className='entriesCard__header'>
                    <h2>Entradas</h2>
                    <img src={entriesIcon} alt="Entries" />
                </div>
                
                <span>R$3.700,00</span>
            </div>
        </div>
    )
}

export default Entries