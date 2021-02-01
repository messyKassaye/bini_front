import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import AddNewAssociationStyle from './styles/AddNewAssociationStyle'
import UseForm from '../../../commons/UseForm'
import React,{useState,useRef,useEffect} from 'react'
import { Button, Input, Typography } from '@material-ui/core'
import LoadingButton from '../../../commons/LoadingButton'
import {store} from '../../state/AppAction'
import {useSelector, useDispatch} from 'react-redux'
import { API_URL } from '../../../constants/constants'
import { STORE_NEW_ASSOCATION, UPLOAD_FILE } from '../../state/Constants'
import AddAssociationAdmin from './AddAssociationAdmin'

export const AddNewAssociation =(props)=>{
    const [errorMessage,setErrorMessage] = useState('');
    const [uploadTitle,setUploadTitle] = useState('Upload association logo')
    const [loading,setLoading] = useState(false)
    const [finished,setFinished] = useState(false)
    const [submitted,setSubmitted] = useState(false)
    const [uploading,setUploading] = useState(false)
    const [uploadDone,setUploadDone] = useState(false)

    const classes = AddNewAssociationStyle()
    const {inputs,handleInputChange} = UseForm({'name':'','logo_path':''})
    const uploadRef = useRef(null)
    const loadingEnabled = !finished && loading;
    const isEnabled = inputs.name.length > 0 && inputs.logo_path.length>0

    //add new associations using redux
    const regiterResponse = useSelector(state=>state.authReducer.busAssociationsReducer.response);
    const uploadResponse = useSelector(state=>state.authReducer.fileUploadReducer.response)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(uploadResponse.status===true){
            setUploadDone(true)
            inputs.logo_path=uploadResponse.path
        }
    })

    useEffect(()=>{
        if(regiterResponse.status===true){
            setLoading(false)
            setFinished(false)
            setSubmitted(false)
        }
    })

    useEffect(()=>{
        console.log(props.form)
        if(props.edit===true){
            console.log('edit')
            inputs.name = props.form.name
            inputs.logo_path=props.form.logo_path
            console.log(inputs)
        }
    },[inputs])

    const handleFile = ()=>{
        uploadRef.current.click()
    }

    const handleFileChange =event=>{
        const file = event.target.files[0]
        let FileSize = file.size / 1024 / 1024;
        if(FileSize>1){
            setUploadTitle('Your file size is too big. please try uploading less than 1 MB')
        }else{
            setUploading(true)
            const formData= new FormData();
            formData.append('file',file)
            dispatch(store(`${API_URL}file_upload`,formData,UPLOAD_FILE))
        }
    }
    const handleSubmit = ()=>{
        setLoading(true)
        setSubmitted(true)
        dispatch(store(`${API_URL}bus_associations`,inputs,STORE_NEW_ASSOCATION))

    }
    return (
        <div className={classes.container}>
            {
                regiterResponse.status
                ?
                    (
                        <AddAssociationAdmin association={regiterResponse.association}/>
                    )
                :
                    (
                        <ValidatorForm className={classes.form} onSubmit={handleSubmit}>

                            <Typography color={'primary'} variant={'h6'}>
                                Register new bus association
                            </Typography>

                            <TextValidator
                            className={classes.text_input}
                            name={'name'}
                            label={"Bus association name"}
                            onChange={handleInputChange}
                            value={inputs.name}
                            />
                            
                            {
                                uploadDone
                                ?
                                    (
                                        <div>
                                            <img src={uploadResponse.path} width={200} height={200}/>
                                        </div>
                                    )
                                :
                                    (
                                        <div>
                                        {
                                            uploading
                                            ?
                                                (
                                                    <div>
                                                        <Typography color={'primary'} variant={'h6'}>
                                                            Working on it. Please wait....
                                                        </Typography>
                                                    </div>
                                                )
                                            :
                                                (
                                                    <div className={classes.upload_container}>
                                                        <Typography color={"secondary"}>
                                                        {uploadTitle}
                                                        </Typography>
                                                        <input onChange={handleFileChange} ref={uploadRef} type={'file'} style={{display:'none'}}/>
                                                        <Button onClick={handleFile} variant={'outlined'} color={'secondary'} className={classes.button}>
                                                            Upload logo
                                                        </Button>
                                                    </div>
                                                )
                                        }
                                    </div>
                                    )
                            }

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
                            {
                                'Register'
                            }
                            </LoadingButton>
                        </ValidatorForm>
                    )
            }
            
        </div>
    )
}

export default AddNewAssociation