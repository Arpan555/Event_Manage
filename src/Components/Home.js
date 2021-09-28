import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import {showEvent} from "../Redux/Actions/allActions"
const Home = () => {
    const [form,setForm]=useState({
        date:"",
        })
    const [week,setWeek]=useState({
        weekno:""  
    })
    const [event,setEvent]=useState("")
    const dispatch=useDispatch()
    const history=useHistory()
    const handleChange=(e)=>{
        let { name, value } = e.target;
    setForm({ ...form, [name]: value });
    }
    const handleWeekChange=(e)=>{
        let{name,value}=e.target;
        setWeek({...week,[name]:value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(showEvent(form))
        history.push("/showevent")
    }
    const handleWeekSubmit=(e)=>{
        e.preventDefault()
        dispatch(showEvent(week))
        history.push("/showevent")
    }
    const setAdd=(e)=>{
        setEvent(e.target.value)
    }
  
return (
        <div>
            <center>
                <input type="button" className="btn btn-primary" value="Add Event" onClick={()=> history.push("/add")}/> <br/><br/><br/>
                <h2>Search</h2>
                <div onChange={setAdd}>
                    <lebel>Date</lebel>
                    <input type="radio" value="date" name="choose" /> <br/>
                    <lebel>Week Number</lebel>
                    <input type="radio" value="weekly" name="choose"/>
                </div>
                {event === "date" ?
                <>
                <h3>Search Event By Date</h3>
                <form onSubmit={handleSubmit}>
                    <lebel>Date</lebel>
                    <input type="date" name="date" required value={form.date} onChange={handleChange} /><br/><br/>
                    <input className="btn btn-primary" type ="submit" value="Submit" />
                </form></>:""}
               {event === "weekly" ? <>
                <h3>Search Event By Week </h3>
                <form onSubmit={handleWeekSubmit}>
                    <lebel>Week</lebel>
                    <input type="number" name="weekno" value={week.weekno} onChange={handleWeekChange} />
                    <input type="submit" value="Submit" className="btn btn-primary m-2" />
                </form></>:""}
            </center>
        </div>
    )
}
export default Home
