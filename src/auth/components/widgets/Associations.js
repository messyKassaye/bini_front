import { Card, CardHeader, Grid, Typography } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { API_URL } from '../../../constants/constants';
import FourByFourLoading from '../../loading/FourByFourLoading';
import {index} from '../../state/AppAction'
import { FETCH_ASSOCIATIONS } from '../../state/Constants';
import AssociationsCard from './AssociationCard';
export const Associations =()=>{
    const dispatch = useDispatch();
    const associations = useSelector(state=>state.authReducer.busAssociationsReducer.associations)
    const loading = useSelector(state=>state.authReducer.busAssociationsReducer.loading)
    useEffect(()=>{
        dispatch(index(`${API_URL}bus_associations`,FETCH_ASSOCIATIONS))
    })
    return (
        <div>
            {
                loading
                ?
                    (
                       <FourByFourLoading/>
                    )
                :
                    (
                       <Grid container spacing={2}>
                           {
                               associations.data.map(association=>(
                                   <Grid key={association.id} item md={4} xs={12} sm={12}>
                                       <AssociationsCard association={association}/>
                                   </Grid>
                               ))
                           }
                       </Grid>
                    )
            }
        </div>
    )
}

export default Associations