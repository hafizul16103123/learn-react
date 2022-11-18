const { createContext, useContext, useState } = require("react");
//create context using createContext
const CounterContext = createContext()
// create custom hook
export const useCounter =()=> useContext(CounterContext)

function CounterContextProvider(props) {
    const [counter, setCounter] = useState(0)
    function inc(){
        setCounter(counter +1)
    }
    function dec(){
        setCounter(counter -1)
    }

    const values ={counter,inc,dec}
    return (
        <CounterContext.Provider value={values}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider