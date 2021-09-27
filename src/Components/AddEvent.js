import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { addEvent } from '../Redux/Actions/allActions'
import cuid from 'cuid'
const AddEvent = () => {
    const [form,setForm]=useState({
        date:"",
        eventName:""
    })
    const [week,setWeek]=useState({
        date:"",
        eventName:""
    })
    const [event,setEvent]=useState("")
    const history=useHistory()
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        let { name, value } = e.target;
    setForm({ ...form, [name]: value });
    }
    const handleWeekChange=(e)=>{
        let {name,value}=e.target;
        setWeek({...week,[name]:value});
    }
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const handleSubmit=(e)=>{
        e.preventDefault()
        let currentdate = new Date(form.date);
        let oneJan = new Date(currentdate.getFullYear(),0,1);
        let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
        let result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
        dispatch(addEvent({
            date:form.date,
            eventName:form.eventName,
            day:days[currentdate.getDay()],
            weeknumber:result,
            id:cuid()
        }))
        setForm({
            date:"",
            eventName:"",
        })
    }
const handleWeekSubmit=(e)=>{
        e.preventDefault()
        let d = new Date(week.date);
        let currentdate = new Date(week.date);
        let oneJan = new Date(currentdate.getFullYear(),0,1);
        let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
        let result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7);
        dispatch(addEvent({
            date:week.date,
            eventName:week.eventName,
            day:days[d.getDay()],
            weeknumber:result,
            id:cuid()
        }))
        
        setWeek({
            date:"",
            eventName:"",
            
        })
    }
    const setAdd=e=>{
        setEvent(e.target.value)
    }
    return (
        <div>
            <center>
                <input type="button" value="Back To Home" className="btn btn-dark" onClick={()=> history.push("/")}/><br/><br/><br/>
                
                <div onChange={setAdd}>
                    <label>Date</label>
                    <input type="radio" value="date" name="choose" /> <br/>
                    <label>Week</label>
                    <input type="radio" value="weekly" name="choose"/>
                </div>
                
                
                {event ==="date" ?<>
                <h1>Add Event</h1><br/>
                <form onSubmit={handleSubmit}>
                    <label>Date</label>
                    <input type="date" name="date" required value={form.date} onChange={handleChange} /><br/><br/>
                    <label>Event</label>
                    <input type="text" name="eventName" required value={form.eventName} onChange={handleChange} /><br/><br/>
                    <input type="submit" value="Add Event" />
                </form><br/></> :"" }
                {event ==="weekly" ? 
                <>
                <h2>Weekly Event</h2>
                <form onSubmit={handleWeekSubmit}>
                    <lebel>Date</lebel>
                    <input type="date" name="date" value={week.date} onChange={handleWeekChange}/><br/><br/>
                    <label>Event</label>
                    <input type="text" name="eventName" required value={week.eventName} onChange={handleWeekChange} /><br/><br/>
                    <input type="submit" value="Add Event" />
                </form></>:""}
            </center>
        </div>
    )
}
export default AddEvent
