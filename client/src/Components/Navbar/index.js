import React from "react";
import {FaPizzaSlice} from "react-icons/fa";

const MobileNav = () => {
    return  ( <> 
    <div className="items-center justify-between flex w-full md:hidden">
    <div className="w-28">
    <img  
    src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
    alt="logo" 
    className="w-full h-full text-black"
    />
</div>
<div className="flex items-center gap-3">
    <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
    <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
        <FaPizzaSlice />

    </span>
</div>
</div>
</>
    );
};

const Navbar = () => {
    return (
    <>
    <nav className="py-4 px-4  bg-white shadow-md">
        <MobileNav />
    </nav>
    </>
    )

};

export default Navbar;