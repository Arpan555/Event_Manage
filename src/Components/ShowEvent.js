import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./Style.css"
import { useHistory } from 'react-router'
import {setEvent,deleteEvent} from "../Redux/Actions/allActions"
const ShowEvent = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    const d = useSelector(state =>state.reducer.showDate)
    const allData=useSelector(state=>state.reducer.events)
    const todayData=allData.filter(data=> data.date === d.date )
    const deleteData=(id)=>{
        dispatch(deleteEvent(id))
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
                <input type="button" value="Edit" className="btn btn-dark m-3" onClick={()=> {dispatch(setEvent(d)) 
                history.push("/edit")
                }} />
                <input type="button" value="Delete" className="btn btn-dark" onClick={()=> deleteData(d.id) } />
                </div>)}
           </center> 
        </div >
        )
}
export default ShowEvent
