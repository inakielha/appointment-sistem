import { Button, TextField } from "@mui/material";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../redux/actions";
import style from "./createUser.module.css"

export default function CreateAccount (){
    const dispatch = useDispatch();
    const response = useSelector((state)=> state.createResponse)
    const [input, setInput] = useState({
        userName:"",
        userEmail:"",
        userPassword:""
    })

    const backToHome = useNavigate()

    if(response.ok) backToHome("/landing")

    function handleInput (event){
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }
    function submitForm (e){
        e.preventDefault()
        dispatch(createUser(input))
    }
    return (
        <div className={style.container}>
            <h3 className={style.title}>We Calendar</h3>
            <div className={style.containerLogin}>
            <h4 className={style.login}>Create Account</h4>
            <form className={style.form} onSubmit={(e)=>submitForm(e)} >
                {/* <div>
                <label > Name</label>
                <input type="text" name="userName" onChange={(e)=> handleInput(e)}  value={input.userName}/>
            </div> */}
                <TextField id="outlinesd-name" label="Name" variant="outlined" name="userName" value={input.userName} onChange={(e)=>handleInput(e)} />

                {/* <div>
                <label > Email</label>
                <input type="text" name="userEmail" onChange={(e)=> handleInput(e)} value={input.userEmail}/>
            </div> */}
                <TextField sx={{marginTop: "20px"}} id="outlinesd-basiemailc" label="Email" variant="outlined" name="userEmail" value={input.userEmail} onChange={(e)=>handleInput(e)} />
                {/* <div>
                <label > Password</label>
                <input type="password" name="userPassword" onChange={(e)=> handleInput(e)} value={input.userPassword} />
            </div> */}
                <TextField sx={{margin: "20px 0"}} id="outlinesd-basic" type="password" label="Password" variant="outlined" name="userPassword" value={input.userPassword} onChange={(e)=>handleInput(e)} />

                <Button variant="contained" type="submit">Continue</Button>
            </form>
            </div>
        </div>
    )
}