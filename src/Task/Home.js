import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
// import Nav from "./Nav";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';


export const Home = () => {

    let n = useNavigate()

    const [arr,setarr] = useState([])
    const [limit,setlimit] = useState(10)
    const [offset,setoffset] = useState(0)
    const [totalpage,settotalpage] = useState(11)
    const [pagecount,setpagecount] = useState(1)
    const [searchh,setsearchh] = useState("")


  const update = () =>{
  //   axios.get( `https://api.tvmaze.com/shows/1/episodes`)
  // .then((response)=>setarr(response.data))   

  fetch("https://api.tvmaze.com/shows/1/episodes")
        // Transform the data into json
            .then((res) => res.json())
            .then((data) => {
              setarr(data);
            })
  
  .catch(function (error) {
  
    console.log(error);
  })
  let count=Math.round(110/limit)
  settotalpage(count)
}
useEffect(()=>{
  update()
      // pagination()
      // console.log(pagecount)
  
    },
      [limit,offset,totalpage,pagecount])

  // console.log(arr)


  const details = (ff) => {
    let idd = ff
    console.log(ff)
    n(`/details?id=${idd}`)
  }


  const click = (e) => {

   setlimit(e.target.value)
   
   let count=Math.round(110/limit)
   settotalpage(count)


  
   pagination()

  }
  // console.log(limit)
  // console.log(totalpage)

  
 

 
  const pagination = (event,value) => {
   console.log(event,value)
   

    setpagecount(Number(value))
    console.log(pagecount)

    setoffset((Number(value)*limit)-limit)
    console.log(offset)

   
  }
  const sear = (e) =>{
  setsearchh(e.target.value)
    let ch= arr.filter(arr=>arr.name.includes(searchh))
    // dispatch(searchproduct(ch))
   console.log(ch)

   setarr(ch)
  


  }
  useEffect(()=>{
    if(searchh.length===0){
      axios.get( `https://api.tvmaze.com/shows/1/episodes`)
  .then((response)=>setarr(response.data))   
    
   }

  },[searchh])
  console.log(searchh.length)



  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: 'inherit',
  //   '& .MuiInputBase-input': {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create('width'),
  //     width: '100%',
  //     [theme.breakpoints.up('sm')]: {
  //       width: '12ch',
  //       '&:focus': {
  //         width: '20ch',
  //       },
  //     },
  //   },
  // }));
  
  return(
    <>
 
<Container style={{marginTop:"15px"}}>
  <div style={{display:"flex"}}>


  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Movies List
          </Typography>
          {/* <Search> */}
            <SearchIconWrapper>
              {/* <SearchIcon /> */}
            </SearchIconWrapper>
            {/* <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={sear} value={searchh}
            /> */}
            <input type="search" onChange={sear} value={searchh} placeholder="Search" style={{border:"none",borderRadius:"10px",height:"25px"}}></input> 
          {/* </Search> */}
        </Toolbar>
      </AppBar>
    </Box>















  {/* <input type="search" onChange={sear} value={searchh} placeholder="Search"></input> */}
    {/* <Nav/> */}
{/* <Stack style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",width:"75%"}} spacing={2}>
   
      <Pagination  page={pagecount}  count={totalpage} onChange={pagination} color="primary" />
      
    </Stack> */}
{/* <Box style={{width:"20%"}} sx={{ }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          select
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          onChange={click}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box> */}
    </div>


  <div style={{display:"flex",justifyContent:"center",margin:"20px 0px"}}>
{/* <input type="number" onChange={click} placeholder="set limit"></input> */}
</div>
      
     <div style={{display:"flex",flexWrap:"wrap"}}>
     {arr.map((v,i)=>{
    return(
       
    <Typography component="div" key={i} sx={{width:{xs:"100%",sm:"50%",md:"33%",xl:"33%"}}}>
      <div style={{}}>
     <Card sx={{ maxWidth: 345, margin:"15px 15px" }} key={i}>
      <CardMedia
        sx={{ height: 200 }}
        title="green iguana"
        image= {v.image.medium}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Movie Name: {v.name} <br/>
          Movies id: {v.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {/* {v.details} */}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="contained" onClick={()=>details(v.id)}>Detailed</Button>
      <Button variant="contained">
        <a style={{textDecoration:"none",color:"white"}} href={v.url} target="_blank">Original Web Link</a>
      </Button>
       
      </CardActions>
    </Card>
    </div>
    </Typography>
   
)
})}
 </div>
 
   
    </Container>

    
   
   
   
    
    
    
    
    
    </>
  )


}