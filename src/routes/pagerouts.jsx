import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "../components/mainpage";
 
 
import Layout from "../layout/layout";
import PageOne from "../components/PageOne";
// import PageTwo from "../components/PageTwo";
import Chnagepassword from "../page/Changepassword";
import Dashboard from "../components/Dashboard";
import UserManagement from "../components/UserManagement"
import Menu from "../components/Menu";
import Createmodal from "../page/Createmodal";
import Sections from "../components/Sections";
import SectionsCreateModal from "../page/SectionCreateModal";


  



function zomatoRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
     
        <Route path="/l/menu/Createmodal" element={<Createmodal/>}/>
        <Route path="/SectionsCreateModal" element={<SectionsCreateModal/>}/>
          
        <Route path="/Chnagepassword" element={<Chnagepassword />} />
        
        <Route path="/l" element={<Layout/>} >
          <Route path="/l/one" element={<PageOne/>}/>
          <Route path="/l/Dashboard" element={<Dashboard/>}/>
          <Route path="/l/UserManagement" element={<UserManagement/>}/>
          <Route path="/l/menu" element={<Menu/>}/>
          <Route path="/l/sections" element={<Sections/>}/>
               


          

          
        </Route>
        
         

        
      </Routes>
    </BrowserRouter>
  );
}

export default zomatoRoutes;
