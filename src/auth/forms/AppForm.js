import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import formStyles from './fomrStyle'
import React,{useEffect, useState} from 'react'
import UseForm from "../../commons/UseForm";
import LoadingButton from "../../commons/LoadingButton";
import {useDispatch,useSelector} from 'react-redux'
import {store,openDialog} from '../state/AppAction'
import { APP_FORM_STORE } from "../state/Constants";
import { Button, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
const AppForm = (props)=>{

   let formInputs = {};
   const forms = props.form
   let info = props.info
   forms.map(form=>{
       form.visibility===false?formInputs[form.name]=form.value:formInputs[form.name]=''
   })


   const [loading,setLoading] = useState(false)
   const [dataUri,setDataUri] = useState('')
    const [finished,setFinished] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const loadingEnabled = !finished && loading;
    const isEnabled = true

   const {inputs,handleInputChange} =  UseForm(formInputs)
   const classes = formStyles()
   const fileRef = React.createRef()

   const dispatch = useDispatch()
   const response = useSelector(state=>state.authReducer.appFormReducer.response)

   useEffect(()=>{
       if(response.status===true){
        setLoading(false)
        setSubmitted(false)
        setFinished(false)
        setTimeout(()=>{
            const showData={
                'show':false,
            }
            dispatch(openDialog(showData))
        },2000)
       }
   })
   const handleSubmit =()=>{
        setLoading(true)
        setSubmitted(true)
        dispatch(store(info.path,inputs,APP_FORM_STORE))
        console.log(inputs)
   }

  const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
    };
    reader.readAsDataURL(file);
    })

    const onChange = (file) => {
    
        if(!file) {
          setDataUri('');
          return;
        }
    
        fileToDataUri(file)
          .then(dataUri => {
            setDataUri(dataUri)
            console.log(dataUri)
          })
        
      }

   const uploadFile = ()=>{
        fileRef.current.click()
   } 


    return(
        <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
            <Typography style={{color:green[500]}}>
                {response.message}
            </Typography>
          {
              forms.map(form=>{
                  if (form.type==='file') {
                      return <div>
                          {
                              dataUri===''
                              ?
                                (
                                    <div className={classes.file}>
                                        <Typography className={classes.fileLabel}>
                                            {form.label}
                                        </Typography>

                                        <input 
                                        ref={fileRef}
                                        onChange={((event)=>onChange(event.target.files[0]))}
                                        type={'file'} 
                                        style={{display:'none'}}/>
                                        <Button
                                        onClick={uploadFile}
                                        className={classes.button} 
                                        variant={'outlined'}
                                        color={'secondary'}>
                                            Upload file
                                        </Button>
                                    </div>
                                )
                              :
                                (
                                    <div>
                                        <img src={dataUri} className={classes.image}/>
                                    </div>
                                )
                          }
                      </div>
                  }else{
                      return <TextValidator
                      style={{
                          marginBottom:30,
                          width:'100%',
                          display:form.visibility===false?'none':'flex'
                      }}
                      label={form.label}
                      name={form.name}
                      type={form.type}
                      onChange={handleInputChange}
                      value={form.visibility===false?form.value:inputs[form.name]}
                      validators={form.required?['required']:null}
                      errorMessages={[form.errorMessage]}
                    />
                  }
              })
        }

            <LoadingButton
                className={classes.text_input}
                color="primary"
                variant="contained"
                type="submit"
                text={info.btnLabel}
                disabled={!isEnabled || submitted}
                loading={loadingEnabled}
                done={finished}
            >
                {
                    info.btnLabel
                }
            </LoadingButton>
        </ValidatorForm>
    )
}

export default AppForm