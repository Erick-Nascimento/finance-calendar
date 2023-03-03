import './alertBar.scss'
import alertIcon from '../../Images/alertIcon.svg'

function alertBar(){
    return(
        <div className='alertBar__container'>
            <div className='alertBar__content'>
                <img src={alertIcon} alt=""/>
                <span>Atenção! Você está quase atingindo o limite estabelecido.</span>
            </div>
        </div>
    )
}

export default alertBar