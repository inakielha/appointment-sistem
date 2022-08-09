
import axios from "axios"
export const CREATE_USER = "CREATE_USER"
export const LOGIN = "LOGIN"
export const GET_ALL_PROFESSIONS = "GET_ALL_PROFESSIONS"
export const GET_BY_PROFESSION = "GET_BY_PROFESSION"
export const CREATE_DATE = "CREATE_DATE"
export const GET_DATES = "GET_DATES"
export const SEARCH_CUSTOMER = "SEARCH_CUSTOMER"
export const CREATE_CUSTOMER = "CREATE_CUSTOMER"
export const SELECT_USER_TYPE = "SELECT_USER_TYPE"
export const LOGIN_CUSTOMER = "LOGIN_CUSTOMER"
export const CHECK_LOGIN = "CHECK_LOGIN"
export const CLEAR_RESPONSE_LOGIN = "CLEAR_RESPONSE_LOGIN"

export function createUser(info) {
    return async function (dispatch) {
        try {
            const res = await axios.post("http://localhost:4000/users/new", info);
            return dispatch({
                type: CREATE_USER,
                payload: res.data
            })
        } catch (e) {
            return dispatch({
                type: CREATE_USER,
                payload: e
            })
        }
    }
}
export function login(info) {
    return async function (dispatch) {
        try {
            const res = await axios.post("http://localhost:4000/users/", info);
            return dispatch({
                type: LOGIN,
                payload: res.data
            })
        } catch (e) {
            return dispatch({
                type: LOGIN,
                payload: e
            })
        }
    }
}
export function getProfessions() {
    return async function (dispatch) {
        try {
            const res = await axios.get("http://localhost:4000/customers/");
            return dispatch({
                type: GET_ALL_PROFESSIONS,
                payload: res.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}
export function getByProfession(profession) {
    return function (dispatch) {
        return dispatch({
            type: GET_BY_PROFESSION,
            payload: profession
        })
    }
}
export function createDate(info) {
    return async function (dispatch) {
    //     let config = {
    //         headers : {
    //            "Content-Type": "application/json",
    //            Authorization: user.token.token
    //        }
    //    };
    //        try {
    //        const res = await axios.post("http://localhost:4000/dates/", user.customerId, config);
    let config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: info.token
        }
    };
        try {
            const res = await axios.post("http://localhost:4000/dates/new", info.info, config);
            return dispatch({
                type: CREATE_DATE,
                payload: res.data
            })
        } catch (e) {
            console.log(e)
            return dispatch({
                ok: false,
                msg: e
            })
        }
    }
}
export function getDates(user) {
    return async function (dispatch) {
        let config = {
             headers : {
                "Content-Type": "application/json",
                Authorization: user.token.token
            }
        };
            try {
            const res = await axios.post("http://localhost:4000/dates/", user.customerId, config);
            return dispatch({
                type: GET_DATES,
                payload: res.data
            })
        } catch (e) {
            console.log(e)
            return dispatch({
                ok: false,
                msg: e
            })
        }
    }
}
export function searchCustomer(customerName) {
    return function (dispatch) {
        return dispatch({
            type: SEARCH_CUSTOMER,
            payload: customerName.customerName
        })
    }
}
export function createCustomer(info) {
    return async function (dispatch) {
        try {
            let res = await axios.post("http://localhost:4000/customers/new", info);
            return dispatch({
                type: CREATE_CUSTOMER,
                payload: res.data
            })
        } catch (e) {
            console.log(e)
            return dispatch({
                type: CREATE_CUSTOMER,
                payload: { ok: false, error: e }
            })
        }
    }
}
export function selectUserType(info) {
    return function (dispatch) {
        return dispatch({
            type: SELECT_USER_TYPE,
            payload: info
        })
    }
}
export function loginCustomer(info) {
    return async function (dispatch) {
        try {
            const res = await axios.post("http://localhost:4000/customers/", info);
            return dispatch({
                type: LOGIN_CUSTOMER,
                payload: res.data
            })
        } catch (e) {
            console.log(e)
            return dispatch({
                type: LOGIN_CUSTOMER,
                payload: { ok: false, msg: e }
            })
        }
    }
}
export function checkLogin() {
    return async function (dispatch) {
        try {
            let tokenLocalStorage = window.localStorage.getItem("loggedCustomer")
            let tokenObject = JSON.parse(tokenLocalStorage)
            let token = `Bearer ${tokenObject.token}`
            let config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                }
            };
            const url = "http://localhost:4000/users/"

            let res = await axios.get(url, config);

            if (res.data.ok) {
                window.localStorage.setItem("loggedCustomer", JSON.stringify(res.data))
            }
            return dispatch({
                type: CHECK_LOGIN,
                payload: res.data
            })

        } catch (e) {
            console.log(e)
            return dispatch({
                type: CHECK_LOGIN,
                payload: { ok: false, msg: e }
            })
        }
    }
}
export function clearResponseLogin() {
    return function (dispatch) {
        return dispatch({
            type: CLEAR_RESPONSE_LOGIN,
            payload: ""
        })
    }
}