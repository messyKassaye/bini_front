import { Typography,Button, Grid } from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import AddNewAssociationStyle from './styles/AddNewAssociationStyle'
import {useSelector,useDispatch} from 'react-redux'
import React, { useEffect,useState } from 'react'
import UseForm from '../../../commons/UseForm'
import { green } from '@material-ui/core/colors'
import LoadingButton from '../../../commons/LoadingButton'
import {store} from '../../state/AppAction'
import { API_URL } from '../../../constants/constants'
import { REGISTOR_ADMIN } from '../../state/Constants'
const AddAssociationAdmin =(props)=>{
    const classes = AddNewAssociationStyle()
    const {inputs,handleInputChange} = UseForm({'name':'','phone':'','password':'','association_id':props.association.id})
    const [loading,setLoading] = useState(false)
    const [finished,setFinished] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const [added,setAdded] = useState(false)
    const loadingEnabled = !finished && loading;
    const isEnabled = inputs.name.length > 0 && inputs.phone.length>0&&inputs.password.length>0
        &&inputs.association_id>0

    const dispatch = useDispatch();
    const response = useSelector(state=>state.authReducer.adminRegistrationReducer.response)

    useEffect(()=>{
        if(response.status===true){
            setAdded(true)
            setLoading(false)
            setFinished(false)
            setSubmitted(false)
        }
    })
    const  generatePassword = ()=>{
        const passwords = Math.floor(1000 + Math.random() * 9000);
        inputs.password=passwords
        console.log('Hell')
    }

   const handleSubmit = ()=>{
        setLoading(true)
        setSubmitted(true)
        dispatch(store(`${API_URL}association_admin`,inputs,REGISTOR_ADMIN))
   }

    return (
        <div className={classes.form}>
            {
                added
                ?
                    (
                        <div>
                            <Typography variant={'h6'} style={{color:green[500]}}>
                                {response.message}
                            </Typography>
                        </div>
                    )
                :
                    (
                        <div>
                                <Typography variant={'h6'} color={'secondary'}>
                                    {`${props.association.name} is registered successfully. Now register it's admin`}
                                </Typography>
                                <ValidatorForm onSubmit={handleSubmit}>

                                    <TextValidator
                                    className={classes.text_input}
                                    name={'name'}
                                    label={"Admin name"}
                                    onChange={handleInputChange}
                                    value={inputs.name}
                                    />

                                    <TextValidator
                                    className={classes.text_input}
                                    name={'phone'}
                                    type={"text"}
                                    label={"Phone number"}
                                    onChange={handleInputChange}
                                    value={inputs.phone}
                                    />

                                    <Grid container spacing={2}>
                                        <Grid item md={7} xs={6} sm={6}>
                                            <TextValidator
                                            style={{width:'100%'}}
                                            name={'password'}
                                            type={'text'}
                                            onChange={handleInputChange}
                                            label={"create password"}
                                            value={inputs.password}
                                            />
                                        </Grid>

                                        <Grid item md={5} xs={6} sm={6}>
                                            <Button onClick={()=>generatePassword()} style={{marginTop:50}} variant={'outlined'} color={'secondary'} style={{textTransform:'none'}}>
                                                Generate password
                                            </Button>
                                        </Grid>
                                    </Grid>

                                    <LoadingButton
                                        className={classes.text_input}
                                        color="primary"
                                        variant="contained"
                                        type="submit"
                                        text={'Register'}
                                        disabled={!isEnabled || submitted}
                                        loading={loadingEnabled}
                                        done={finished}
                                    >

                                    </LoadingButton>
                                </ValidatorForm>
                            </div>
                    )
            }
        </div>
    )
}

export default AddAssociationAdmin