import React from 'react';
import ConnectWallet from './components/ConnectWallet';

const App = () => {
  return (
    <ConnectWallet>
      <div style={{ textAlign: 'center', paddingTop: '60px', fontFamily: 'sans-serif' }}>
        <h1>FurWhisk Swap (Wallet Ready)</h1>
        <p>Connect your wallet and prepare to swap. The meowgic is real.</p>
      </div>
    </ConnectWallet>
  );
};

export default App;
