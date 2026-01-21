import React, { useState } from 'react'

function LudoGames() {
    const [moves, setMoves] = useState({red:0,yellow:0,blue:0,green:0});
    const [arr, setArr] =useState(["No moves"]);
   
    let clickBlue =() =>{
        // setMoves((preMoves) =>{
        //    return {...preMoves, blue:preMoves.blue + 1};

        // });   
        //  arr.push("moves Add");
            setArr([...arr, "moves add"]);
            console.log(arr);
           
    }

    let clickRed =() =>{
        setMoves((preMoves) =>{
           return {...preMoves, red:preMoves.red + 1};
        });       
    }

    let clickYellow =() =>{
        setMoves((preMoves) =>{
           return {...preMoves, yellow:preMoves.yellow + 1};
        });       
    }

    let clickGreen =() =>{
        setMoves((preMoves) =>{
           return {...preMoves, green:preMoves.green + 1};
        });       
    }
  return (<>
    <p>LudoBenigs</p>
     <p>Arr = {arr}</p>
    <div>
        <p>blue Moves = {arr.value} </p>
       
        <button onClick={clickBlue} style={{background:"blue"}}>+1</button>
        <p>red Moves = {moves.red}</p>
        <button onClick={clickRed} style={{background:"red"}}>+1</button>
        <p>yellow Moves {moves.yellow}</p>
        <button onClick={clickYellow} style={{background:"yellow"}}>+1</button>
        <p>green Moves {moves.green}</p>
        <button onClick={clickGreen} style={{background:"green"}}>+1</button>
    </div>
    
    </>
  )
}

export default LudoGames;