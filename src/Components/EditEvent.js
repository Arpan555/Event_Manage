import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { editEvent,resetEvent } from '../Redux/Actions/allActions'
const EditEvent = () => {
    const editData = useSelector(state => state.reducer.setEvent)
    const [form,setForm]=useState({
        eventName:editData.eventName,
    })
    const history=useHistory()
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        let { name, value } = e.target;
    setForm({ ...form, [name]: value });
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(editEvent({
            eventName:form.eventName,
            id:editData.id,
            day:editData.day,
            date:editData.date,
            weeknumber:editData.weeknumber
        }))
        setForm({
            eventName:"",
            id:editData.id,
        })
        dispatch(resetEvent())
        history.push("/showevent")
    }
return (
        <div>
            <center>
                <input type="button" value="Back To Home" className="btn btn-dark" onClick={()=> history.push("/")}/><br/><br/><br/>
                    <h1>Edit Event</h1><br/><br/>
                    <form onSubmit={handleSubmit}>
                        <lebel>Event</lebel>
                        <input type="text" name="eventName" required defaultValue={editData.eventName} onChange={handleChange} /><br/><br/>
                        <input type="submit" value="Submit Event" />
                    </form>
            </center>
        </div>
    )
}
export default EditEvent
