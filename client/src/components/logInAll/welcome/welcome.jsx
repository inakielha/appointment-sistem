import style from "./welcome.module.css"
import doctImage from "../../../assets/doctors.jpg"
import userImages from "../../../assets/user2.jpg"
import { Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { selectUserType } from "../../../redux/actions"
import { useEffect } from "react"


export default function Welcome() {
    const dispatch = useDispatch();
    const [user, setUser] = useState()
    const [btn,setBtn] = useState(true);
    const navigate = useNavigate()

    function handleBorder(e){
    let click = document.getElementById(e.target.title);
    click.style.border = "0.3rem solid black";
    if(e.target.title === "user"){
        var res = document.getElementById("customer")
    } else {
        var res = document.getElementById("user");
    }
    res.style.border= "none"
    setUser(e.target.title)
    setBtn(false)
    }

    function handleSubmit(){
    dispatch(selectUserType(user))
    navigate("/login")
    }
    function getStorage(){
        const localDataStorage = window.localStorage.getItem("loggedCustomer")
        if(localDataStorage){
            const user = JSON.parse(localDataStorage)
            if(user.ok){
                navigate("/landing")
            }
        }
    }
    useEffect(()=>{
    getStorage()
    },[])
    return (
        <div className={style.container}>
            <h3 className={style.text}>Welcome to WeCalendar</h3>
            <div className={style.card}>
            <div className={style.text1}>Select your option </div>
            <div className={style.optionSelect}>
                <div title="user" id="user" className={style.option} onClick={((e)=>handleBorder(e))}>
                    <div title="user">User</div>
                    <img title="user" className={style.image} src={userImages} alt="userss" />
                </div>
                <div title="customer" id="customer" className={style.option} onClick={((e)=>handleBorder(e))}>
                    <div title="customer">Customer</div>
                    <img title="customer" className={style.image} src={doctImage} alt="doctords" />
                </div>
            </div>
            </div>
            <div><Button sx={{fontFamily: "lato", marginBottom: "1em",fontSize:"1.6rem" }} disabled={btn} onClick={handleSubmit} variant="contained" type="submit">Continue</Button></div>
        </div>
    )
}