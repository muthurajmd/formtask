import React, { useReducer, useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";

// import Home from "./Home";
import { StateContext } from "./StateContext";
import { initialState } from "./Reducer";
import { reducer } from "./Reducer"
// import Login from "./Login";
// import AddtoCard from "./Addtocard";
// import Iconcard from "./Fav";
import Form from "./Form";
import Formsecond from "./Formsecond";
import { Home } from "./Home";
import { Detail } from "./Details";
const Routing =()=>{

    const [state,dispatch] = useReducer(reducer,initialState)
   //  const [cart,setcart] = useState([])

     console.log(state)
     return(
        <StateContext.Provider value={{state,dispatch}}>        
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
        {/* <Route path="/" element={<Home/>}> </Route>
        <Route path="/details" element={<Detail/>}> </Route> */}
        <Route path="/" element={<Form/>}> </Route>
        <Route path="/table" element={<Formsecond/>}> </Route>
        {/* <Route path="/add" element={<AddtoCard/>}> </Route>
        <Route path="/iconpage" element={<Iconcard/>}> </Route> */}
        </Routes>
        </BrowserRouter>
        </StateContext.Provider>
     )

}
export default Routing