import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import { Button } from '@mui/material';
import { useState } from 'react';
import InputCalendar from '../inputCalendar/inputCalendar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDates } from '../../redux/actions';



export default function CalendarDiario(date){
    const [dates, setDate] = useState("")
    const [openInput, setOpenInput] = useState(false)
    const dispatch = useDispatch()

    function handleBtn(){
        date.setOpenSave(false)
    }
    function saveRecord(args) {
        setOpenInput(true)
        console.log(args.dateStr)
        setDate(args.dateStr)
    }
    return(
        <div>
            <Button onClick={()=>handleBtn()}>Month Calendar</Button>
            <FullCalendar
        plugins={[timeGridPlugin,interactionPlugin]}
        initialView = "timeGridDay"
        initialDate= {date.date}
        dateClick = {saveRecord}
        businessHours={{
            startTime: "08:00",
            endTime: "19:00"
        }}
        events = {date.data}
        />
        <InputCalendar date={dates} open={openInput} setOpenInput={setOpenInput}/>
        </div>
    )
}