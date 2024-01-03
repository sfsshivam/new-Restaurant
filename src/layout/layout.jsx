import Sidebar from "../page/sidebar"
import Header from "../page/header"
import {Outlet}from "react-router-dom"

// import { Outlet } from "react-router-dom";

 


function layout() {


    return(
        <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '80px', width: '100%', position: 'fixed', top: 0, zIndex: 1, backgroundColor: 'white',marginLeft: '250px' }}>
          <Header />
        </div>
        <div style={{ display: 'flex', }}>
          <div style={{ backgroundColor: 'white', width: '250px', height: ' 100vh', position: 'fixed',  }}>
            <Sidebar />
          </div>
          <div style={{ marginLeft: '250px', width: 'calc(100% - 250px)',  marginTop: '80px' ,       overflowY: 'auto' }}>
            <Outlet />
          </div>
        </div>
      </div>
    )
}

export default layout