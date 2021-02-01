import { Grid } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import {Skeleton} from '@material-ui/lab'

export const FourByFourLoading =()=>{
    return <Grid container spacing={2}>

        <Grid item md={3} xs={12} sm={12}>
            <Skeleton
             variant={'rect'}
             width={'100%'}
             height={200}
             style={{backgroundColor:grey[500]}}
            />
        </Grid>

        <Grid item md={3} xs={12} sm={12}>
            <Skeleton
             variant={'rect'}
             width={'100%'}
             height={200}
             style={{backgroundColor:grey[500]}}
            />
        </Grid>

        <Grid item md={3} xs={12} sm={12}>
            <Skeleton
             variant={'rect'}
             width={'100%'}
             height={200}
             style={{backgroundColor:grey[500]}}
            />
        </Grid>

        <Grid item md={3} xs={12} sm={12}>
            <Skeleton
             variant={'rect'}
             width={'100%'}
             height={200}
             style={{backgroundColor:grey[500]}}
            />
        </Grid>

    </Grid>
}

export default FourByFourLoading