import makeStyles from '@material-ui/core/styles/makeStyles'

const ProductStyle =makeStyles((theme)=>({
    buttons:{
        textTransform:'none'
    },
    form:{
        display:'flex',
        flexDirection:'column',
        paddingLeft:50,
        paddingRight:50
    },
    text_input:{
        width:'100%',
        marginBottom:20
    }
}))

export default ProductStyle