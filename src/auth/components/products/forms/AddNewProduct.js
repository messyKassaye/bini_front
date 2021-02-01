import { TextValidator, ValidatorForm } from "react-material-ui-form-validator"
import {grey} from '@material-ui/core/colors/grey'
import React,{useEffect,useState} from 'react'
import ProductStyle from '../styles/ProductStyle'
import UseForm from '../../../../commons/UseForm'
import {index} from '../../../state/AppAction'
import {useSelector,useDispatch} from 'react-redux'
import { API_URL } from "../../../../constants/constants"
import { FETCH_CATEGORY } from "../../../state/Constants"
import { Skeleton } from "@material-ui/lab"
import { FormControl, InputLabel, Select,MenuItem } from "@material-ui/core"
const AddNewProduct =()=>{ 
    const {inputs,handleInputChange} = UseForm({'product_name':"",'category_id':""})
    const [mediaSelected,setMediaSelected] = useState(false)
    const [mediaTypeValue,setMediaTypeValue] = useState(false)
    const classes = ProductStyle()
    const dispatch = useDispatch();
    const categories = useSelector(state=>state.authReducer.categoryReducer.categories)
    const loading = useSelector(state=>state.authReducer.categoryReducer.loading)

    useEffect(()=>{
        dispatch(index(`${API_URL}category`,FETCH_CATEGORY))
    })

    const handleMediaSelect = () => {
        setMediaSelected(false)
    }

   const handleMediaSelectOpen = () => {
        setMediaSelected(false)
    }

   const handleMediaSelectChange = (event) => {
        setMediaTypeValue(event.target.value)
        inputs['category_id'] = event.target.value
        console.log(inputs)
    }

    return <div>
        {
            loading
            ?
                (
                    <Skeleton
                     width={'100%'}
                     height={50}
                     style={{backgroundColor:grey[500]}}
                    />
                )
            :
                (
                    <ValidatorForm className={classes.form}>
                        <TextValidator
                            className={classes.text_input}
                            label={'Product name'}
                            onChange={handleInputChange}
                            name="product_name"
                            type='text'
                            value={inputs.product_name}
                            validators={['required']}
                            errorMessages={['Please enter product name']}
                        />

                                    <FormControl className={classes.text_input}>
                                    <InputLabel
                                         htmlFor="demo-controlled-open-select">{'Select card type'}</InputLabel>
                                        <Select
                                        name='category_id'
                                        value={inputs.category_id}
                                        open={mediaSelected}
                                        onClose={handleMediaSelect}
                                        onOpen={handleMediaSelectOpen}
                                        onChange={handleMediaSelectChange}
                                    
                                        >
                                        {
                                        categories.data.map(items => (
                                        <MenuItem key={items.name} value={items.id}
                                            name={items.name}>{`Item: ${items.name}`}</MenuItem>
                                            ))
                                        }                          
                                         </Select>                                          
                                    </FormControl>
                    </ValidatorForm>
                )
        }
    </div>
}

export default AddNewProduct