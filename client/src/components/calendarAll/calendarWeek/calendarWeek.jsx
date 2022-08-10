import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDates } from '../../../redux/actions'
import getCustomerId from '../../../helper/customerid'
import CalendarDiario from '../calendarDiario/calendarDiario'
import SimpleDialogDemo from '../../home/customerLanding/dialogForDates/dialogForDates'

export default function CalendarWeek() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [notesInfo,setNotesInfo] = useState("")
    const [title, setTitle] = useState("")
    const customerIdAndToken = getCustomerId()
    const dispatch = useDispatch()
    const [openSave, setOpenSave] = useState(false)
    const [date, setDate] = useState("")

    const allDates = useSelector((state) => state.allDates)
    let data = allDates?.notes?.map((date) => {
        return {
            title: date.title,
            start: date.date,
            end: date.date,
            noteId: date._id,
            userId: date.userId,
            customerId: customerIdAndToken.customerId.customerId
        }
    })

    function saveRecord(args) {
        setOpenSave(true)
        setDate(args.dateStr)
    }
    function clickEvent(info){
        console.log(info.el.fcSeg.eventRange.def.title)
        setTitle(info.el.fcSeg.eventRange.def.title)
        setNotesInfo(info.el.fcSeg.eventRange.def.extendedProps)
        setDialogOpen(true)
    }

    useEffect(() => {
        dispatch(getDates(customerIdAndToken))
    }, [dispatch]);
    return (
        <div>
            <h3>watch your appointments</h3>
            {   !openSave &&
                <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={saveRecord}
                events={data}
                eventClick= {clickEvent}
                businessHours={
                        {daysOfWeek:[1,2,3,4,5]}
                    }
                    />
                }
                {openSave && <CalendarDiario tokenInfo={customerIdAndToken} data={data} openSave={openSave} setOpenSave={setOpenSave} date={date}></CalendarDiario>}
                {dialogOpen && <SimpleDialogDemo title={title} data={notesInfo} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen}/>}
        </div>
    )
}