import './App.css';

import CenterCard from './components/CenterCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenterCard> Children 1 </CenterCard>
        <CenterCard> Children 2 </CenterCard>
        <CenterCard> Children 3 </CenterCard>
      </header>
    </div>
  );
}

export default App;
