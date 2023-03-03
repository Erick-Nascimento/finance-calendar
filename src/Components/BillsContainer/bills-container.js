import './bills-container.scss';
import BillsTable from './billsTable/bills-table';
import SearchInput from './searchInput/search-input';

function BillsContainer(){
    return(
        <div className='billsContainer'>
            <SearchInput />
            <BillsTable />
        </div>
    )
}

export default BillsContainer