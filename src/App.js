import './App.css';
import Header from './Components/Header/header'
import InfoCards from './Components/InfoCards/infoCards'
import AlertBar from './Components/AlertBar/alertBar'
import BillsContainer from './Components/BillsContainer/bills-container';
import TotalBalance from './Components/TotalBalance/total-balance';
import CreditCardInfosContainer from './Components/CreditCardInfos/credit-card-infos-container';

function App() {
  return (
    <div className="App">
      <Header />
      <InfoCards />
      <AlertBar />
      <BillsContainer />
      <div className='containerTotalBalance'>
        <TotalBalance />
      </div>
      <CreditCardInfosContainer />
    </div>
  );
}

export default App;
