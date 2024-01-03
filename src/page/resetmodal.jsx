import "../style/resetmodal.css"

function resetmodal() {

    return(
        <>
        <div className="reset-main">
            <div className="reset-count">
                <div className="reset-count1">
                    <h3>Forgot Password</h3>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Email"/>

                  


                </div>
                <div className="reset-button">
                        <button>RESET</button>
                    </div>

            </div>
            
        </div>
        </>
    )
}
export default resetmodal