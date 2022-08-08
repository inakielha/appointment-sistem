import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import { useEffect, useState } from 'react'
import CalendarDiario from '../calendarDiario/calendarDiario'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDates } from '../../../redux/actions'


export default function Calendar() {
    const [openSave, setOpenSave] = useState(false)
    const [date, setDate] = useState("")
    const dispatch = useDispatch()
    const param = useParams()
    const customerId= {customerId:param.id}
    console.log(customerId)
    const allDates = useSelector((state)=>state.allDates) 
    

    let data = allDates?.notes?.map((date)=>{
        return {
            title: "Appointment",
            start: date.date,
            end: date.date
        }
    })

    function saveRecord(args) {
        setOpenSave(true)
        setDate(args.dateStr)
        console.log(args.dateStr)
    }

    useEffect(()=>{
        dispatch(getDates(customerId))
        console.log("hola")
    },[dispatch]);
    return (
        <div>
            <h3>Make an appointment</h3>
            {!openSave &&
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    dateClick={saveRecord}
                    events={data}
                    businessHours={
                        {daysOfWeek:[1,2,3,4]}
                    }
                />
            }
            {
                openSave &&
                <CalendarDiario data={data} openSave={openSave} setOpenSave={setOpenSave} date={date}></CalendarDiario>
            }
        </div>
    )
}