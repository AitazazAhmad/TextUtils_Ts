import React, { useState } from 'react';


interface propshead {
    heading: string;
}
const TextForm: React.FC<propshead> = (props) => {

    const handleupclick = () => {
        console.log(text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handledownclick = () => {
        // alert("The text is converted to the lower case successfully!")
        let down = text.toLowerCase();
        setText(down);
    }
    const handleclearclick = () => {
        console.log("The clear function is clicked");
        let clear = '';
        setText(clear);
    }

    const handleonchange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("New text here")
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows={10} value={text} onChange={handleonchange}></textarea>
            </div>
            <button className="primary my-4 mx-3" onClick={handleupclick}>Convert to Uppercase</button>
            {/* <br /> */}
            <button className='primary my-2 mx-3' onClick={handledownclick}>Convert to lower case</button>
            <button className='primary my-2 mx-3' onClick={handleclearclick}>Reset</button>
            <div className="container my-3">
                <p>{text.split(" ").length} Words {text.length} Characters</p>
                <p>{0.008 * text.split("").length}Minutes for reading to this</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default TextForm;

