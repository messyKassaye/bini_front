import {makeStyles} from '@material-ui/core'

export const AddNewAssociationStyle = makeStyles((theme)=>({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    },
    form:{
        width:'60%',
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    },
    text_input:{
        marginTop:25,
        marginBottom:30,
        width:'80%',
        [theme.breakpoints.down('xs')]:{
            width:'95%'
        }
    },
    button:{
        textTransform:'none',
        marginLeft:100
    },
    upload_container:{
        display:'flex',
        flexDirection:'row',
        width:'60%',
        alignItems:'center',
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    }
}))

export default AddNewAssociationStyle