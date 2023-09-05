import { useState } from "react";
import CartProduct from "./CartProduct";
import Product from "./Product";
import NavBar from "./NavBar";

function Show() {

    const [status, setStatus] = useState(false)
    const showCart = () => {
        setStatus(!status)
    }

    return (
        <>
            <NavBar showCart={showCart}></NavBar>
            <Product />
            {status ? <CartProduct /> : <></>}
        </>
    );
}

export default Show;