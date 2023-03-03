import './bills-table.scss';
import TableHeader from './tableHeader/table-header';
import TableBody from './tableBody/table-body';

function BillsTable(){
    return(
        <table>
            <TableHeader />
            <tbody>
                <TableBody />
                <TableBody />
                <TableBody />
            </tbody>
            
        </table>
    )
}

export default BillsTable