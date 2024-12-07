import {PRINT_CITY} from "../actions/dataActions.js";

const initialState = {
    city:""
}

export const inputReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRINT_CITY:
            return{...state, city: action.payload};
        default:
            return state;
    }
}