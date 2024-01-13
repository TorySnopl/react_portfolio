import linkedImg from '../../assets/images/linkedIn.png';
import githubImg from '../../assets/images/github.png';
import edabitImg from '../../assets/images/edabit.png';

export default function Footer(){
    return (
        <div className="footer">
            <h3>Heres where you can find me on the internet:</h3>
             <ul className="links">
                <li><a href="https://github.com/TorySnopl"><img src={githubImg} alt="github link" /></a></li>

                <li><a href="https://www.linkedin.com/in/tory-snopl-70b00a283/"><img src={linkedImg} alt="linkedin link" /></a></li>

                <li><a href="https://edabit.com/user/HzofrdY8AAvmuke2F"><img src={edabitImg} alt="edabit link" /></a></li>
             </ul>
        </div>
    );
};

