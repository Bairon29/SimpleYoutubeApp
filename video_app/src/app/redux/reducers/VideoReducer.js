import { 
    GET_VIDEOS, INITIALSTATE } from '../actionTypes/Types';


export default function(state = INITIALSTATE, action){
    switch(action.type){
        case GET_VIDEOS:
            return {
                ...state,
                // messages_highlighted: [...action.messages_highlighted],
                // use_highlighted: action.use_highlighted,
                // word: action.word
            }
        default:
            return state;
    }
}