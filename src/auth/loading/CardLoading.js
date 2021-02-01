import { Card, Grid } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"
import { Skeleton } from "@material-ui/lab"

const CardLoading =()=>{
    return(
        <Grid container spacing={2}>
            <Grid item md={3} xs={12} sm={12}>
                <Skeleton
                 width={'100%'}
                 height={'100'}
                 style={{backgroundColor:grey[500]}}
                />
            </Grid>

            <Grid item md={3} xs={12} sm={12}>
                <Skeleton
                 width={'100%'}
                 height={'100'}
                 style={{backgroundColor:grey[500]}}
                />
            </Grid>

            <Grid item md={3} xs={12} sm={12}>
                <Skeleton
                 width={'100%'}
                 height={'100'}
                 style={{backgroundColor:grey[500]}}
                />
            </Grid>

            <Grid item md={3} xs={12} sm={12}>
                <Skeleton
                 width={'100%'}
                 height={'100'}
                 style={{backgroundColor:grey[500]}}
                />
            </Grid>
        </Grid>
    )
}

export default CardLoading