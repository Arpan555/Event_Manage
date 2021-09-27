import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { editWeekEvent,resetWeekEvent } from '../Redux/Actions/allActions'
const EditWeek = () => {
    const editData= useSelector(state => state.reducer.setWeekEvent)
    console.log(editData)
    const [form,setForm]=useState({
        day:editData.day,
        eventName:editData.eventName,
        id:editData.id
    })
    const history=useHistory()
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        let { name, value } = e.target;
    setForm({ ...form, [name]: value });
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
        dispatch(editWeekEvent(form))
        setForm({
            day:"",
            eventName:"",
            id:editData.id,
        })
        dispatch(resetWeekEvent())
        history.push("/showweekevent")
    }

    return (
        <div>
            <center>
            <input type="button" value="Back To Home" className="btn btn-dark" onClick={()=> history.push("/")}/><br/><br/><br/>
            <h1>Edit Event</h1><br/><br/>
                    <form onSubmit={handleSubmit}>
                    <label>Day</label>
                    <select name="day" defaultValue={editData.day} onChange={handleChange}>
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                    </select>
                    <label>Event</label>
                    <input type="text" name="eventName" required defaultValue={editData.eventName} onChange={handleChange} /><br/><br/>
                    <input type="submit" value="Submit" />
                    </form>
            </center>
        </div>
    )
}

export default EditWeek
