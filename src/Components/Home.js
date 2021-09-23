import React,{useState} from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import {showEvent} from "../Redux/Actions/allActions"
const Home = () => {
    const [form,setForm]=useState({
        date:"",
        })
    const dispatch=useDispatch()
    const history=useHistory()
    const handleChange=(e)=>{
        let { name, value } = e.target;
    setForm({ ...form, [name]: value });
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(showEvent(form))
        history.push("/showevent")
    }
return (
        <div>
            <center>
                <input type="button" className="btn btn-primary" value="Add Event" onClick={()=> history.push("/add")}/> <br/><br/><br/>
                
                <h3>Search Event</h3>
                <form onSubmit={handleSubmit}>
                    <label>Date</label>
                    <input type="date" name="date" required value={form.date} onChange={handleChange} /><br/><br/>
                    <input className="btn btn-primary" type ="submit" value="Submit" />
                </form>
            </center>
        </div>
    )
}
export default Home
