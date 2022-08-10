import { CHECK_LOGIN, CLEAR_RESPONSE_LOGIN, CREATE_CUSTOMER, CREATE_DATE, CREATE_USER, GET_ALL_PROFESSIONS, GET_BY_PROFESSION, GET_DATES, GET_USER_BY_ID, LOGIN, LOGIN_CUSTOMER, SEARCH_CUSTOMER, SELECT_USER_TYPE } from "./actions"


const initialState = {
    calendar: [],
    response: "",
    createCustomerResponse: "",
    dateResponse: "",
    createResponse: "",
    loginUserResponse: "",
    allCustomers: [],
    customerToRender: [],
    userId: "",
    allDates: [],
    userType: "",
    responseCheck: "",
    loginCustomerResponse: "",
    user: ""
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
        case CREATE_USER:
            return {
                ...state,
                createResponse: action.payload
            }
        case LOGIN:
            if (action.payload.ok) {
                window.localStorage.setItem(
                    "loggedCustomer", JSON.stringify(action.payload)
                )
            }
            return {
                ...state,
                loginUserResponse: action.payload,
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
                dateResponse: action.payload
            }
        case GET_DATES:
            return {
                ...state,
                allDates: action.payload
            }
        case SEARCH_CUSTOMER:
            const res = state.allCustomers.filter((ele) => {
                return ele.customerName.includes(action.payload.toLowerCase())
                // console.log(ele.customerName,action.payload.toLowerCase())
            })
            return {
                ...state,
                customerToRender: res
            }
        case CREATE_CUSTOMER:
            return {
                ...state,
                createCustomerResponse: action.payload
            }
        case SELECT_USER_TYPE:
            return {
                ...state,
                userType: action.payload
            }
        case LOGIN_CUSTOMER:
            if (action.payload.ok) {
                window.localStorage.setItem(
                    "loggedCustomer", JSON.stringify(action.payload)
                )
            }
            return {
                ...state,
                loginCustomerResponse: action.payload,
                userId: action.payload.id
            }
        case CHECK_LOGIN:
            return {
                ...state,
                responseCheck: action.payload,
            }
        case CLEAR_RESPONSE_LOGIN:
            return {
                ...state,
                loginCustomerResponse: { ...state.loginCustomerResponse, ok: false },
                loginUserResponse: { ...state.loginUserResponse, ok: false }
            }
            case GET_USER_BY_ID:
                return{
                    ...state,
                    user: action.payload
                }
    }
}