
import Calendar from "../../calendarAll/calendar/calendar";
import ProfessionSearch from "../professionSearch/professionSearch";
import { useDispatch, useSelector } from "react-redux";
import CustomerCard from "../customerCard/customerCard";
import Container from '@mui/material/Container';

import style from "./landing.module.css";
import NavBar from "../../navBar/navbar";

export default function Landing(){
    const allCustomersToRender = useSelector((state=>state.customerToRender))
    const allCustomersDB = useSelector((state=>state.allCustomers))
    return(
        <>
            <NavBar/>
        <Container maxWidth="sm">
            <ProfessionSearch/>
            <Container>
            {allCustomersToRender.length === allCustomersDB.length ? <h4>{"All Services"}</h4> : <h4>{allCustomersToRender[0].profession}</h4>
            }
            {allCustomersToRender.length && allCustomersToRender.map((el)=>{
                return(
                    <Container>
                    <CustomerCard key={el._id} id={el._id} image={el.image} email={el.customerEmail} name={el.customerName} adress={el.adress} profession={el.profession}/>
                    </Container>
                    )
                })}
                </Container>
        </Container>
        </>
    )
}