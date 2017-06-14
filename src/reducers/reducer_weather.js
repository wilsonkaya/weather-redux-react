import FETCH_WEATHER from '../actions/index'

export default function(state=[], action){
  switch(action.type){
    case FETCH_WEATHER:
    //except manipulating the state we are returning a new array
    return [action.payload.data, ... state]

  }
  return state
}
