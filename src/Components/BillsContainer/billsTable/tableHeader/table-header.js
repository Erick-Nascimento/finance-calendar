import './table-header.scss';

function TableHeader(){
    return(
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Vencimento</th>
                    <th>Paga em</th>
                    <th>Status</th>
                    <th>Tipo</th>
                    <th>Observação</th>
                    <th>Parcela</th>
                </tr>
            </thead>
    )
}

export default TableHeader