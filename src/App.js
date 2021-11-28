import twitter from './img/twitter.png';
import github from './img/github-2.png';
import instagram from './img/instagram.svg';
import linkedin from './img/linkedin-2.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sanela Nicolai</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod tortor quis tempus pellentesque. 
        </p>
        <p>
        Quisque pharetra massa eget pulvinar <a href="url">gravida</a>. Duis hendrerit lobortis odio, id imperdiet felis auctor ac. 
        </p>
        <p>
        Curabitur molestie erat justo, non bibendum quam scelerisque et. 
        </p>
        <p>
        Cras elementum bibendum quam, sed facilisis purus fringilla vel.
        </p>
        <a href = "mailto: eorodionov@gmail.com">
        Get in touch →
        </a>
        <div className="icon-block">          
        <img src={instagram} className="icon" alt="logo" />
        <img src={twitter} className="icon" alt="logo" />
        <img src={github} className="icon" alt="logo" />
        <img src={linkedin} className="icon" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
