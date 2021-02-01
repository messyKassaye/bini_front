import { Typography } from '@material-ui/core'
import { useState } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import LoadingButton from '../commons/LoadingButton'
import useStyles from '../styles/homeStyle'
import UseForm from '../commons/UseForm'
import axios from 'axios'
import { API_AUTH_URL } from '../Constants'
import {useHistory} from 'react-router-dom'
import { set } from '../TokenService'
export const Login =()=>{
    const classes = useStyles() 
    const [errorMessage,setErrorMessage] = useState('');
    const [loading,setLoading] = useState(false)
    const [finished,setFinished] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const {inputs, handleInputChange} = UseForm({phone:'',password:''}); 
    const loadingEnabled = !finished && loading;
    const isEnabled = inputs.phone.length > 0 && inputs.password.length > 0
    const history  =useHistory()
  

 const login = ()=>{
     setLoading(true)
     setSubmitted(true)

     axios.post(`${API_AUTH_URL}login`,inputs)
     .then(response=>response.data)
     .then(res=>{
        set(res.token)
        history.push('/auth')
     })
     .catch(onerror=>{
        setLoading(false)
        setFinished(false)
        setSubmitted(false)

        if(!onerror.response){
            setErrorMessage('Something is not good. Please check your internet connection ):')
        }else {
            let code = onerror.response.status
            if(code===403){
                setErrorMessage('Incorrect phone or password is used')
            }
        }
     })
 }
    return (
            <ValidatorForm className={classes.loginContainer} onSubmit={login} >
                    {
                        <Typography component='p'>
                            {errorMessage}
                        </Typography>
                        }
                    <TextValidator
                        className={classes.text_input}
                        label={'Phone'}
                        onChange={handleInputChange}
                        name="phone"
                        type='phone'
                        value={inputs.phone}
                        validators={['required']}
                        errorMessages={['Please add your phone number']}
                    />

                    <TextValidator
                    className={classes.text_input}
                    label={'Password'}
                    name="password"
                    type='password'
                    onChange={handleInputChange}
                    value={inputs.password}
                    validators={['required']}
                    errorMessages={['Please enter your password']}
                    />               
                    <LoadingButton
                            className={classes.text_input}
                            color="primary"
                            variant="contained"
                            type="submit"
                            text={'Login'}
                            disabled={!isEnabled || submitted}
                            loading={loadingEnabled}
                            done={finished}
                        >
                            {
                                'Login'
                            }
                    </LoadingButton>
            </ValidatorForm>
    )
}

export default Login