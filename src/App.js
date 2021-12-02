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
  apiKey: "AIzaSyBs3LpNHoYJWSNvAuCyf2qSgsacec8LlwM",
  authDomain: "evgeny-rodionov-landing.firebaseapp.com",
  projectId: "evgeny-rodionov-landing",
  storageBucket: "evgeny-rodionov-landing.appspot.com",
  messagingSenderId: "388223217214",
  appId: "1:388223217214:web:028c99cd75a3e93312ab6f",
  measurementId: "G-2SKMG17KJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Evgeny Rodionov</h1>
        <p>
        London-based architect, entrepreneur, and educator.
        </p>
        <p>
        Delivering digital and built projects at <a href="https://www.wilkinsoneyre.com/">WilkinsonEyre</a> featured in <a href="https://www.dezeen.com/2019/10/22/sentosa-brani-masterplan-wilkinsoneyre-grant-associates-singapore/">Dezeen</a> and <a href="https://www.architectsjournal.co.uk/news/wilkinsoneyres-iceland-biodome-cluster-wins-planning">Architect’s Journal</a>.
        </p>
        <p>
        Design and strategy experience working with <a href="https://www.dysoninstitute.com/the-experience/the-accommodation/">Dyson</a>, <a href="https://www.aviva.co.uk/">Aviva</a>, <a href="https://www.crownresorts.com.au/">Crown Resorts</a>, <a href="https://www.sciencemuseum.org.uk/see-and-do/medicine-wellcome-galleries">London’s Science Museum</a>, and <a href="https://grant-associates.uk.com/projects/sentosa">Sentosa Development Corporation</a>.
        </p>
        <p>
        Guest lecturer and tutor at UCL’s <a href="https://www.ucl.ac.uk/bartlett/architecture/programmes/postgraduate/bio-integrated-design-bio-id-marchmsc">Bartlett School of Architecture</a>.
        </p>
        <a className="text-link no-underline" href = "mailto: eorodionov@gmail.com">
        Get in touch →
        </a>
        <div className="icon-block">          
        <a href = "https://www.instagram.com/evmatica/"><img src={instagram} className="icon" alt="instagram"/></a>
        <a href = "https://twitter.com/evmatica"><img src={twitter} className="icon" alt="twitter"/></a>
        <a href = "https://github.com/eorodionov"><img src={github} className="icon" alt="github"/></a>
        <a href = "https://www.linkedin.com/in/evgeny-rodionov-46748775/"><img src={linkedin} className="icon" alt="linkedin"/></a>
        </div>
      </header>
    </div>
  );
}

export default App;
