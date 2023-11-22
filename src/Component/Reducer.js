import Data from './Seat.json'
export const initialstate={
    arr:Data.bus,
    count:0,
    amount1:0,
    amount2:0
}

export const reducer=(state,action)=>{
        if(action.type==="updateArr"){
            return {...state,arr:action.payload}
        }
        if(action.type==="updatecount"){
            return {...state,count:action.payload}
        }
        if(action.type==="updateAmount"){
            return {...state,amount1:action.payload}
        }
        if(action.type==="updateAmount1"){
            return {...state,amount2:action.payload}
        }
}