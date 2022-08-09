

 function getToken (){
    let tokenStringify = window.localStorage.getItem("loggedCustomer")
    let tokenObject = JSON.parse(tokenStringify)
    let res = `Bearer ${tokenObject.token}`
    return res
}
function getAllInfoToken(){
    let tokenStringify = window.localStorage.getItem("loggedCustomer")
    let tokenObject = JSON.parse(tokenStringify)
    return tokenObject
}
export {
    getAllInfoToken,
    getToken
}