import './App.css';

import CenterCard from './components/CenterCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenterCard number = '1'/>
        <CenterCard number = '2'/>
        <CenterCard number = '3'/>
        <CenterCard number = '4'/>
      </header>
    </div>
  );
}

export default App;
