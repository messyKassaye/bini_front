import makeStyles from '@material-ui/core/styles/makeStyles'

const CategoryStyles = makeStyles((theme)=>({
    cardAction:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    noCategory:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    buttons:{
        textTransform:'none'
    }
}))

export default CategoryStyles