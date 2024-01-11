import React from "react";

const Resume = () => {
    const resumePdf = '../../assets/docs/dev-res.pdf';

    const downloadPdf = () => {
        window.open(resumePdf, '_blank');
    };

    return (
        <div className="resume">
            <h2>Resume</h2>
            <iframe title="Resume" src={resumePdf} width= "75%" height="600px"/>
            <button onClick={downloadPdf}>Download Resume</button>
        </div>
    );
};

export default Resume;