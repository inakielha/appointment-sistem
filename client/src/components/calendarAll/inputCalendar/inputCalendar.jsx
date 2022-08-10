// import {Dialog, DialogTitle} from "@material-ui/core";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { createDate, getDates } from '../../../redux/actions';
import {getToken,getAllInfoToken} from '../../../helper/getToken';
import { useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';




export default function InputCalendar(props){
    // const [alertSucces, setAlertSucces] = useState(false)
    let noteCreated = useSelector((state)=>state.dateResponse)
    const param = useParams()
    let storageLocal = getAllInfoToken()
    let userId = storageLocal.id
    let email = storageLocal.email
    let customerId = ""
    if(storageLocal.type === "user"){
         customerId= param.id
    }
    if (storageLocal.type === "customer"){
         customerId = storageLocal.id
    }
    const res = useSelector((state) => state.dateResponse)
    const dispatch = useDispatch()
    const [render, setRender] = useState(false)
    const token = getToken()
    const [info, setInfo] = useState({
    title: ""
    })


    function handleClouse (){
        props.setOpenInput(false)
    }
    function handleInput(e){
    setInfo({
        ...info,
        title: e.target.value
    })
    }
    function handleSubmit (e){
        e.preventDefault()
        let send = {
            info:{
                title: info.title,
                date: props.date,
                email,
                customerId,
                userId
            },
            token
        }
        dispatch(createDate(send))
        setInfo({
            title: ""
        })
        setRender(!render)
        props.setOpenInput(false)
    }

    useEffect(()=>{
        dispatch(getDates(props.tokenInfo))
    },[render])
    return (
        <div>
            <Dialog open = {props.open} onClose={handleClouse}>
                <DialogTitle>Appointment</DialogTitle>
                <DialogContent sx={{margin: "1em"}} >
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <TextField sx={{marginTop: "2em"}} label="Subject" onChange={(e)=>handleInput(e)} name="title" value={info.title} fullWidth={true}/>
                        {/* <TextField label="Amount" fullWidth={true} /> */}
                        <DialogActions>
                            <Button onClick={handleClouse}>Close</Button>
                            <Button type='submit'>Save</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>

        </div>
    )
}