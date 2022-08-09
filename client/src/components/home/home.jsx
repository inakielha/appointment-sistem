import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { checkLogin, clearResponseLogin } from "../../redux/actions"
import CustomerLanding from "./customerLanding/customer"
import Landing from "./landing/landing"


export default function Home(){
    const responseCheck = useSelector((state)=>state.responseCheck)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(clearResponseLogin())
        dispatch(checkLogin())
        if (!responseCheck.ok) navigate("/")
    }, [])
    return (
        <>
        {responseCheck.type === "user" && <Landing/>}
        {responseCheck.type === "customer"  && <CustomerLanding/>}
        {!responseCheck.type && <div>Debe iniciar sesion</div>}
        </>
    )
}