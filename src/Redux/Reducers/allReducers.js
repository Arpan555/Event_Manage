import { ADD_EVENT, ADD_WEEK_EVENT, DELETE_EVENT, EDIT_EVENT, RESET_EVENT,
     SET_EVENT, SHOW_EVENT, SHOW_WEEK_EVENT,DELETE_WEEK_EVENT, SET_WEEK_EVENT, EDIT_WEEK_EVENT, RESET_WEEK_EVENT } from "../Actions/index";
const inititalState={
    events:[],
    weekEvents:[],
    showDate:"",
    showWeekNo:"",
    setEvent:{},
    setWeekEvent:{}
}
function reducer(state=inititalState,action){
    switch(action.type){
        case ADD_EVENT:
            return{
                ...state,
                events:[...state.events,action.payload]
            }
        case ADD_WEEK_EVENT:
            return{
                ...state,
                weekEvents:[...state.weekEvents,action.payload]
            }
        case SHOW_EVENT:
            return{
                ...state,
                showDate:action.payload
            }
        case SHOW_WEEK_EVENT:
            console.log(action.payload)
            return{
                ...state,
                showWeekNo:action.payload
            }
        case SET_EVENT:
            return{
                ...state,
                setEvent:{...state.setEvent,...action.payload}
            }
        case SET_WEEK_EVENT:
            return{
                ...state,
                setWeekEvent:{...state.setWeekEvent,...action.payload}
            }
        case EDIT_EVENT:
            return{
                ...state,
                events: state.events.map(data=>{
                    if(data.id === action.payload.id) return {...data,...action.payload}
                    return data
                })
            }
        case RESET_EVENT:
            return{
                ...state,
                setEvent:[]
            }
        case EDIT_WEEK_EVENT:
            return{
                ...state,
                weekEvents:state.weekEvents.map(data=>{
                    if(data.id === action.payload.id) return {...data,...action.payload}
                    return data
                })
            }
        case RESET_WEEK_EVENT:
            return{
                ...state,
                setWeekEvent:[]
            }
        case DELETE_EVENT:
            return{
                ...state,
                events: state.events.filter( data => data.id !== action.payload)
            }
        case DELETE_WEEK_EVENT:
            return{
                ...state,
                weekEvents:state.weekEvents.filter(d=>d.id !== action.payload)
            }
        default:
            return state
    }
}
export default reducer