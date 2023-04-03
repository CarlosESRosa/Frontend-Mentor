import "./App.css";

import nftImage from "./images/image-equilibrium.jpg";
import nftIcon from "./images/icon-ethereum.svg";
import clockIcon from "./images/icon-clock.svg";
import profileImg from "./images/image-avatar.png";

function App() {
  return (
    <main>
      <div className="nft-box">
        <img src={nftImage} id="main-img"></img>
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div id="infos-section">
          <div>
            <img src={nftIcon}></img>
            <span id="nft-value">0.041 ETH</span>
          </div>
          <div>
            <img src={clockIcon}></img>
            <span>3 3days left</span>
          </div>
        </div>
        <div className="profile-infos">
          <img src={profileImg}></img>
          <p>Creation of</p>
          <span>Jules Wyvern</span>
        </div>
      </div>
    </main>
  );
}

export default App;
