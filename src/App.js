import logo from './logo.svg';
import './App.css';

function App() {

  let navi = '최소진 나빠요~~^^7';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {navi}
        </p>
        
      </header>
    </div>
  );
}

export default App;
