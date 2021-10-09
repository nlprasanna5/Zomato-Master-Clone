
import React from "react";

//Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props) => {
    return <>
     <div className="container mx-auto  lg:px-20">
         <Navbar />
     {props.children}
     </div>
     <FoodTab />
     <h3>Hello</h3>
    </>
};

export default HomeLayout;