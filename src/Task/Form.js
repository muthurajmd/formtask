import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "./StateContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const Form = () => {

    const{state,dispatch}=useContext(StateContext)

    console.log(state)

    const [param] = useSearchParams();
    let qq=param.get("ind")

    let t=useNavigate()

    const [name,setName] = useState("");
    const [number,setnum] = useState(0);
    const [arr,setarr]=useState(state.productarr||[])
    const obj1 = []
    const [editt,setedit]=useState(false);
    const [ind,setind]=useState(0);

    const update =()=>{
        if(qq!==null){
       let indd=Number(qq)
       let w=state.productarr.find((a,b)=>{
        return indd === b
    })
    setName(w.nam)
    setnum(w.num)
    // setnum(w.id)
    setedit(true)
    setind(Number(qq))
    
    }
    
    }
    useEffect(update,[])
    

    const user=(e)=>{
        if(e.target.name==="name1"){
            setName(e.target.value)
        }
        else if(e.target.name==="number"){
            setnum(e.target.value)
        }
    }

    const go = () =>{
      

        if(editt){
            let index=ind
            const obj = {nam:name,num:number}
            
          let ss=state.productarr.map((v,i)=>{
              return i===index ? obj:v
          })
          setarr([...arr,ss])
          dispatch({type:"add",payload:ss})
          console.log(ss)
          setName("")
          setnum("")
                               
      }
   

      else{


        const obj = {nam:name,num:number}
        setarr([...arr,obj])  
     console.log(arr)
     obj1.push(obj)

     dispatch({type:"add",payload:[...arr,obj]})

     setName("")
          setnum("")

    //  t('/table')

     console.log(state)



      }


    }


    const go1 = () =>{
        t('/table')
    }

    // console.log(arr)



    return(
        <>
        <div style={{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div>

        <input type="name" onChange={user} name="name1" value={name} placeholder="name"></input> <br></br>
        <input type="number" onChange={user} name="number" value={number} placeholder="number"></input><br></br>
        <button type="sumbit" onClick={go}>sumbit</button> <br></br>
        <button type="sumbit" onClick={go1}>table</button>


        </div>
        </div>
       
        
        
        
        </>
    )
}

export default Form
