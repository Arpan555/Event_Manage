import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import {showEvent,showWeekEvent} from "../Redux/Actions/allActions"
const Home = () => {
    const [form,setForm]=useState({
        date:"",
        })
    const [week,setWeek]=useState({
      day:""  
    })
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
        dispatch(showWeekEvent(week))
        history.push("/showweekevent")
    }
return (
        <div>
            <center>
                <input type="button" className="btn btn-primary" value="Add Event" onClick={()=> history.push("/add")}/> <br/><br/><br/>
                
                <h3>Search Event By Date</h3>
                <form onSubmit={handleSubmit}>
                    <label>Date</label>
                    <input type="date" name="date" required value={form.date} onChange={handleChange} /><br/><br/>
                    <input className="btn btn-primary" type ="submit" value="Submit" />
                </form><br/><br/><hr/>
                <h3>Search Event By Day</h3>
                <form onSubmit={handleWeekSubmit}>
                    <label>Day</label>
                    <select name="day" onChange={handleWeekChange}>
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                    </select>
                    <input type="submit" value="Submit" className="btn btn-primary" />


                </form>
            </center>
        </div>
    )
}
export default Home
