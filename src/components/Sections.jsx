import "../style/Sections.css";
import { useNavigate } from "react-router-dom";
function Sections() {
  const navigate=useNavigate()
  function SectionsCreateModal() {
    navigate("./SectionsCreateModal")

    

  }
  return (
    <>
      <div className="section-main">
        <div className="section-count">
          <div className="section-main-all-content">
            <div className="desert-section-button">
              <div className="desert-section">
              <p>Dessert Sections</p>


              </div>

              <div className="desert-button">
                <button onClick={SectionsCreateModal}>CREATE</button>
              </div>

            </div>
          
            <div className="section-main-box1"></div>

            <div className="section-img-content">
              <div className="section-img-content-1">
                <div className="section-img-content-1-content-button">
                  <button>DELETE</button>

                  <div className="section-img-content-1-content-edit">
                    <button>EDIT</button>
                  </div>
                </div>
              </div>

              <div className="section-img-content-1-content">
                <div className="section-content-box2">
                  <div className="section-content-box2-p">
                    <p>Sweet</p>
                    <div className="content-desert-order">
                      <div className="desert">
                        <span>Desserts</span>
                      </div>

                      <div className="order">
                        <span>102456</span>  
                      </div>
                    </div>

                    <div className="content-desert-order-l">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                  </div>

                  <div className="section-content-box2-disable">
                    <button>Disable</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sections;
