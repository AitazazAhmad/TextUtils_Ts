import React from 'react';

// Define an interface for the props
interface AboutProps {
    mode: string; // Expecting a mode prop of type string
}

const About: React.FC<AboutProps> = ({ mode }) => {
    // Define a style based on the mode prop
    const myStyle = {
        backgroundColor: mode === 'dark' ? 'rgb(32, 47, 51)' : 'white',
        color: mode === 'dark' ? 'white' : 'black',
    };

    return (
        <div className="container my-5" style={myStyle}>
            <h1>About</h1>
            <div style={myStyle}>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                                Analize your text
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Count the total number of words in the input text.
                                    Display the word count dynamically as the user types.
                                    Count the total number of characters, including spaces and punctuation.
                                    Provide a separate count for characters excluding spaces.
                                    Calculate a readability score to assess how easy the text is to read.
                                    Provide insights based on factors like sentence length and word complexity.
                                    Provide a live preview of the text as users make changes.
                                    Allow users to see how their text looks in real-time.
                                    Provide a dark mode option for comfortable reading and writing in low-light environments.
                                    Enhance user experience by allowing customization of the interface.
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                                Free to use
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                                Browser Compatable
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;