import { CREATE_DATE, CREATE_USER, GET_ALL_PROFESSIONS, GET_BY_PROFESSION, GET_DATES, LOGIN, SEARCH_CUSTOMER } from "./actions"


const initialState = {
    calendar: [],
    response: "",
    allCustomers: [],
    customerToRender: [],
    userId: "",
    allDates: []
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
                response: action.payload,
                userId: action.payload.id
            }
        case GET_ALL_PROFESSIONS:
            // let res = action.payload.unshift({profession:"profession"})
            return {
                ...state,
                allCustomers: action.payload,
                customerToRender: action.payload
            }
        case GET_BY_PROFESSION:
            if (action.payload.profession === "All") {
                return {
                    ...state,
                    customerToRender: state.allCustomers
                }
            }
            let arr = state.allCustomers
            let respuesta = arr.filter(el => el.profession === action.payload.profession);
            return {
                ...state,
                customerToRender: respuesta
            }
        case CREATE_DATE:
            return {
                ...state,
                response: action.payload
            }
        case GET_DATES:
            return {
                ...state,
                allDates: action.payload
            }
            case SEARCH_CUSTOMER:
                const res = state.allCustomers.filter((ele)=>{
                    return ele.customerName.includes(action.payload.toLowerCase())
                    // console.log(ele.customerName,action.payload.toLowerCase())
                })
                return {
                    ...state,
                    customerToRender: res
                }
    }
}