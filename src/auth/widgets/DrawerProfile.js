import { Typography } from "@material-ui/core";
import React from "react";
import Logo from "../../components/Logo";

const DrawerProfile = ()=>{
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:10}}>
            <Logo/>
            <Typography style={{color:'white'}}>
                Admin
            </Typography>
        </div>
    )
}

export default DrawerProfile

