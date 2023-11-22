import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Component/Nav/Navbar.js'
import { globalstate } from './Component/Context.js'
import { useReducer } from 'react'
import { initialstate,reducer } from './Component/Reducer.js'
const Routing=()=>{
    let [state,dispatch]=useReducer(reducer,initialstate)
    return(
        <globalstate.Provider value={{state,dispatch}}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar/>} />
            </Routes>
        </BrowserRouter>
        </globalstate.Provider>
        
        
    )
}
export default Routing