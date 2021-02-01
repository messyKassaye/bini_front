import { Grid } from '@material-ui/core'
import Categories from './categories/Categories'
import adminHomeStyle from './styles/adminHomeStyle'
import { DashboardCards } from './widgets/DashboardCards'
export const AdminHome = ()=>{
    const classes = adminHomeStyle()
    return(
        <Grid container spacing={2}>
            <Grid item md={12} xs={12}>
                <DashboardCards/>
            </Grid>

            <Grid item md={12} sm={12} xs={12}>
                <Categories/>
            </Grid>
            
        </Grid>
    )
}

export default AdminHome