import {FETCH_CATEGORY} from '../Constants'

const initialState = {
    categories:[],
    loading:true
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_CATEGORY:
            return {
                ...state,
                categories:action.payload,
                loading:false
            }

            default:
                return state
    }
}