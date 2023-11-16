import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


export const Detail = () => {

    const [arr,setarr] = useState([])
    const [detailarr,setdetailarr] = useState([])
    const [searchparam] = useSearchParams()
    let qq = searchparam.get('id')

  const update = () =>{
    axios.get( 'https://api.tvmaze.com/shows/1/episodes')
  .then((response)=>setarr(response.data))   
   
  .catch(function (error) {
  
    console.log(error);
  })
}

const objj = () => {
    let x = arr.filter((val, ind) => {
      return val.id === Number(qq)
    })
    setdetailarr(x)
    
  }

useEffect(()=>{
    update()
    objj()
},[arr])
//   console.log(arr)




  


  return(
    <>

<Container>
      
     <div style={{textAlign:"center"}}>
        <h2>Movie Details</h2>
     {detailarr.map((v,i)=>{
    return(

      <div style={{display:"flex",justifyContent:"center"}}>
       
   
     <Card sx={{ maxWidth: 400, margin:"5px 5px" }} key={i}>
      <CardMedia
        sx={{ height: 300 }}
        title="green iguana"
        image= {v.image.medium}
      />
{/* <img src={v.flickr_images }|| "https://farm1.staticflickr.com/571/23604164970_2a1a2366e4_o.jpg"}/> */}


      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Movie Name: 
         <span style={{paddingLeft:"6px"}}>{v.name}</span> 
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Runtime:
          <span style={{paddingLeft:"6px"}}> {v.runtime}</span> 
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Rating:
          <span style={{paddingLeft:"6px"}}>  {v.rating.average} </span> 
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          Date:
          <span style={{paddingLeft:"6px"}}> {v.airdate} </span> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <b>Summary:</b> 
        <span style={{paddingLeft:"6px"}}> {v.summary} </span>
        </Typography>
        <Button variant="contained">
        <a style={{textDecoration:"none",color:"white"}} href={v.url} target="_blank">Link</a>
      </Button>
      </CardContent>
    
    </Card>
    </div>
   
)
})}
 </div>
 </Container>

    
   
   
   
    
    
    
    
    
    </>
  )


}