import './resultsCard.scss'
import resultsIcon from '../../../Images/resultsIcon.svg'

function Results(){
    return(
        <div className='resultsCard__container'>
            <div className='resultsCard__content'>
                <div className='resultsCard__header'>
                    <h2>Total</h2>
                    <img src={resultsIcon} alt="Total" />
                </div>
                
                <span>R$3.700,00</span>
            </div>
        </div>
    )
}

export default Results