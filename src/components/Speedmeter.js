import {useEffect, useState} from 'react'

const Speedmeter = () => {
    const [speed,setSpeed] = useState(20)
    const [counter,setCunter] = useState(0)

    useEffect(()=>{
        // get current updated value
        console.log(`speed updated to ${speed}`)
         // get previous value
         return(()=>{
            console.log(`speed from return ${speed}`)
        })
    },[speed])

    function clickHandle(){
        setSpeed(speed + 5)
    }
    useEffect(()=>{
        // will render when component mounted
        console.log("Speedmeter component is mounted")
        // will render when component un mounted
        return(()=>{
        console.log("Speedmeter component is un-mounted")

        })
    },[])
  return (
    <div>
        <h1>Speed is : {speed}</h1>
        <button onClick={clickHandle}>Speed by 5</button>
        <button onClick={()=>setCunter(counter+1)}>Counter {counter}</button>
    </div>
  )
}

export default Speedmeter
