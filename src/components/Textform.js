import React, { useState } from 'react'

export default function Textform(props) {

  let HandleUClick=()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Coverted to Upper Case","success");
  }
  let HandleLClick=()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Coverted to Lower Case","success");
  }
  let HandleClear=()=>{
    let newtext = '';
    setText(newtext);
    props.showAlert("Removed the  Whole Text","success");
  }
  let HandleCopy=()=>{
    var text = document.getElementById("mytext");
    text.select()
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied the  Whole Text","success");
    
  }
  let HandleExtraSpaces=()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Removed the Extra Spaces","success");
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
