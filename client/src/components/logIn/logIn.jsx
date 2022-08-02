import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, } from "@mui/material";
import LinkMaterial from '@mui/material/Link';

import style from "./login.module.css"


export default function LogIn(){
    const response = useSelector((state)=> state.response)
    const dispatch = useDispatch();
    const backToHome = useNavigate()


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
        dispatch(login(input))
    }
    if(response.ok) backToHome("/landing")

    return (
        <div className={style.container}>
            <h3 className={style.title}>WeCalendar</h3>
            <div className={style.containerLogin}>
            <h4 className={style.login}>Log In</h4>
            <form className={style.form} onSubmit={(e)=>submitForm(e)}>
            <TextField id="outlinesd-basic" label="Email" variant="outlined" name="userEmail" value={input.userEmail} onChange={(e)=>handleInput(e)} />
                {/* <div>
            <label>Email</label>
            <input type="text" name="userEmail" value={input.userEmail} onChange={(e)=>handleInput(e)} />
                </div> */}
            <TextField sx={{margin: "20px 0"}} id="outlined-basic" label="Password" variant="outlined" type="password" name="userPassword" value={input.userPassword} onChange={(e)=>handleInput(e)} />
                {/* <div>
            <label>Password</label>
            <input type="password" name="userPassword" value={input.userPassword} onChange={(e)=>handleInput(e)} />
                </div> */}
            {/* <button type="submit">Continue</button> */}
            <Button sx={{fontFamily:"lato"}} variant="contained" type="submit">Continue</Button>
            </form>
            {response.msg && 
            <h4>{response.msg}</h4>}
            <Link to= "/createAccount" className={style.link}> New user? Create account </Link>
            </div>
        </div>
    )
}