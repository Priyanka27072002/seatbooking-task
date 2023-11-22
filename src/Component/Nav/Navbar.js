import React from "react";
import {BsChevronDown} from 'react-icons/bs'
import {FaUserCircle} from 'react-icons/fa'
import './Navbar.css'
import logo from '../image/logo.png'
import Busbooking from "../Busbooking/Busbooking.js";
const Navbar=()=>{
    return(
        <div>
            <header>
                <div className="row">
                    <div className="col">
                        <div>
                            <img src={logo}/>
                        </div>
                        <p>BUSTICKET</p>
                        <div></div>
                        <p>rYde</p>
                        <p>redRail</p>
                    </div>
                    <div className="col-2">
                        <p>Help</p>
                        <p>ManageBooking<BsChevronDown/></p>
                        <div className="head-icon">
                            <FaUserCircle /><BsChevronDown/>
                        </div>
                       
                    </div>
                </div>
            </header>
            <Busbooking/>
        </div>
    )
}
export default Navbar