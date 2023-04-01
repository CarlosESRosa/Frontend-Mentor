import Header from "./components/Header/Header.js";
import ilustrationIntro from "./images/illustration-intro.png";

import "./css/App.css";
import "./css/Config.css";
import "./css/GetStarted.css";
import Button from "./components/Button/Button1.js";

function App() {
  return (
    <main>
      <Header />
      <div className="getStarted">
        <img src={ilustrationIntro}></img>
        <h1 className="main-title">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="basic-text">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button text="Get Started" />
      </div>
    </main>
  );
}

export default App;
