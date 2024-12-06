import {CHANGE_MESSAGE} from "../actions/dataActions.js";


const initialState = {
    message: 'Enter city name',
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE:
            return {...state, message: action.payload};
        default:
            return state;
    }
}