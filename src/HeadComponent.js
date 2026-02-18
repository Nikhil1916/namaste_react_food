import { useContext, useState } from "react";
import { IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const HeadComponent = () => {
    const isOnline = useOnline();
    console.log("header re rendered");
    const [loginState, setLoginState] = useState("login");
    const userContext = useContext(UserContext);
    // console.log(userContext);
    const cart = useSelector((store)=>store.cart.items);
    console.log(cart);
    const handleLogin = () => {
        if(loginState == "login") {
            setLoginState("logout")
        } else setLoginState("login")
    }
    return (
        <div className='flex justify-between border border-black border-2'>
            <img src={IMAGE_URL} width={"100px"} />
            <div className="flex">
                <ul className="flex p-2 items-center gap-2">
                    <li>{isOnline ? "ONLINE" : "OFFLINE"}</li>
                    <Link to={"/"}>
                        <li>Home</li>
                    </Link>
                    <Link to={"about"}>
                        <li>About Us</li>
                    </Link>
                    <Link to={"contact"}>
                        <li>Contact Us</li>
                    </Link>
                    <Link to={"grocery"}>
                        <li>Grocery</li>
                    </Link>
                    <li>Site Map</li>
                    <Link to={"cart"}>
                        <li>Cart({cart.length})</li>
                    </Link>
                    <button onClick={handleLogin}>{loginState}</button>
                    <li>{userContext?.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default HeadComponent;