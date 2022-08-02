import { useEffect } from "react";
import Calendar from "../calendar/calendar";
import ProfessionSearch from "../professionSearch/professionSearch";
import { getProfessions } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import CustomerCard from "../customerCard/customerCard";
import Container from '@mui/material/Container';

import style from "./landing.module.css";

export default function Landing(){
    const allCustomersToRender = useSelector((state=>state.customerToRender))
    const allCustomersDB = useSelector((state=>state.allCustomers))
    
    return(
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
    )
}