import './header.scss'
import logo from '../../Images/logo.svg'
import NewTransitionBtn from './NewTransitionBtn/newTransitionBtn'

function Header() {
  return (
    <header>
      <div className='header__container'>
        <div className='header__content'>
          <img src={logo} alt='Logotipo' />
          <NewTransitionBtn/>
        </div>
      </div>
    </header>
  )
}

export default Header