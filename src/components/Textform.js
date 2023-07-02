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

  let HandleChange=(event)=>{
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container">
     
<div className="mb-3">
    <h2>{props.heading}</h2>
  
    <textarea className="form-control" value={text} onChange={HandleChange} id="mytext" rows="8"></textarea>
</div>
<button className="btn btn-success mx-2" onClick={HandleUClick}>Convert into UpperCase</button>
<button className="btn btn-success mx-2" onClick={HandleLClick}>Convert into LowerCase</button>
<button className="btn btn-success mx-2" onClick={HandleClear}>Clear the Text</button>
    </div>
    <div className="container">
      <h2>Summary of your Text:</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters in the text</p>
    </div>
    <h2>Preview:</h2>
    <p>{text}</p>
    </>
  )
}
