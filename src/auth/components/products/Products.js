import { Button, Grid } from "@material-ui/core"
import ProductStyle from './styles/ProductStyle'
import ProductCategory from "./widgets/ProductCategory"
import {useDispatch} from 'react-redux'
import {openDialog} from '../../state/AppAction'
import { API_URL } from "../../../constants/constants"
import AppForm from "../../forms/AppForm"
import AddNewProduct from "./forms/AddNewProduct"
const Products =()=>{
    const classes = ProductStyle()
    const dispatch = useDispatch()

    const addNewProduct =()=>{
        const info ={
            btnLabel:'Add product',
            path:`${API_URL}product`
        }
        const showData ={
            'show':true,
            'title':'Add new product',
            'page':<AddNewProduct/>
        }
        dispatch(openDialog(showData))
    }
    return(
        <Grid container spacing={2}>
            <Grid item md={3}>
                <ProductCategory/>
            </Grid>

            <Grid item md={6} xs={12} sm={12}>
                products
            </Grid>

            <Grid item md={3}>
                <Button
                 onClick={addNewProduct}
                 className={classes.buttons}
                 color={'secondary'}
                 variant={'outlined'}
                 >
                    Add new product
                </Button>
            </Grid>
        </Grid>
    )
}

export default Products