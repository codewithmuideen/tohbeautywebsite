import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";


const Home = (props) => {

    return (
        <div className="homeContainer">
            <h1 className="title">Toh Beauty Online Cart</h1>
            <p className="welcome">Welcome to the world of beauty and spa.</p>
            <div className="preview">
                <NavLink to="/shopping-cart/components/Shop" className="shopLink"><img className="prevImg" src="/shopping-cart/pic4.jpeg"></img></NavLink>
                <NavLink to="/shopping-cart/components/Shop" className="shopLink"><img className="prevImg" src="/shopping-cart/pic3.jpeg"></img></NavLink>
                <NavLink to="/shopping-cart/components/Shop" className="shopLink"><img className="prevImg" src="/shopping-cart/pic6.jpeg"></img></NavLink>
            </div>
        </div>
    )
}

export default Home