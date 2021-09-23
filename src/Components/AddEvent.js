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
    const history=useHistory()
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        let { name, value } = e.target;
    setForm({ ...form, [name]: value });
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addEvent({
            date:form.date,
            eventName:form.eventName,
            id:cuid()
        }))
        setForm({
            date:"",
            eventName:""
        })
    }
    return (
        <div>
            <center>
                <input type="button" value="Back To Home" className="btn btn-dark" onClick={()=> history.push("/")}/><br/><br/><br/>
                <h1>Add Event</h1><br/><br/>
                <form onSubmit={handleSubmit}>
                    <label>Date</label>
                    <input type="date" name="date" required value={form.date} onChange={handleChange} /><br/><br/>
                    <label>Event</label>
                    <input type="text" name="eventName" required value={form.eventName} onChange={handleChange} /><br/><br/>
                    <input type="submit" value="Add Event" />
                </form>
            </center>
        </div>
    )
}
export default AddEvent
