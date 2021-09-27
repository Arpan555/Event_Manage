import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import {showEvent} from "../Redux/Actions/allActions"
const Home = () => {
    const [form,setForm]=useState({
        date:"",
        })
    const [week,setWeek]=useState({
        noofweek:""  
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
        console.log(form)
        dispatch(showEvent(form))
        history.push("/showevent")
    }
    const handleWeekSubmit=(e)=>{
        e.preventDefault()
        console.log(week)
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
                    <label>Date</label>
                    <input type="radio" value="date" name="choose" /> <br/>
                    <label>Week</label>
                    <input type="radio" value="weekly" name="choose"/>
                </div>
                {event === "date" ?
                <>
                <h3>Search Event By Date</h3>
                <form onSubmit={handleSubmit}>
                    <label>Date</label>
                    <input type="date" name="date" required value={form.date} onChange={handleChange} /><br/><br/>
                    <input className="btn btn-primary" type ="submit" value="Submit" />
                </form></>:""}
               {event === "weekly" ? <>
                <h3>Search Event By Week</h3>
                <form onSubmit={handleWeekSubmit}>
                    <label>No. of Week</label>
                    <input type="number" name="noofweek" value={week.noofweek} min="1" max="52" onChange={handleWeekChange} />
                    <input type="submit" value="Submit" className="btn btn-primary m-2" />
                </form></>:""}
            </center>
        </div>
    )
}
export default Home
