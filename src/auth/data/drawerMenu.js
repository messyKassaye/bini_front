import DashboardIcon from '@material-ui/icons/Dashboard'
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar'
import SettingIcon from '@material-ui/icons/Settings'
import VideocamIcon from '@material-ui/icons/Videocam'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import MusicNotIcon from '@material-ui/icons/MusicNote'
import PersonIcon from '@material-ui/icons/Person';
import ExtensionIcon from '@material-ui/icons/Extension';
import BusinessIcon from '@material-ui/icons/Business'
import React from "react";
import { AccountBalance, AllInbox, DirectionsBus, GroupAdd, GroupWork, Movie, Payment, Receipt, Store } from '@material-ui/icons'
const drawerMenu = [
    {
        name:'Dashboard',
        route:'/auth',
        icon:<DashboardIcon/>
    },
    {
        name:'Products',
        route:'/auth/admin/products',
        icon:<Store/>
    },
    {
        name:'Suppliers',
        route:'/auth/admin/suppliers',
        icon:<AllInbox/>
    },
    {
        name:'Sells',
        route:'/auth/admin/sells',
        icon:<AttachMoneyIcon/>
    },
    {
      name:'banks',
      route:'/auth/admin/banks',
      icon:<AccountBalance/>
  },
  
    {
        name:'Settings',
        route:'/auth/admin/settings',
        icon: <SettingIcon/>,
    },
]

export default drawerMenu
