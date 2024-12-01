import { useEffect, useState } from "react"

// function App(){
//   const [mystate , setMystate] = useState(0)
//   const clickHandler = ()=>{
//     setMystate(mystate+1)
//   }
//   return(
//     <>
//       <h1>state value : {mystate}</h1>
//       <button onClick={clickHandler}>click</button>
//     </>
//   )
// }

// ------------------------------------

// function App(){
//   const [mystate , setMystate] = useState(0)
//   const clickHandler = ()=>{
//     // setMystate((prevState)=>{
//     //   return prevState+1
//     // })
//     setMystate(prevState=>prevState+1)
//   }
//   return(
//     <>
//       <h1>state value : {mystate}</h1>
//       <button onClick={clickHandler}>click</button>
//     </>
//   )
// }

// ------------------------------------

// function App(){
//   const [mystate , setMystate] = useState(0)
//   const clickHandler = ()=>{
//     console.log(mystate)
//     setMystate(mystate+1)
//     setMystate(mystate+1)
//     setMystate(mystate+1)
//     console.log(mystate)
//   }

//   useEffect(()=>{
//     console.log(mystate)
//     console.log('render')
//   })
//   return(
//     <>
//       <h1>state value : {mystate}</h1>
//       <button onClick={clickHandler}>click</button>
//     </>
//   )
// }
// --------------------------------------------------

function App(){
  const [mystate , setMystate] = useState(0)
  const clickHandler = ()=>{
    console.log(mystate)
    setMystate(prevState =>prevState+1)
    setMystate(prevState =>prevState+1)
    setMystate(prevState =>prevState+1)
    console.log(mystate)
  }

  useEffect(()=>{
    console.log(mystate)
    console.log('render')
  })
  return(
    <>
      <h1>state value : {mystate}</h1>
      <button onClick={clickHandler}>click</button>
    </>
  )
}

export default App