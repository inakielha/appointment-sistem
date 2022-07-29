import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions";
import { useNavigate } from "react-router-dom";


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
        <div>
            <h3>WeCalendar</h3>
            <h4>Welcome to WeCalendar</h4>
            <form onSubmit={(e)=>submitForm(e)}>
                <div>
            <label>Email</label>
            <input type="text" name="userEmail" value={input.userEmail} onChange={(e)=>handleInput(e)} />
                </div>
                <div>
            <label>Password</label>
            <input type="password" name="userPassword" value={input.userPassword} onChange={(e)=>handleInput(e)} />
                </div>
            <button type="submit">Continue</button>
            </form>
            {response.msg && 
            <h4>{response.msg}</h4>}
            <Link to= "/createAccount"> New user? Create account </Link>
        </div>
    )
}