import {
    ACTION_1
} from '../actions/types'

//State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case ACTION_1:
            return {
                ...state,
                payload: action.payload
            }
    }
    return state;
}