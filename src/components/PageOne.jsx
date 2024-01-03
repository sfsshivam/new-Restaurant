import "../style/PageOne.css";
 
// import { useNavigate } from "react-router-dom";
 

function PageOne() {
  // const navigate = useNavigate();
  // function changepassword() {
  //   navigate("/Changepassword")
    
  // }
  return (
    <>
    
    
    
      <div className="onepage-main">
        <div className="onepage-count">
          <div className="onepage-main-content">
            <div className="profile-">
              <p>Profile</p>
            </div>

            <div className="onepage-change-password">
              <button   >CHANGE PASSWORD</button>
            </div>
          </div>

          <div className="profile-second-box">
            <div className="profile-second-box-count">
              <div className="profile-second-box-content">
                <div className="profile-second-box-content-1">
                  <div className="profile-second-box-content-1-logo"></div>

                  <div className="profile-second-box-content-3">
                    <button className="profile-remove">CHANGE PHOTO</button>
                    <button className="profile-cahnge">REMOVE PHOTO</button>
                    
                  </div>
                </div>

                <div className="profile-second-box-content-2">
                  <button>Disable Orders</button>
                </div>
              </div>
            </div>
          </div>

          <div className="onepage-main-profile-content">
             <div className="onepage-main-profile-content1">
                <div className="onepage-main-profile-content1-content">
                    <div className="onepage-main-profile-content1-content-label">
                        <label htmlFor="">Restaurant Name / اسم المطعم</label>
                         
                    </div>

                    <div className="onepage-main-profile-content1-content-input">
                        <div className="onepage-main-profile-content1-content-input1">
                           <input type="text" placeholder="The Waldorf Hilton" />

                        </div>

                        <div className="onepage-main-profile-content1-content-input2">
                           <input type="text" placeholder="والدورف هيلتون" />

                        </div>


                        <div className="onepage-main-profile-content1-content-email">
                            <div className="email-label">
                                <label htmlFor="">Mail Address</label>
                                <input type="text" />

                            </div>


                        </div>

                        <div className="onepage-main-profile-content1-content-addres">
                            <div className="addres-label">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder="123 Street, Jobs Road, New York" />

                            </div>


                        </div>




                        <div className="onepage-main-profile-content1-content-TimeZone">
                            <div className="TimeZone-label">
                                <label htmlFor="">Time Zone</label>
                                <input type="text" placeholder="(GMT+02.00) Central European Time - Berlin" />

                            </div>


                        </div>



                        <div className="onepage-main-profile-content1-content-PhoneNumber">
                            <div className="PhoneNumber-label">
                                <label htmlFor="">Phone Number</label>
                                <input type="text"  />
                                <div className="input-2">
                                <input type="text"  />

                                </div>
                               

                            </div>


                        </div>


                        <div className="onepage-main-profile-content1-content-Whatsapp-Notifications">
                            <div className="Whatsapp-Notifications-label">
                                <label htmlFor="">Whatsapp Notifications</label>
                                <button>disable</button>
                                

                            </div>


                        </div>
                        
                       
                    </div>
                    
                </div>
                    
             </div>


             <div className="onepage-main-profile-content2">
                <div className="onepage-main-profile-content2-content">
                    <div className="profile-content2-Currency">
                        <label htmlFor="">Currency</label>
                        <div className="currency-input">
                         <input type="text" />

                        </div>
                       
                       

                    </div>

                    <div className="var-servicecharge">
                        <div className="var">
                          <label htmlFor="">Var %</label>
                          <div className="var-input">
                             <input type="text" />
                            
                            </div>
                         

                        </div>

                        <div className="srvice-charge">
                          <label htmlFor="">Service Charge %</label>
                          <div className="var-input">
                             <input type="text" />
                            
                            </div>

                            
                        </div>


                        

                    </div>


                    <div className="Opening-Times">
                          


                     </div>
                    
                    
                </div>
              
                
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PageOne;
