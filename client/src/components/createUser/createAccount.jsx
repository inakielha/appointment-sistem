import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/actions";


export default function CreateAccount (){
    const dispatch = useDispatch();
    const response = useSelector((state)=> state.response)
    const [input, setInput] = useState({
        userName:"",
        userEmail:"",
        userPassword:""
    })

    const backToHome = useNavigate()

    if(response.ok) backToHome("/login")

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
        <div>
            <form onSubmit={(e)=>submitForm(e)} >
                <div>
                <label > Name</label>
                <input type="text" name="userName" onChange={(e)=> handleInput(e)}  value={input.userName}/>
                </div>

                <div>
                <label > Email</label>
                <input type="text" name="userEmail" onChange={(e)=> handleInput(e)} value={input.userEmail}/>
                </div>
                <div>

                <label > Password</label>
                <input type="password" name="userPassword" onChange={(e)=> handleInput(e)} value={input.userPassword} />
                </div>

                <button type="submit">Continue</button>
            </form>
        </div>
    )
}