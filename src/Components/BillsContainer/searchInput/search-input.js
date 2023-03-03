import './search-input.scss';
import SearchIcon from '../../../Images/search-icon.svg';

function SearchInput(){
    return(
        <div className='searchInputContainer'>
            <img src={SearchIcon} alt="Search Icon" />
            <input type="text" placeholder='Pesquisar' />
        </div>
    )
}

export default SearchInput