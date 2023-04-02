import Header from "./components/Header/Header.js";
import Attribute from "./components/Attribute/Attribute.js";
import UserFeedback from "./components/UserFeedback/UserFeedback.js";

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
import logo from "./images/logo.svg";
import locationIcon from "./images/icon-location.svg";
import phoneIcon from "./images/icon-phone.svg";
import emailIcon from "./images/icon-email.svg";
import socialMidia from "./images/social-midia.png";

import "./css/App.css";
import "./css/Config.css";

function App() {
  return (
    <main>
      <Header />
      <section className="getStarted">
        <img src={ilustrationIntro}></img>
        <h1 className="main-title">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="basic-text">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <button className="get-started-button">Get Started</button>
      </section>
      <section className="attributes">
        <Attribute
          img={attibuteImg1}
          alt="Computer and phone"
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
      </section>
      <section className="stay-productive">
        <img src={stayProductive} alt="Peoples talking"></img>
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
      </section>
      <section className="user-feedback">
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
      </section>
      <section className="early-access">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <input type="email" placeholder="email@example.com"></input>
        <button>Get Started For Free</button>
      </section>
      <section className="company-infos">
        <img src={logo} alt="Fylo logo" id="logo-info"></img>
        <div>
          <img src={locationIcon} alt="location icon"></img>
          <p>
            Lorem ipsum solor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <img src={phoneIcon} alt="Phone icon"></img>
          <p>+1-5433-123-4567</p>
        </div>
        <div>
          <img src={emailIcon} alt="Email icon"></img>
          <p>example@fylo.com</p>
        </div>
      </section>
      <div className="about-us">
        <ul>
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="contact-us">
        <ul>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
      <footer>
        <img src={socialMidia} alt="social midia icons"></img>
      </footer>
    </main>
  );
}

export default App;
