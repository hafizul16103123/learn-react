import {useEffect, useState} from 'react'

const Speedmeter = () => {
    const [speed,setSpeed] = useState(20)
    const [counter,setCunter] = useState(0)

    useEffect(()=>{
        console.log(`speed updated to ${speed}`)
    },[speed])

    function clickHandle(){
        setSpeed(speed + 5)
    }
    useEffect(()=>{
        console.log("Speedmeter component is mounted")
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
