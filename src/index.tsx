import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';

import { ConnectSample } from 'components/ConnectSample';
import { CW20TokensSample } from 'components/CW20TokensSample';
import { NetworkSample } from 'components/NetworkSample';
import { QuerySample } from 'components/QuerySample';
import { SignBytesSample } from 'components/SignBytesSample';
import { SignSample } from 'components/SignSample';
import { TxSample } from 'components/TxSample';
import ReactDOM from 'react-dom';
import './components/styles/main.css';
import {HomePage} from './components/HomePage';
import Navbar from './components/Navbar';
import {Navbarjs} from './components/Navbarjs';
import  MintContainer  from './components/MintContainer';
function App() {
  return (
    <div>

       <Navbar/>
<MintContainer/>


       {/* <Navbarjs/> */}


      
      
      
      {/* <ConnectSample />
      <QuerySample />
      <TxSample />
      <SignSample />
      <SignBytesSample />
      <CW20TokensSample />
      <NetworkSample /> */}
   
   
   
   
   
     {/* <HomePage/> */}
    </div>
  );
}

getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <App />
    </WalletProvider>,
    document.getElementById('root'),
  );
});
