import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import InputCalendar from '../inputCalendar/inputCalendar'
import { useState } from 'react'

export default function Calendar(){
    const [openSave, setOpenSave] = useState(false)

    function handleDateClick () { // bind with an arrow function
        console.log("lo lograste")
        return (
            <form >
                <label >turno</label>
                <input type="text" />
            </form>
        )
      }
    function renderContent(info){
        return(
            <>
            <b>{info.timeText}</b>
            <i>{info.event.title}</i>
            </>
        )
    }
    function injectContent (args){
        return (
            <div>
                <button onClick={()=>saveRecord(args.date)}>
                    {args.dayNumberText}
                </button>
            </div>
        )
    }
    function saveRecord (){
        setOpenSave(true)
    }
    return (
        <div>

        <FullCalendar
        plugins={[dayGridPlugin,interactionPlugin]}
        initialView = "dayGridMonth"
        // selectable = {true}
        // dayCellContent = {injectContent}
        dateClick = {saveRecord}
        // eventContent = {renderContent}
        />
        <InputCalendar open={openSave} onClose={setOpenSave}/>
        </div>
    )
}