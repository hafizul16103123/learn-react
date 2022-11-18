import './App.css';
import React, { useState } from 'react';
// import MovieList from './components/MovieList';
// import Speedmeter from './components/Speedmeter';
// import DisplayName from './components/DisplayName';
const App =()=>{
//   const movies =[
//     {id:1,name:"movie-1"},
//     {id:2,name:"movie-2"}
// ]
// function loggerFunction(e){
//   console.log(e.target.innerHTML)
// }
// const [isOnline,setIsOnline]= useState(true)
const [name,setName]= useState('')
const [isChecked,setIsChecked]= useState(false)
const [favLang,setFavLang]= useState()
function handleSubmit(e){
  e.preventDefault()
  console.log({name,isChecked,favLang})
}
  return(
    <div>
       {/* <MovieList movies={movies} name="Hamdan" loggerFunction={loggerFunction}/> */}
       {/* {isOnline?<Speedmeter/>: <DisplayName/>} */}
       
       {/* <button onClick={()=>{setIsOnline(!isOnline)}}>Go {isOnline?"Offline":"Online"}</button> */}
      <form onSubmit={handleSubmit}>
        <label >Name:</label>
        <input type='text'  value={name} onChange={(e)=>{setName(e.target.value)}}/>
       <br></br>
       <br></br>

       <label>Online :</label>
        <input type='checkbox' checked={isChecked} onChange={(e)=>{setIsChecked(e.target.checked)}}></input>
        <br></br>
        <br></br>

        <label>Fav Lang :</label>
        <select value={favLang} onChange={(e)=>{setFavLang(e.target.value)}}>
          <option value='JS'>JS</option>
          <option value='TS'>TS</option>
        </select>
        <br></br>
        <br></br>
        <input type='submit' value="Submit Form"/>
      </form>
    </div>
  )
}
export default App;
