import { Grid, IconButton } from "@material-ui/core"
import { blue, deepOrange, deepPurple, green, orange } from "@material-ui/core/colors"
import { Add } from "@material-ui/icons"
import CommonDashboardCard from "../../../commons/CommonDashboardCard"

export const DashboardCards =(props)=>{

    return(
        <Grid container spacing={2}>

            <Grid item md={3} xs={12} sm={12}>
            <CommonDashboardCard
                chartBackgroundColor={deepOrange[500]}
                cardBackgroundColor={green[500]}
                textColor={'white'}
                title={'10'}
                action={<IconButton color={'inherit'}><Add/></IconButton>}
                subheader={'Total customers'}
            />
            </Grid>

            <Grid item md={3} xs={12} sm={12}>
            <CommonDashboardCard
                chartBackgroundColor={orange[500]}
                cardBackgroundColor={deepPurple[500]}
                textColor={'white'}
                title={'10'}
                subheader={'Total suppliers'}
            />
            </Grid>

            <Grid item md={3} xs={12} sm={12}>
            <CommonDashboardCard
                chartBackgroundColor={'white'}
                cardBackgroundColor={'#0c0b2b'}
                textColor={'white'}
                title={'10'}
                subheader={'New payment requests'}
            />
            </Grid>

            <Grid item md={3} xs={12} sm={12}>
            <CommonDashboardCard
                chartBackgroundColor={green[500]}
                cardBackgroundColor={blue[500]}
                textColor={'white'}
                title={'10'}
                subheader={'All visitors of gebeya zone'}
            />
            </Grid>
        </Grid>
    )
}