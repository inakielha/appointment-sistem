import axios from "axios"

export const CREATE_USER = "CREATE_USER"
export const LOGIN = "LOGIN"




export function createUser(info){
return async function (dispatch){
    try{
        const res = await axios.post("http://localhost:4000/users/new",info);
        return dispatch({
            type: CREATE_USER,
            payload: res.data
        })
    }catch (e){
        return dispatch({
            type: CREATE_USER,
            payload: e
        })
    }
}
}
export function login(info){
    return async function (dispatch) {
        try{
            const res = await axios.post("http://localhost:4000/users/",info);
            return dispatch({
                type: LOGIN,
                payload: res.data
            })
        } catch(e){
            return dispatch({
                type: LOGIN,
                payload: e
            })
        }
    }
}