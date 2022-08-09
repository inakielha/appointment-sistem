import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDates } from '../../../redux/actions'
import getCustomerId from '../../../helper/customerid'

export default function CalendarWeek() {
    const customerIdAndToken = getCustomerId()
    console.log(customerIdAndToken)
    const dispatch = useDispatch()
    const allDates = useSelector((state) => state.allDates)
    let data = allDates?.notes?.map((date) => {
        return {
            title: "Appointment",
            start: date.date,
            end: date.date
        }
    })

    useEffect(() => {
        dispatch(getDates(customerIdAndToken))
    }, [dispatch]);
    return (
        <div>
            <h3>watch your appointments</h3>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                // dateClick={saveRecord}
                events={data}
            // businessHours={
            //     {daysOfWeek:[1,2,3,4]}
            // }
            />
        </div>
    )
}