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
import { createDate } from '../../redux/actions';



export default function InputCalendar(props){
    const userId = useSelector((state)=>state.userId)
    const res = useSelector((state) => state.response)
    const dispatch = useDispatch()
    const param = useParams()
    const customerId= param.id
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
            title: info.title,
            date: props.date,
            email: res.userEmail,
            customerId,
            userId
        }
        console.log(send)
        dispatch(createDate(send))
    }

    return (
        <div>
            <Dialog open = {props.open} onClose={handleClouse}>
                <DialogTitle>Appointment</DialogTitle>
                <DialogContent>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <TextField label="Subject" onChange={(e)=>handleInput(e)} name="title" value={info.title} fullWidth={true}/>
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