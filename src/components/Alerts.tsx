import React, { useState } from 'react';

interface PropTitle {
    alrtmain: string;
    alrtp: string;
}

const Alerts: React.FC<PropTitle> = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null; // If not visible, return null to remove the component from the DOM
    }

    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alrtmain}</strong>
            <p>{props.alrtp}</p>
            <button type="button" className="close" onClick={handleClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default Alerts;