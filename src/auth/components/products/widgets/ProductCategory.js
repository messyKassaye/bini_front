import { List } from "@material-ui/core"

import {index} from '../../../state/AppAction'
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import { FETCH_CATEGORY } from "../../../state/Constants"
import {API_URL} from '../../../../constants/constants'
import FourByFourLoading from '../../../loading/FourByFourLoading'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));
const ProductCategory =()=>{

     const dispatch = useDispatch()
     const loading = useSelector(state=>state.authReducer.categoryReducer.loading)
     const category = useSelector(state=>state.authReducer.categoryReducer.categories)

     const classes = useStyles();
     const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    }

     useEffect(()=>{
        dispatch(index(`${API_URL}category`,FETCH_CATEGORY))
    },[])
    return(
        <div>
            {
                loading
                ?
                    (<FourByFourLoading height={20}/>)
                :
                    (
                        <div>
                            {
                                category.data.length>0
                                ?
                                    (
                                        <List>

                                        </List>
                                    )
                                :(null)
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default ProductCategory