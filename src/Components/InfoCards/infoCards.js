import './infoCards.scss';
import Entries from './EntriesCard/entriesCard';
import Outs from './OutsCard/outsCard';
import Results from './ResultsCard/resultsCard';
import LeftArrow from '../../Images/white-left-arrow.svg';
import RightArrow from '../../Images/white-right-arrow.svg';

function infoCards(){
    return(
        <section className='infoCards__container'>
            <div className='monthSelect'>
                <img src={LeftArrow} alt="Left Arrow" />
                <span>Abril / 2023</span>
                <img src={RightArrow} alt="Right Arrow" />
            </div>
            <div className='infoCards__content'>
                <Entries />
                <Outs />
                <Results />
            </div>
        </section>
    )
}

export default infoCards