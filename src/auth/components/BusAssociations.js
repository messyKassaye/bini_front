import { Card, CardContent, CardHeader, Divider, IconButton } from "@material-ui/core"
import { Add, ArrowBack, DirectionsBus } from "@material-ui/icons"
import Associations from "./widgets/Associations"
import {useState} from 'react'
import AddNewAssociation from './widgets/AddNewAssociation'

export const BusAssociations = ()=>{
     const [register,setRegister] = useState(false)
     const [title,setTitle] = useState('Bus associations')
    const handleRegister = (title)=>{
        setRegister(!register)
        setTitle(title)
    }
    return(
        <Card>
        <CardHeader
        title={title}
        avatar={<DirectionsBus/>}
        action={
            register
            ?
                (
                    <IconButton onClick={()=>handleRegister('Bus associations')}>
                        <ArrowBack/>
                    </IconButton>
                )
            :
                (
                    <IconButton onClick={()=>handleRegister('Add new association')}>
                        <Add/>
                    </IconButton>
                )
        }/>
        <Divider/>
        <CardContent>
           {
               register
               ?
                    (
                        <AddNewAssociation/>
                    )
               :
                    (
                        <Associations/>
                    )
           }
        </CardContent>
        </Card>
    )
}

export default BusAssociations