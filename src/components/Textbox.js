import React, { useState } from 'react'



export default function Textbox(props) {
    const handleUpClick = () => {
        console.log("clicked on uppercase " + text)
        let new_text = text.toUpperCase();
        setText(new_text)
    }
    const handleLoClick = () => {
        console.log("clicked on uppercase " + text)
        let new_text = text.toLowerCase();
        setText(new_text)
    }
    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }
    const confirm = () => {
        alert("Do you want to cleat text?")
        setText("");
    }
    const darkMode = () => {
        if (mystyle.color === "white") {
            setMystyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText("Enable Dark Mode")
        }
        else {
            setMystyle({
                color: "white",
                backgroundColor: "black"

            })
            setBtnText("Disable Dark Mode")
        }
    }

    const [text, setText] = useState("");
    const [mystyle, setMystyle] = useState({
        color: "black",
        backgroundColor: "white"
    });
    const [btnText,setBtnText]=useState("Enable Dark Mode")

    return (
        <div style={mystyle} >
            <h1>{props.title}</h1>
            <div className="mb-3" style={mystyle} >
                <textarea className="form-control " style={mystyle} value={text} onChange={handleOnChange} id="Box" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-4 ' style={mystyle} onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-4 ' style={mystyle} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-4 ' style={mystyle} onClick={confirm}>Clear Text  </button>
            <button className='btn btn-primary mx-4 ' style={mystyle} onClick={darkMode}>{btnText}</button>
            <div className="container my-4" >
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>Reading Time: {text.split(" ").length * 0.008} min </p>
            </div>
        </div>
    )
}
