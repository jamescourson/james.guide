import Logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <>
      <img src={Logo} alt="James' Guide" id="logo" />
      <span id="caption">
        <small>Returning 2024</small>
        <a href="https://github.com/jamescourson/james.guide">GitHub</a>
      </span>
    </>
  )
}

export default App;
