import { useEffect } from "react";
import Calendar from "../calendar/calendar";
import ProfessionSearch from "../professionSearch/professionSearch";
import { getProfessions } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import CustomerCard from "../customerCard/customerCard";


export default function Landing(){
    const allCustomersToRender = useSelector((state=>state.customerToRender))
    console.log(allCustomersToRender)
    return(
        <div>
            <ProfessionSearch/>
            <div>
            {allCustomersToRender.length > 1 && <h4>{allCustomersToRender[0].profession}</h4>
            }
            {allCustomersToRender.length && allCustomersToRender.map((el)=>{
                return(
                    <div>
                    <CustomerCard key={el._id} id={el._id} image={el.image} email={el.customerEmail} name={el.customerName} adress={el.adress} profession={el.profession}/>
                    </div>
                    )
                })}
                </div>
        </div>
    )
}