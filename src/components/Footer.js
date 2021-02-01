import { Divider, Typography } from '@material-ui/core'
import useStyles from '../styles/homeStyle'
export const Footer = ()=>{
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <Divider className={classes.divider}/>
            <div style={{display:'flex',flexDirection:'column',marginLeft:15,marginRight:15}}>
            <Typography color={'textSecondary'}>
                Prepared by Meseret kassaye
            </Typography>
            <Typography color={'textSecondary'}>
                Call to: 09 23 64 45 45
            </Typography>
            </div>
            <Divider className={classes.divider}/>
        </div>
    )
}

export default Footer