
import "../style/Menu.css"
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import Createmodal from "../page/Createmodal"

function Menu() {
  const navigate=useNavigate()

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

    return(
      

        <>


        <div className="menu-section-main">
            <div className="menu-section-count">
                <div className="menucreate">
                    <div className="menu">
                        <p>Menus</p>

                    </div>


                    <div className="create">
                    <button onClick={openModal}>CREATE</button>

                    </div>
                </div>

                <div className="menu-box">
                  <div className="item1"> 
                    <div className="item1-img">

                   </div>

                   <div className="item1-content">
                     <div className="item1-content-text">
                       
                        <div className="item-main-menu">
                        <h3>Main Menu</h3>

                        </div>
                        <div className="item-main-disable">
                          <button>Disable</button>
                        </div>
                       

                     </div>

                     <div className="item1-content-text">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. t.</p>

                     </div>
                    
                   </div>
                
                
                 </div>


                
                 
                 


                </div>

                

            </div>
            
            {modalOpen && <Createmodal closeModal={closeModal} />}
             
        </div>

        
        
        
        </>
    )
}

export default Menu