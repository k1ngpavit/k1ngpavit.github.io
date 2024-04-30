import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the design playground of Pavit Saluja!
        </p>
        <p>
        Cognitive Science @ UCSD
        </p>
        <p>
          Here's one of my projects!
        </p>
        <a
          className="App-link"
          href="https://www.figma.com/file/V2wwG2jM1pWWd3bdCGOTZ7/COGS-127-High-Fidelity-Prototypes?type=design&node-id=1%3A7&mode=design&t=lUnLNMPV4WcVCtqU-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Go
        </a>
      </header>
    </div>
  );
}

export default App;
