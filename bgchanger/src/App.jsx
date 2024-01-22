import { useState } from 'react'

import './App.css'

function App() {
      let defcolor='olive'
      const [color,setColor]=useState(defcolor)

  return (
    <>
    <div className="w-screen h-screen " style={{backgroundColor: color}} >
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 flex justify-between">
   
        <button className="text-white px-4 py-2 rounded" style={{backgroundColor:'red'}} onClick={()=>{
       
          
          setColor('red')
        }}>
            Red
        </button>

      
        <button className=" text-white px-4 py-2 rounded" style={{backgroundColor:'blue'}} onClick={()=>{
       
          
          setColor('blue')
        }}>
            Blue
        </button>
        <button className=" text-white px-4 py-2 rounded" style={{backgroundColor:'black'}} onClick={()=>{
       
          
          setColor('black')
        }}>
           Black
        </button>
        <button className=" text-black px-4 py-2 rounded" style={{backgroundColor:'yellow'}} onClick={()=>{
       
          
          setColor('yellow')
        }}>
           Yellow
        </button>
        <button className=" text-black px-4 py-2 rounded" style={{backgroundColor:'white'}} onClick={()=>{
       
          
          setColor('white')
        }}>
           White
        </button>

      
        <button className=" text-white px-4 py-2 rounded" style={{backgroundColor:'gray'}} onClick={()=>{
       
          
       setColor('gray')
     }}>
            Gray
        </button>
    </div>
        
        



    </div>
    </>
  )
}

export default App
