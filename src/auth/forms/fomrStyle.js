import {makeStyles} from '@material-ui/core'

const formStyles = makeStyles((theme)=>({
    form:{
        display:'flex',
        flexDirection:'column',
        paddingLeft:50,
        paddingRight:50
    },
    text_input:{
        display:'flex',
        marginBottom:30,
        width:'100%'
    },
    file:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    fileLabel:{
        marginRight:70
    },
    imagesLayout:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:200,
        marginBottom:10
    },
    button:{
        textTransform:'none',
        marginTop:15
    }
}))

export default formStyles