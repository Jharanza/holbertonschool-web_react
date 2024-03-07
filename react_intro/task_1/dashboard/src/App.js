import logo from './holberton-logo.jpg';
import { getFooterCopy, getFullYear } from './utils';
import './App.css';

function App() {

  const year = getFullYear();
  const footerCopy = getFooterCopy();

  return (
    <div className="App">
        <div className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </div>
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
        </div>
        <div className='App-footer'>
          <p>Copyright { year } - { footerCopy }</p>
        </div>
    </div>
  );
}

export default App;
