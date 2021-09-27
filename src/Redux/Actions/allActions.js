import { ADD_EVENT, ADD_WEEK_EVENT, DELETE_EVENT, EDIT_EVENT, RESET_EVENT, 
    SET_EVENT, SET_WEEK_EVENT, SHOW_EVENT, SHOW_WEEK_EVENT,EDIT_WEEK_EVENT,DELETE_WEEK_EVENT, RESET_WEEK_EVENT } from ".";
export const addEvent=(data)=>{
    return{
        type:ADD_EVENT,
        payload:data
    }
}
export const addWeekEvent=(data)=>{
    console.log(data)
    return{
        type:ADD_WEEK_EVENT,
        payload:data
    }
}
export const showEvent=(data)=>{
    return{
        type:SHOW_EVENT,
        payload:data
    }
}
export const showWeekEvent=(data)=>{
    console.log(data)
    return{
        type:SHOW_WEEK_EVENT,
        payload:data
    }
}
export const setEvent=(data)=>{
    return{
        type:SET_EVENT,
        payload:data
    }
}
export const setWeekEvent=(data)=>{
    return{
        type:SET_WEEK_EVENT,
        payload:data
    }
}
export const editEvent=(data)=>{
    return{
        type:EDIT_EVENT,
        payload:data
    }
}
export const resetEvent=()=>{
    return{
        type:RESET_EVENT
    }
}
export const editWeekEvent=(data)=>{
    return{
        type:EDIT_WEEK_EVENT,
        payload:data
    }
}
export const resetWeekEvent=()=>{
    return{
        type:RESET_WEEK_EVENT
    }
}
export const deleteEvent=(id)=>{
    return{
        type:DELETE_EVENT,
        payload:id
    }
}
export const deleteWeekEvent=(id)=>{
    return{
        type:DELETE_WEEK_EVENT,
        payload:id
    }
}