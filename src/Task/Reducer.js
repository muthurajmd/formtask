import user from "../main.json"

export const initialState={
    
    arr:user.login,
    productarr:[],
    addproduct:[],
    addIcon:[]
   
}
export const reducer =(state,action)=>{
    if(action.type==="add"){
        return  {...state,productarr:action.payload}
      }
     
    //  else if(action.type==="addPro"){
    //     return  {...state,addproduct:action.payload}
    //   }
    //  else if(action.type==="addIcon"){
    //     return  {...state,addIcon:action.payload}
    //   }
      
    //  else if(action.type==="delete"){
    //     return  {...state,addproduct:action.payload}
    //   }
    
}