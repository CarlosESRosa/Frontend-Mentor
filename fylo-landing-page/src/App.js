import Header from "./components/Header/Header.js";
import ilustrationIntro from "./images/illustration-intro.png";
import attibuteImg1 from "./images/icon-access-anywhere.svg";
import attibuteImg2 from "./images/icon-security.svg";
import attibuteImg3 from "./images/icon-collaboration.svg";
import attibuteImg4 from "./images/icon-any-file.svg";

import "./css/App.css";
import "./css/Config.css";
import "./css/GetStarted.css";
import Button from "./components/Button/Button1.js";
import Attribute from "./components/Attribute/Attribute.js";

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
      <div className="attributes">
        <Attribute
          img={attibuteImg1}
          alt="Computer and cell phone"
          title="Access your files, anywhere"
          text="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere"
        />
        <Attribute
          img={attibuteImg2}
          alt="security shield"
          title="Security you can trust"
          text="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        />
        <Attribute
          img={attibuteImg3}
          alt="Peoples colaborating"
          title="Real-time collaboration"
          text="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        />
        <Attribute
          img={attibuteImg4}
          alt="Store File"
          title="Store any type of file"
          text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be secyrely stored and shared."
        />
      </div>
    </main>
  );
}

export default App;
