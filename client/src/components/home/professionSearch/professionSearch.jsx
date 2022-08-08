
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getByProfession, getProfessions } from "../../../redux/actions"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';




export default function ProfessionSearch() {
    const [trabajo, setTrabajo] = useState({profession: "All"})
    const allProfessions = useSelector((state) => state.allCustomers);
    let professonFiltrado = []
    allProfessions.map(el=>(professonFiltrado.includes(el.profession) ? "": professonFiltrado.push(el.profession)))
    const dispatch = useDispatch()

    function handleSelect(e) {
        setTrabajo({
            profession: e.target.value
        })
    }
    useEffect(() => {
        dispatch(getProfessions())
    }, []);
    useEffect(() => {
        dispatch(getByProfession(trabajo))
    }, [trabajo]);
    
    return (
        <div>
            <h4>Search by Profession</h4>
            <Select defaultValue="All" autoFocus={true} onChange={(e) => handleSelect(e)}>
                <MenuItem key={12} value={"All"} hidden> All</MenuItem>
                {professonFiltrado?.map((work) => (
                    <MenuItem key={work} value={work}>{work}</MenuItem>
                ))}
            </Select>
        </div>
    )
}