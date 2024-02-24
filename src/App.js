
import './App.css';
import Header  from './components/Header';
import Movie from './components/Movie';
import Movies from './movie.json'
import { useState } from 'react';
function App() {

  const [num, setNum]= useState(1)

  function inc() {

    setNum(num + 1);
  }
  function dec() {

   setNum(num - 1);
}
  return(
    <div className="App">
     <Header/>
     <div className='main'>
     {
      Movies.map((element,index)=>{
      return(
      <Movie 
      key={index}
      Title={element.Title}
      Year={element.Year}
      img={element.Poster}
    
       />

      )

   
      })
     }
     

     </div>
     <div className='main_2'>
      <h1 className='heading_2'>{num}</h1>
      <div>
        <button className='btn' onClick={inc}>Increment</button>
        <button className='btn' onClick={dec}>Decrement</button>
      </div>
     </div>
    </div>
    
  );
}

export default App;
