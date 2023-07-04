import React, { useState } from 'react'

export default function Textform(props) {

  let HandleUClick=()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
  }
  let HandleLClick=()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
  }
  let HandleClear=()=>{
    let newtext = '';
    setText(newtext);
  }
  let HandleCopy=()=>{
    var text = document.getElementById("mytext");
    text.select()
    navigator.clipboard.writeText(text.value);
    
  }
  let HandleExtraSpaces=()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
  }



  let HandleChange=(event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
            <h2>{props.heading}</h2>
            <textarea className="form-control" value={text} onChange={HandleChange} id="mytext" rows="8"style={{backgroundColor:props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={HandleUClick}>Convert into UpperCase</button>
        <button className="btn btn-success mx-2" onClick={HandleLClick}>Convert into LowerCase</button>
        <button className="btn btn-success mx-2" onClick={HandleClear}>Clear the Text</button>
        <button className="btn btn-success mx-2" onClick={HandleCopy}>Copy the Text</button>
        <button className="btn btn-success mx-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
    </div>


    <div className="container" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h2>Summary of your Text:</h2>
        <p>{text.split(" ").length-1} Words and {text.length} Characters in the text</p>
        <h2>  Preview:</h2>
        <p>{text}</p>
    </div>
    
    </>
  )
}
