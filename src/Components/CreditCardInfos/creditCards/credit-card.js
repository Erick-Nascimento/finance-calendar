import './credit-card.scss';
import WifiIcon from '../../../Images/wifi-icon.svg';
import Chip from '../../../Images/credit-card-chip.svg';
import VisaBrand from '../../../Images/visa-brand.svg';

function CreditCard(){
    return(
        <div className='creditCard'>
            <span className='creditCardNumber'>1111 2222 3333 4444</span>
            <div className='bottomCreditCard'>
                <div className='chipContainer'>
                    <img src={WifiIcon} alt="Wifi Icon" />
                    <img src={Chip} alt="Chip" />
                </div>
                <div className='creditCardBrand'>
                    <img src={VisaBrand} alt="Visa Brand" />
                </div>
            </div>
        </div>
    )
}

export default CreditCard