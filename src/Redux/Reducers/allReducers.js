import { ADD_EVENT, DELETE_EVENT, EDIT_EVENT, RESET_EVENT,
     SET_EVENT, SHOW_EVENT} from "../Actions/index";
const inititalState={
    events:[],
    showData:"",
    setEvent:{},
}
function reducer(state=inititalState,action){
    switch(action.type){
        case ADD_EVENT:
            return{
                ...state,
                events:[...state.events,action.payload]
            }
        case SHOW_EVENT:
            return{
                ...state,
                showData:action.payload
            }
        case SET_EVENT:
            return{
                ...state,
                setEvent:{...state.setEvent,...action.payload}
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
        case DELETE_EVENT:
            return{
                ...state,
                events: state.events.filter( data => data.id !== action.payload)
            }
        default:
            return state
    }
}
export default reducer