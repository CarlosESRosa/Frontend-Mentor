import "./App.css";

import nftImage from "./images/image-equilibrium.jpg";
import nftIcon from "./images/icon-ethereum.svg";
import clockIcon from "./images/icon-clock.svg";
import profileImg from "./images/image-avatar.png";

function App() {
  return (
    <main>
      <div className="nft-box">
        <img src={nftImage} id="main-img" alt="nft ilustration"></img>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <section id="infos-section">
          <div>
            <img src={nftIcon} alt="nft icon"></img>
            <span id="nft-value">0.041 ETH</span>
          </div>
          <div>
            <img src={clockIcon} alt="clock icon"></img>
            <span>3 3days left</span>
          </div>
        </section>
        <section className="profile-infos">
          <img src={profileImg} alt="people profile"></img>
          <p>Creation of</p>
          <span>Jules Wyvern</span>
        </section>
      </div>
    </main>
  );
}

export default App;
