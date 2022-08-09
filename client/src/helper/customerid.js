export default function getCustomerId() {
    let tokenStringify = window.localStorage.getItem("loggedCustomer")
    let tokenObject = JSON.parse(tokenStringify)
    let res = {
        customerId: {
            customerId: tokenObject.id
        },
        token: {
            token: `Bearer ${tokenObject.token}`
        }
    }
    return res
}