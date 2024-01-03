import "../style/createmodal.css"
import { useState } from "react";



function createmodal() {

    const [showModal, setShowModal] = useState(true);

    function modalHide() {
        setShowModal(false);
    }

    return(

        <>
         <div className="createmodal-main">
           
            <div className="create-modal-count">
                <div className="cut-button">
                <button onClick={modalHide}>X</button>
                
                </div>
            
                <div className="create-menu">
                <p>CREATE MENU</p>
                   
                    
                </div>

                <div className="create-image-box">

                </div>

                <div className="create-menu-content">
                    <div className="create-menu-content1">
                        <label htmlFor="">Name</label>
                        <div className="create-menu-content10">
                            <input type="text" name="" id="" placeholder="Desserts" />
                        </div>


                        <div className="create-menu-content11">
                         <label htmlFor="">Description</label>
                           <div className="create-menu-content11-input">

                         
                            <input type="text" name="" id="" placeholder="Lorem Ipsum is simply dummy text of the 
                                                printing and typesetting industry. " />

                            </div>
                        </div>




                        

 
                         

                    </div>

                    <div className="create-menu-content2">
                    <div className="create-menu-content1">
                        <label htmlFor="">حلويات</label>
                        <div className="create-menu-content101">
                            <input type="text" name="" placeholder="حلويات" id="" />
                        </div>


                        <div className="create-menu-content11">
                         <label htmlFor="">وصف</label>
                           <div className="create-menu-content11-input1">

                         
                            <input type="text" name="" id="" required="ur" placeholder="لوريم إيبسوم هو ببساطة نص شكلي لملف
                                            صناعة الطباعة والتنضيد " />

                            </div>
                        </div>




                        

 
                         

                    </div>

                    </div>
                    

                </div>
                
                <div className="create-button">
                    <button>submit</button>
                </div>



                 

            </div>
            
         </div>
        
        
        </>
    )
}

export default createmodal