import { Card, CardHeader, Avatar, Divider, CardContent, Typography, Button, IconButton, Menu, MenuItem } from  "@material-ui/core"
import { MoreHoriz } from "@material-ui/icons"
import React from 'react'
import {index, openDialog} from '../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import AddNewAssociation from "./AddNewAssociation"
const AssociationsCard = (props)=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = (association) => {
        setAnchorEl(null);
        const showData = {
            show:true,
            fullScreen:false,
            title:'Edit',
            page:<AddNewAssociation edit={true} form={association}/>
        }
        dispatch(openDialog(showData))

      };

    return (
        <Card>
            <CardHeader
             title={props.association.name}
             avatar={
                 <Avatar variant={"circular"} src={props.association.logo_path}/>
             }
             action={
                 <div>
                     <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                     <MoreHoriz/>
                 </IconButton>
                 <Menu
                 id="simple-menu"
                 anchorEl={anchorEl}
                 keepMounted
                 open={Boolean(anchorEl)}
                 onClose={handleClose}
               >
                 <MenuItem value={1} onClick={()=>handleClose(props.association)}>Edit</MenuItem>
                 <MenuItem onClick={()=>handleClose(props.association)}>Change admin</MenuItem>
                 <MenuItem onClick={()=>handleClose(props.association)}>Take actions</MenuItem>
                 <MenuItem onClick={()=>handleClose(props.association)}>Add new admin</MenuItem>
               </Menu>
                 </div>
             }
            />
            <Divider/>
            <CardContent>
                {
                    props.association.admin.length>0
                    ?
                        (
                            <Typography>
                                {`Admin: ${props.association.admin[0].name}`}
                            </Typography>
                        )
                    :
                        (
                            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <Typography>
                                    {`Admin:`}
                                </Typography>
                                <Typography color={'secondary'}>
                                    Not assigned
                                </Typography>
                                <Button size={'small'} color={'secondary'} variant={'outlined'} style={{textTransform:'none'}}>
                                    Assign
                                </Button>
                            </div>
                        )
                }
                <Typography>
                    {`Total buses: ${props.association.buses}`}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default AssociationsCard