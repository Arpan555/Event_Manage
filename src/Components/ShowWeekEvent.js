import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./Style.css"
import { useHistory } from 'react-router'
import {setWeekEvent,deleteWeekEvent} from "../Redux/Actions/allActions"
const ShowWeekEvent = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    const d = useSelector(state =>state.reducer.showWeekNo)
    const allData=useSelector(state=>state.reducer.weekEvents)
    const todayData=allData.filter(data=> JSON.stringify(data.weeknumber)===d.noofweek )
    todayData.sort((a,b)=> 
    Date.parse(a.date) - Date.parse(b.date)  
    )
    const deleteWeekData=(id)=>{
        dispatch(deleteWeekEvent(id))
    }
    return (
        <div>
            <center>
            <input type="button" value="Back To Home" className="btn btn-dark" onClick={()=> history.push("/")}/><br/><br/><br/>
            {todayData.length>0 ? <h1>Event Details</h1> : "no Event Found" }
            {todayData.length>0 && todayData.map(d =>
                <div className="box" >
                <p>Event: {d.eventName} </p>
                <p>Date: {d.date} </p>
                <p>Day: {d.day} </p>
                <input type="button" value="Edit" className="btn btn-dark m-3" onClick={()=> {
                dispatch(setWeekEvent(d)) 
                history.push("/editweekevent")
                }} />
                <input type="button" value="Delete" className="btn btn-dark" onClick={()=> deleteWeekData(d.id) } />
                </div>)} 
            </center> 
        </div>
    )
}

export default ShowWeekEvent
