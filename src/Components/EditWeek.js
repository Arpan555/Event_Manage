import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { editWeekEvent,resetWeekEvent } from '../Redux/Actions/allActions'
const EditWeek = () => {
    const editData= useSelector(state => state.reducer.setWeekEvent)
    const [form,setForm]=useState({
        date:editData.date,
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
        dispatch(editWeekEvent(form))
        setForm({
            date:"",
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
                    <label>Date</label>
                    <input type="date" name="date" required defaultValue={editData.date} onChange={handleChange} />
                    <label>Event</label>
                    <input type="text" name="eventName" required defaultValue={editData.eventName} onChange={handleChange} /><br/><br/>
                    <input type="submit" value="Submit" />
                    </form>
            </center>
        </div>
    )
}

export default EditWeek
