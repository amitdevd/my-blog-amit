import React from "react";
import { Link } from "react-router-dom";
import { Images } from "./imgconst";

function Thought () {
    return(
        <div className="thougtsContainer container">
            <div className="row">
                <div className="col-lg-4">
                    <Link to="/thoughts/vyakhan">
                        <div className="thoughtsContent">
                            <div className="thoughtsContent_img">
                                <img src={Images.Bhsishm_URL} alt="character-img" className="img-fluid" />
                            </div>
                            <h3>Bhsihma Pitamah</h3>
                            <p>Legend of Kurushetra mahayudh, fighting against dharm , Fighting against pandav Putra</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Thought;