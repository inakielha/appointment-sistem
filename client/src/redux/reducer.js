import { CREATE_USER, LOGIN } from "./actions"


const initialState = {
    calendar: [],
    response: ""
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
        case CREATE_USER:
            return {
                ...state,
                response: action.payload
            }
        case LOGIN:
            return {
                ...state,
                response: action.payload
            }
    }
}