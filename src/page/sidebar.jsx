import "../style/Sidebar.css"
import { useNavigate } from 'react-router-dom';


 function Sidebar(){
    const navigte = useNavigate()
    
    const navigate = useNavigate();

    const handleMenuChange = (event) => {
        const selectedMenu = event.target.value;
        if (selectedMenu == "menu") {
            navigate("/l/menu");
        } else if (selectedMenu == "option1") {
            navigate("/l/sections");
        } else if (selectedMenu == "option2") {
            navigate("/l/section-items");
        } else if (selectedMenu == "option3") {
            navigate("/l/option-module");
        } else {
            //  
        }
    };
    return (

        <>
        <div className='sidebar-main'>
            <div className="sidebar-logo">
              
            </div>
            <div className="sidebar-content">
                <div className="sidebar-main-content">
                    <div className="profile">
                       <p onClick={()=>navigte("/l/one")}>Profile</p>
                        

                    </div>

                   

                    <div className="Dashboard">
                    <p onClick={()=>navigte("/l/dashboard")}>Dashboard</p>
                       
                    </div>

                    <div className="User-management">
                        
                        <p onClick={()=>navigte("/l/userManagement")}>User Management</p>
                    </div>

                    <div className="Menu">
                    <select id="dropdown" className="noBorder" onChange={handleMenuChange}>
                        <option value="default">Select an option</option>
                        <option value="menu">Menu</option>
                        <option value="option1">Sections</option>
                        <option value="option2">Section items</option>
                        <option value="option3">Option Module</option>
                        {/* Add more options as needed */}
                    </select>
                     
                    </div>

                    <div className="Feedback">
                        <p >Feedback</p >
                    </div>

                    <div className="QR-Menu">
                        <p >QR Menu</p >

                        <select id="dropdown" className="noBorder" >
                                    <option value="">QR Menu</option>
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                     
                    </select>
                    </div>

                    <div className="Orders">
                        <p >Orders</p >
                    </div>

                    <div className="Discount-Freeitems">
                        <p >Discount & Free items</p >
                    </div>

                    <div className="invoices-Payments">
                        <p >invoices & Payments</p >
                    </div>

                    <div className="Intergration-Module">
                        <p >Intergration Module</p >
                    </div>


                </div>
               
                
            
           </div>
        
             
    
        
        </div>

        </>
    )
}
export default Sidebar;