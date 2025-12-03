import { useDispatch,useSelector } from "react-redux"
import { increment,decrement } from "../features/counter/counterSlice"

function Counter () {
     
     const dispatch=useDispatch()
     
     const val=useSelector(state => state.value)

     const addValue = () => {
        dispatch(increment())
     }

     const subtractValue = () => {
        dispatch(decrement())
     }


    return (
       

        <>
            <div className="text-black font-bold text-2xl">Counter:{val}</div>
            <br/>
            <button onClick={addValue} className="bg-blue-500 text-white p-1 font-semibold rounded-lg">increment</button>
            <br/><br/>
            <button onClick={subtractValue} className="bg-orange-600 text-white p-1 font-semibold rounded-lg">decrement</button>
        </>
    )
}

export default Counter