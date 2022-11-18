import './App.css';
import React from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import MyCounter from './components/MyCounter';
import CounterContextProvider from './contexts/CounterContext';
// import MovieList from './components/MovieList';
// import Speedmeter from './components/Speedmeter';
// import DisplayName from './components/DisplayName';
const App = () => {
  //   const movies =[
  //     {id:1,name:"movie-1"},
  //     {id:2,name:"movie-2"}
  // ]
  // function loggerFunction(e){
  //   console.log(e.target.innerHTML)
  // }
  // const [isOnline,setIsOnline]= useState(true)

  return (
    <CounterContextProvider>
      <div>
        {/* <MovieList movies={movies} name="Hamdan" loggerFunction={loggerFunction}/> */}
        {/* {isOnline?<Speedmeter/>: <DisplayName/>} */}

        {/* <button onClick={()=>{setIsOnline(!isOnline)}}>Go {isOnline?"Offline":"Online"}</button> */}
        <MyCounter />
        <ComponentA />
        <ComponentB />
      </div>
    </CounterContextProvider >
  )
}
export default App;
