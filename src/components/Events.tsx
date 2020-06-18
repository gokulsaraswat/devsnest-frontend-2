import React from 'react'
import {FaLinkedin,FaGithub} from "react-icons/fa"
import man from "../man.jpg"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
function Events() {
    return (
        <div className="eventbg">
        <Container style={{paddingTop:"20px"}} >
        <h1 style={{color:"#43b17b"}}>
            ASK ME ANYTHING
        </h1>
       <Grid  container spacing={3}>
          <Grid item md={6}>
          <p style={{fontSize:"25px",fontWeight:"bold"}}>Upcoming AMA with  NAME</p>
            <p style={{fontSize:"18px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <p style={{fontSize:"18px",fontWeight:"bold"}}><a href="" style={{color:"#000"}}>Submit your Questions before</a></p>
            <p style={{background:"#f4b400",width:"250px",height:"25px",fontWeight:"bold"}}>14th June,Sunday at 4pm</p>
            </p>
            <p>Want to know more about Our guest Check out the links below</p>
            <FaGithub style={{ fontSize:"30px"}}/> &nbsp;
            <FaLinkedin  style={{ fontSize:"30px"}}/>
            
            </Grid>
            <Grid item md={6} >
            <img src={man} style={{ width:"500px"}}/>
            </Grid>
        </Grid>
        <h1 style={{color:"#43b17b"}}>
            Missed The AMA? Listen here..
        </h1>
        <h2>Recordings</h2>
        </Container>
        </div>
    
    )
}

export default Events
