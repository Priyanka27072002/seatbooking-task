import React from "react";
import { globalstate } from '../Context.js'
import { useContext } from "react";
import { FaStar } from 'react-icons/fa'
import './Busbooking.css'
const Busbooking = () => {
    let { state, dispatch } = useContext(globalstate)
    console.log(state.arr); 
    let viewseat = (id) => {
        let x = state.arr.map((e) => {
            return e.id === id ? e.dis==="none"?{ ...e, dis: e.dis = "block" } : { ...e, dis: e.dis = "none" }:{ ...e, dis: e.dis = "none" }
        })
        dispatch({ type: "updateArr", payload: x })
    }

    let selected = (busid, id) => {
        // console.log(state.arr)
        state.arr.map((v) => {
            return v.id === busid ? ({

                ...v, seat: (v.seat.map((val) => {
                    if (val.id === id) {
                        if (val.isselected === false){
                            v.id===1?dispatch({type:"updateAmount",payload:state.amount1=0?state.amount1:state.amount1+100}):
                            dispatch({type:"updateAmount1",payload:state.amount2=0?state.amount2:state.amount2+150})
                            dispatch({ type: "updatecount", payload: state.count > 6 ? state.count : state.count + 1 })
                            return { ...val, isselected:val.isselected=true }

                        }
                        else {
                            v.id===1?dispatch({type:"updateAmount",payload:state.amount1-100}):
                            dispatch({type:"updateAmount1",payload:state.amount2-150})
                            dispatch({ type:"updatecount", payload: state.count - 1 })
                            return { ...val,isselected:val.isselected=false }
                        }
                    }
                    else {
                        return val
                    }
                }))
            }) : v
            

        })
        console.log(state.arr);

    }
    let booked = () => {
        if (state.count >=6) {
            alert("can't book more than 6 seats")
        }

    }
    
    if (state.count >6) {
        alert("can't book more than 6 seats")
    }
    let notavailable=()=>{
        alert("sorry! this seat is not available")
    }
    let proceed = (busid) => {

        if (state.count > 0) {
            alert("your seats are booked suceesfully")
        }
        else {
            alert("sorry you did't book a seat")
        }
       let n= state.arr.map((e)=>{
            return e.id===busid?{...e ,seat: e.seat.map((val) => {
                        return  val.isselected === false?val:{...val,isselected:val.isselected=false,isbooked:val.isbooked=true}
        })
            
        }:e
    })
    dispatch({ type:"updateArr", payload: n })
    dispatch({ type: "updatecount", payload:0})
    dispatch({type:"updateAmount",payload:0})
    dispatch({type:"updateAmount1",payload:0})
    }
console.log(state.arr)


    console.log(state.count);
    return (
        <div>
            {
                state.arr.map((e, i) => {
                    let view = { display: e.dis }
                    return (
                        <div key={i} className="container">
                            <div className="bus-info">
                                <div className="bus-row">
                                    <div>
                                        <h3>{e.name}</h3>
                                        <p>{e.location}</p>
                                    </div>
                                    <div>
                                        <h3>{e.minute}</h3>
                                        <p>{e.location2}</p>
                                    </div>
                                    <div>
                                        <p className="bus-rating"><FaStar />  {e.rating}</p>
                                    </div>
                                    <div className="bus-inr">
                                        <p>INR</p> <h3> {e.inr}</h3>
                                    </div>
                                </div>

                                <div className="bus-btn">
                                    
                                    <button onClick={() => viewseat(e.id)}>VIEW SEATS</button>

                                    <div  style={view}>
                                        <div className="seat">
                                        <div className="seat-row">

                                            {e.seat.map((v, i) => {
                                                return (
                                                    state.count < 6 ?
                                                        v.isselected === false ?
                                                            v.isbooked === false ?
                                                                <div className="seat-col" key={i} >
                                                                    <div className="seat-card" onClick={() => selected(e.id, v.id)}>{v.space}</div>
                                                                </div> :
                                                                <div className="seat-col" key={i}>
                                                                    <div className="seat-card" onClick={notavailable}style={{ backgroundColor: 'gray' }}>{v.space}</div>
                                                                </div> :
                                                            <div className="seat-col" onClick={() => selected(e.id, v.id)}>
                                                                <div className="seat-card" style={{ backgroundColor: '#d84f57' }}>{v.space}</div>
                                                            </div> :

                                                        v.isselected === false ?
                                                            v.isbooked === false ?
                                                                <div className="seat-col" key={i} >
                                                                    <div className="seat-card" onClick={booked}>{v.space}</div>
                                                                </div> :
                                                                <div className="seat-col" key={i}>
                                                                    <div className="seat-card" onClick={notavailable}  style={{ backgroundColor: 'gray'}}>{v.space}</div>
                                                                </div> :
                                                            <div className="seat-col" key={i} onClick={() => selected(e.id, v.id)}>
                                                                <div className="seat-card" style={{ backgroundColor: '#d84f57' }}>{v.space}</div>
                                                            </div>
                                                )

                                            })}
                                            
                                        
                                        </div>
                                        <div className="seat-amount">
                                            <p>Amount</p>
                                            {
                                                e.id==1?<p>&#8377; {state.amount1}</p>:<p>&#8377; {state.amount2}</p>
                                            }
                                            
                                        </div>
                                    </div>
                                        <div className="seat-btn">

                                            <button onClick={() => proceed(e.id)}>Proceed</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Busbooking