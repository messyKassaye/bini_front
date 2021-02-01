import {REGISTOR_ADMIN} from '../Constants'

const initialState = {
    response:{
        status:false,
        message:''
    }
}

export default function(state=initialState,action){
    switch(action.type){
        case REGISTOR_ADMIN:
            return{
                ...state,
                response:action.payload
            }

            default:
                return state
    }
}