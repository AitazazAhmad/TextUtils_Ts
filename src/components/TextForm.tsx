import React, { useState } from 'react';

interface PropsHead {
    heading: string;
    mode: string; // Add mode prop
    showAlert: (message: string, type: string) => void; // Add showAlert prop
}

const TextForm: React.FC<PropsHead> = (props) => {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase!', 'success'); // Use showAlert from props
    };

    const handleDownClick = () => {
        let down = text.toLowerCase();
        setText(down);
        props.showAlert('Converted to Lowercase!', 'success'); // Use showAlert from props
    };

    const handleClearClick = () => {
        setText('');
        props.showAlert('Text Cleared!', 'warning'); // Use showAlert from props
    };

    const handleExtraSpaces = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert('Removed Extra Spaces!', 'success'); // Use showAlert from props
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied to Clipboard!', 'info'); // Use showAlert from props
    };

    return (
        <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="mybox"
                    rows={10}
                    value={text}
                    onChange={handleOnChange}
                    style={{
                        backgroundColor: props.mode === 'dark' ? 'rgb(32 47 51)' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black',
                    }}
                ></textarea>
            </div>
            <button className="primary my-4 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='primary my-2 mx-3' onClick={handleDownClick}>Convert to Lowercase</button>
            <button className='primary my-2 mx-3' onClick={handleClearClick}>Clear Text</button>
            <button className='primary my-2 mx-3' onClick={handleCopy}>Copy Text</button>
            <button className='primary my-2 mx-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words {text.length} Characters</p>
                <p>{0.008 * text.split("").length} Minutes for reading this</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default TextForm;