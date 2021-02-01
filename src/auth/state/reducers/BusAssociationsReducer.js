import {FETCH_ASSOCIATIONS, STORE_NEW_ASSOCATION} from '../Constants'
const initialState = {
    response:{
        status:false,
        association:{},
        message:''
    },
    associations:{},
    loading:true,
}

export default function(state=initialState,action){
    switch(action.type){
        case STORE_NEW_ASSOCATION:
            return {
                ...state,
                response:action.payload
            }
            case FETCH_ASSOCIATIONS:
                return {
                    ...state,
                    loading:false,
                    associations:action.payload
                }

            default:
                return state
    }
}