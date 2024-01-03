import { useNavigate } from "react-router-dom";
import "../style/loginpage.css";

import Resetmodal from "./resetmodal";
import { useState } from "react";

function loginmodal() {
  const [resetmodal, setResetmodal] = useState(false); 
  const openresetmodal = () => {
    setResetmodal(true);
  };
     const Navigate=useNavigate()
  const layout = () => {
    Navigate('/l/one')
    
  }
   
  return (
    <>
      <div className="log-main">
        {!resetmodal && (
          <div className="log-count">
            <div className="log-content">
              <div className="log-img"></div>
              <div className="main-log-content">
                <p>Login to your account</p>

                <div className="email-content">
                  <label htmlFor="">Email</label>
                  <div className="email-input">
                    <input type="text" placeholder="Email" />
                  </div>
                </div>

                <div className="email-password">
                  <label htmlFor="">Password</label>
                  <div className="email-input">
                    <input type="text" placeholder="Password" />
                  </div>
                </div>

                <div className="forget-password">
                  <button onClick={openresetmodal}>Forgot Password?</button>
                </div>

                <div className="sign-button">
                  <button onClick={layout}>SIGN IN</button>
                </div>

                <div className="contact-us">
                  <h5>Don’t have an account? Contact Us</h5>
                </div>
              </div>
            </div>
          </div>
        )}
        {resetmodal && <Resetmodal />}
      </div>
    </>
  );
}

export default loginmodal;
