import Loginpage from "../page/loginpage";
import "../style/mainpage.css"

 

import { useState } from "react";

function mainpage() {
  const [showLoginpage, setShowLoginpage] = useState(false);

  const openLoginModal = () => {
    setShowLoginpage(true);
  };

  return (
    <>
      
      <div className="welcome-main">
       {!showLoginpage && (
        <div className="main-count">
          <div className="main-content">
            <div className="main-logo"></div>

            <div className="h1-content1">
              <h1>Welcome to Aqlut</h1>
              <p>
                Lorem Ipsum is simply dummy text of th printing and typesetting
                industry.
              </p>
            </div>

            <div className="lanuage-field">
              <div className="wel-label">
                <label  htmlFor="Language">Language</label>
              </div>
              <div className="wel-inpt">
                <input type="text" id="Language" name="Language" />
              </div>
            </div>

            <div className="continu-button">
              <button onClick={openLoginModal}>CONTINUE</button>
            </div>
          </div>
        </div>
          )}
          {showLoginpage && <Loginpage />}
      </div>
     
    </>
  );
}

export default mainpage;
