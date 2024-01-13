
import '../css/resume.css';

const Resume = () => {
    const resumePdf = '../../src/assets/docs/dev-res.pdf';

    const downloadPdf = () => {
        window.open(resumePdf, '_blank');
    };

    return (
        <div className="resume">
            <h2>Resume</h2>
            <iframe title="Resume" src={resumePdf} width= "100%" height="600px"/>
            <button onClick={downloadPdf}>Download Resume</button>
        </div>
    );
};

export default Resume;