import Header from "./components/Header/Header.js";
import ilustrationIntro from "./images/illustration-intro.png";
import attibuteImg1 from "./images/icon-access-anywhere.svg";
import attibuteImg2 from "./images/icon-security.svg";
import attibuteImg3 from "./images/icon-collaboration.svg";
import attibuteImg4 from "./images/icon-any-file.svg";
import stayProductive from "./images/illustration-stay-productive.png";
import profile1 from "./images/profile-1.jpg";
import profile2 from "./images/profile-2.jpg";
import profile3 from "./images/profile-3.jpg";
import quotes from "./images/bg-quotes.png";

import "./css/App.css";
import "./css/Config.css";
import "./css/GetStarted.css";
import "./css/StayProductive.css";
import Button from "./components/Button/Button1.js";
import Attribute from "./components/Attribute/Attribute.js";
import UserFeedback from "./components/UserFeedback/UserFeedback.js";

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
      <div className="stay-productive">
        <img src={stayProductive}></img>
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs
        </p>
        <p>
          Secyrely share files and folders wih friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#">See how Fylo works</a>
      </div>
      <div className="user-feedback">
        <img src={quotes} id="quotes" alt="quotes"></img>
        <UserFeedback
          feedback="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          img={profile1}
          name="Satish Patel"
          office="Founder & CEO, Hunddle"
        />
        <UserFeedback
          feedback="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          img={profile2}
          name="Bruce McKenzie"
          office="Founder & CEO, Hunddle"
        />
        <UserFeedback
          feedback="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
          img={profile3}
          name="Iva Boyd"
          office="Founder & CEO, Hunddle"
        />
      </div>
    </main>
  );
}

export default App;
