
import { Button, TextField } from "@mui/material";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../../../redux/actions";
import style from "../createUser/createUser.module.css"


export default function CreateCustomer(){
const dispatch = useDispatch();
const response = useSelector((state)=> state.response)
    const [input, setInput] = useState({
        customerName:"",
        customerEmail:"",
        customerPassword:"",
        adress: "",
        profession:"",
        image: "",
    })

    const backToHome = useNavigate()

    if(response.ok) backToHome("/landing")

    function fileChange(e){
        let inputs = document.getElementById("inputTag");
        let imageName = document.getElementById("imageName")
        
            let inputImage = document.querySelector("input[type=file]").files[0];
            
            imageName.innerText = inputImage.name;
            const res = URL.createObjectURL(e.target.files[0])
            console.log(res)
            setInput({
                ...input,
                image: res
            })
    }
        
    function handleInput (event){
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }
    function submitForm (e){
        e.preventDefault()
        dispatch(createCustomer(input))
    }
    return (
        <div className={style.container}>
            <h3 className={style.title}>We Calendar</h3>
            <div className={style.containerLogin}>
            <h4 className={style.login}>Create Account</h4>
            <form className={style.form} onSubmit={(e)=>submitForm(e)} >
                <TextField id="outlinesd-name" label="Name" variant="outlined" name="customerName" value={input.customerName} onChange={(e)=>handleInput(e)} />

                <TextField sx={{marginTop: "2em"}} id="outlinesd-basiemailc" label="Email" variant="outlined" name="customerEmail" value={input.customerEmail} onChange={(e)=>handleInput(e)} />

                <TextField sx={{margin: "2em 0"}} id="outlinesd-basic" type="password" label="Password" variant="outlined" name="customerPassword" value={input.customerPassword} onChange={(e)=>handleInput(e)} />

                <TextField id="outlinesd-basics" type="text" label="Adress" variant="outlined" name="adress" value={input.adress} onChange={(e)=>handleInput(e)} />

                <TextField sx={{marginTop: "2em"}} id="outlinesd-basicsx" type="text" label="Profession" variant="outlined" name="profession" value={input.profession} onChange={(e)=>handleInput(e)} />


                <div className={style.labelContainer}>
                <label htmlFor="inputTag" className={style.label}>
                    Select image
                    <input accept="image/*" onChange={(e)=>fileChange(e)} id="inputTag" className={style.file} type="file" />
                    {input.image? <img className={style.fileImage} src={input.image} alt="test"></img>:""}
                    <span id="imageName" className={style.imageName}></span>
                </label>
                </div>

                <Button variant="contained" type="submit">Continue</Button>
            </form>
            </div>
        </div>
    )
}