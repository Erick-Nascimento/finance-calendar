import './total-balance.scss';

function TotalBalance(){
    return(
        <div className='totalBalance'>
            {/*Esta área mostra o balanço total de todos os cartões de crédito cadastrados*/}
            <div className='totalLimit'>
                <p>Limite Total</p>
                <span>R$ 5.600,00</span>
            </div>
            <div className='usedLimit'>
                <p>Limite Utilizado</p>
                <span>R$ 5.600,00</span>
            </div>
            <div className='availableLimit'>
                <p>Limite Disponível</p>
                <span>R$ 5.600,00</span>
            </div>
            <div className='installmentLimit'>
                <p>Total Parcelado</p>
                <span>R$ 5.600,00</span>
            </div>
            <div className='nextBill'>
                <p>Próxima Fatura</p>
                <span>R$ 5.600,00</span>
            </div>
        </div>
    )
}

export default TotalBalance