import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import { Alert, Button, Snackbar } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputCalendar from '../inputCalendar/inputCalendar';
import { getAllInfoToken } from '../../../helper/getToken';
import SimpleDialogDemo from '../../home/customerLanding/dialogForDates/dialogForDates';
import TurnoReservado from '../../home/landing/dialogTurnoReservado/turnoReservado';




export default function CalendarDiario(date) {
    const [dates, setDate] = useState("")
    const [openInput, setOpenInput] = useState(false)
    const [notesInfo,setNotesInfo] = useState("")
    const [title, setTitle] = useState("")
    const [dialogOpen, setDialogOpen] = useState(false)
    const [openDialog, setOpenDialog] = useState(false)
    const [alertSucces, setAlertSucces] = useState(false)



    let storageLocal = getAllInfoToken()

    let clickEvent = () => {
        setOpenDialog(true)

    }
    if (storageLocal.type === "customer") {
        clickEvent = (info) => {
            console.log("chau")
            setTitle(info.el.fcSeg.eventRange.def.title)
            setNotesInfo(info.el.fcSeg.eventRange.def.extendedProps)
            setDialogOpen(true)
        }
    }

    function handleBtn() {
        date.setOpenSave(false)
    }
    function saveRecord(args) {
        setOpenInput(true)
        // console.log(args.dateStr)
        setDate(args.dateStr)
    }
    return (
        <div>

            <Button onClick={() => handleBtn()}>Month Calendar</Button>
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                initialView="timeGridDay"
                initialDate={date.date}
                dateClick={saveRecord}
                businessHours={{
                    startTime: "08:00",
                    endTime: "19:00"
                }}
                eventClick={clickEvent}
                events={date.data}
            />
            <InputCalendar setAlertSucces={setAlertSucces} tokenInfo={date.tokenInfo} date={dates} open={openInput} setOpenInput={setOpenInput} />
            {dialogOpen && <SimpleDialogDemo title={title} data={notesInfo} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen}/>}
            { openDialog && <TurnoReservado setOpenDialog={setOpenDialog}></TurnoReservado>}
        </div>
    )
}