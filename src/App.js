import twitter from './img/twitter.png';
import github from './img/github-2.png';
import instagram from './img/instagram.svg';
import linkedin from './img/linkedin-2.png';

import './App.css';

//Firebase imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


//Firebase API keys. Replace with the keys provided in the Firebase project dashboard.
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
        <a className="text-link" href = "mailto: test@gmail.com">
        Get in touch →
        </a>
        <div className="icon-block">          
        <a href = "mailto: test@gmail.com"><img src={instagram} className="icon" alt="instagram"/></a>
        <a href = "mailto: test@gmail.com"><img src={twitter} className="icon" alt="twitter"/></a>
        <a href = "mailto: test@gmail.com"><img src={github} className="icon" alt="github"/></a>
        <a href = "mailto: test@gmail.com"><img src={linkedin} className="icon" alt="linkedin"/></a>
        </div>
      </header>
    </div>
  );
}

export default App;
