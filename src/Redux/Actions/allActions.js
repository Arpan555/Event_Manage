import { ADD_EVENT, DELETE_EVENT, EDIT_EVENT, RESET_EVENT, 
    SET_EVENT,SHOW_EVENT} from ".";
export const addEvent=(data)=>{
    return{
        type:ADD_EVENT,
        payload:data
    }
}
export const showEvent=(data)=>{
    return{
        type:SHOW_EVENT,
        payload:data
    }
}
export const setEvent=(data)=>{
    return{
        type:SET_EVENT,
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
export const deleteEvent=(id)=>{
    return{
        type:DELETE_EVENT,
        payload:id
    }
}
