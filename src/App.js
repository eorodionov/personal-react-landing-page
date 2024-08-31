import twitter from "./img/twitter.png";
import github from "./img/github-2.png";
import instagram from "./img/instagram.svg";
import linkedin from "./img/linkedin-2.png";

import "./App.css";

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
  measurementId: "G-2SKMG17KJC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Evgeny Rodionov</h1>
        <p>London-based architect, entrepreneur, and educator.</p>
        <p>
          Evgeny Rodionov is a product leader building user-centric solutions in
          data, marketing, and property. 2x zero to one, ex. founder, data
          platforms, no-code & design tools, and generative AI.
        </p>
        <p>
          Digital, product, and strategy experience working with enterprise
          clients: JP Morgan Asset Management, The Crown Estates, Energy Systems
          Catapult, Landsec, British Land, Dyson, Aviva, Crown Resorts, and
          London’s Science Museum.
        </p>
        <p>
          Ex. programme manager and guest lecturer at UCL’s{" "}
          <a href="https://www.ucl.ac.uk/bartlett/architecture/programmes/postgraduate/bio-integrated-design-bio-id-marchmsc">
            Bartlett School of Architecture, ranked #1 worldwide.
          </a>
          .
        </p>
        <a
          className="text-link no-underline"
          href="mailto: eorodionov@gmail.com"
        >
          Get in touch →
        </a>
        <div className="icon-block">
          <a href="https://www.instagram.com/evmatica/">
            <img src={instagram} className="icon" alt="instagram" />
          </a>
          <a href="https://twitter.com/evmatica">
            <img src={twitter} className="icon" alt="twitter" />
          </a>
          <a href="https://github.com/eorodionov">
            <img src={github} className="icon" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/evgeny-rodionov-46748775/">
            <img src={linkedin} className="icon" alt="linkedin" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
