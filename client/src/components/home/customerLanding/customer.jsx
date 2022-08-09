import CalendarWeek from "../../calendarAll/calendarWeek/calendarWeek";
import PrimarySearchAppBar from "../../navBar/navbarCustomer";


export default function CustomerLanding(){
    return (
        <>
        <PrimarySearchAppBar/>
        <div>
            <CalendarWeek/>
        </div>
        </>
    )
}