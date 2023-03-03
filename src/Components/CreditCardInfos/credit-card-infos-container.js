import TotalBalance from '../TotalBalance/total-balance';
import './credit-card-infos-container.scss';
import CreditCard from './creditCards/credit-card';
import LeftArrow from '../../Images/black-left-arrow.svg';
import RightArrow from '../../Images/black-right-arrow.svg';

function CreditCardInfosContainer(){
    return(
        <div className='creditCardInfosContainer'>
            <img src={LeftArrow} alt="Left Arrow" />
            <div className='creditCardContainer'>
            <CreditCard />
            </div>
            <TotalBalance />
            <img src={RightArrow} alt="Right Arrow" />
        </div>
    )
}

export default CreditCardInfosContainer