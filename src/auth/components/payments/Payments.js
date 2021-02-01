import { Card, CardHeader, CardContent, IconButton, Divider } from "@material-ui/core"
import { AttachMoney, Add } from "@material-ui/icons"
import AppForm from '../../forms/AppForm'
import {openDialog} from '../../state/AppAction'
import AddNewPayment from './widgets/AddNewPayment'
import {useDispatch,useSelector} from 'react-redux'
import { API_URL } from "../../../constants/constants"
const Payments =()=>{

    const dispatch = useDispatch()
    const addNewPayment = ()=>{
        const info={
            path:`${API_URL}/payment`,
            btnLabel:'Create payment'
        }
        const showData = {
            'show':true,
            'title':'Add new payment',
            'page':<AppForm form={AddNewPayment} info={info}/>
        }
        dispatch(openDialog(showData))
    }
    return(
        <Card>
            <CardHeader
             title={'Payments'}
             avatar={<AttachMoney/>}
             action={
                 <IconButton onClick={()=>addNewPayment()}>
                     <Add/>
                 </IconButton>
             }
            />
            <Divider/>
            <CardContent>

            </CardContent>
        </Card>
    )
}

export default Payments