import logo from './logo.svg';
import './App.css';
import Anime from 'react-anime';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Anime opacity={[0,1]}>
          <img src={logo} className="App-logo" alt="logo" />
        </Anime>
        <Anime translateX={[100, 0]}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </Anime>
        <Anime translateX={[-100, 0]}>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Anime>
      </header>
    </div>
  );
}

export default App;
