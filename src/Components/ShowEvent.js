import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./Style.css"
import { useHistory } from 'react-router'
import {setEvent,deleteEvent} from "../Redux/Actions/allActions"
let todayData;
const ShowEvent = () => {
    const dispatch = useDispatch()
    const history=useHistory()
    const d = useSelector(state =>state.reducer.showData)
    const allData=useSelector(state=>state.reducer.events)
    if (d.noofweek){
        todayData=allData.filter(data=> JSON.stringify(data.weeknumber) === d.noofweek)
    }
    if(d.date){
        todayData=allData.filter(data=> data.date === d.date)
    }
    console.log(todayData)
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
                <p>Day:{d.day} </p>
                <input type="button" value="Edit" className="btn btn-dark m-3" onClick={()=> {dispatch(setEvent(d)) 
                history.push("/edit")
                }} />
                <input type="button" value="Delete" className="btn btn-dark" onClick={()=> deleteData(d.id) } /><hr/>
                </div>)}
           </center> 
        </div >
        )
}
export default ShowEvent
