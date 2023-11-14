import { useContext, useEffect, useState } from "react";
import React from "react";
import { AiFillEdit,AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { StateContext } from "./StateContext";

const Formsecond =()=>{

    const{state,dispatch}=useContext(StateContext)

    console.log(state)
    const [arr,setarr]=useState(state.productarr);

    // const update = () =>{
    //    setarr(state.productarr)

    // }

    // useEffect(update,[])

    let vv=useNavigate()
    
    //  console.log(data)

    
     let t=useNavigate()



    
   
   const goto =()=>{

    t('/')
   }

   
   const editt=(a,b)=>{
    t(`/?ind=${b}`)
    // console.log(ind)
}


const deletee = (val,ind)=>{

    let w=arr.filter((a,b)=>{
        return ind === b ? "" : a
    })
    
setarr(w)
dispatch({type:"add",payload:w})
console.log(arr)


}

    return(

        <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{textAlign:"center"}}>
            <table>
                <thead>
                    <tr>
            <th>Name</th>
                <th>Number</th>
              
                <th>Edit</th>
                <th>delete</th>
                </tr>
                </thead>
               
                {arr.map((v,i)=>{


                    return(

                        <tbody style={{textAlign:"center"}} key={i}>
                

                <tr ><td>{v.nam}</td>
                <td>{v.num}</td>
               
                <td onClick={()=>editt(v,i)}><AiFillEdit/></td>
                <td onClick={()=>deletee(v,i)}><AiFillDelete/></td>
                </tr>
                </tbody>
                    )
            })}
           
            </table>
            <button onClick={goto}>Go to Home</button>

        </div>
        </div>
    )
}
export default Formsecond