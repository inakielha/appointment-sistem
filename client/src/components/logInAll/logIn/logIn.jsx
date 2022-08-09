import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button,TextField, } from "@mui/material";
import style from "./login.module.css"
import { login, loginCustomer } from "../../../redux/actions";


export default function LogIn(){
    // const response = useSelector((state)=> state.loginUserResponse)
    const responseUser = useSelector((state)=> state.loginUserResponse);
    const responseCustomer = useSelector((state)=> state.loginCustomerResponse);
    let response = ""
    const userType = useSelector((state)=> state.userType)
    const [render, setRender] = useState("")

    const dispatch = useDispatch();
    const backToHome = useNavigate()

    if (userType === "user"){
        response = {
            ok: responseUser.ok,
            type : "user"
        }

    } 
        
    if (userType === "customer"){
        response = {
            ok: responseCustomer.ok,
            type : "customer"
        }
    } 

    
    const [input, setInput] = useState({
        userEmail:"",
        userPassword:""
    })
    function handleInput(e){
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
    }
    function submitForm (e){
        e.preventDefault()
        // userType === "user" ? dispatch(login(input)) : dispatch(loginCustomer(input))
        if(userType === "user") dispatch(login(input))
        else {
            let res = {
                customerPassword: input.userPassword,
                customerEmail: input.userEmail
            }
            dispatch(loginCustomer(res));
            setRender("troll")
        }
    }
    console.log(response)
    if(response.ok && response.type === userType) backToHome("/landing")

    return (
        <div className={style.container}>
            <h3 className={style.title}>WeCalendar</h3>
            <div className={style.containerLogin}>
            <h4 className={style.login}>Log In</h4>
            <form className={style.form} onSubmit={(e)=>submitForm(e)}>

            <TextField id="outlinesd-basic" label="Email" variant="outlined" name="userEmail" value={input.userEmail} onChange={(e)=>handleInput(e)} />
               
            <TextField sx={{margin: "2em 0",width:"100%"}} id="outlined-basic" label="Password" variant="outlined" type="password" name="userPassword" value={input.userPassword} onChange={(e)=>handleInput(e)} />
               
            <Button sx={{fontFamily:"lato"}} variant="contained" type="submit">Continue</Button>
            </form>
            {response.msg && 
            <h4>{response.msg}</h4>}
            <Link to= "/createAccount" className={style.link}> New user? Create account </Link>
            </div>
        </div>
    )
}