import aiPic from '../../assets/images/ai_pic.jpeg';
import '../css/about.css';
import '../../../node_modules/picnic/picnic.min.css';

export default function About() {
    return (
        <div className='aboutPage'>
                <img src={aiPic} alt="AI generated pic of Tory" />
             <div>
                <div id= "aboutMe">
                    <h1 className="name">Tory Snopl - Full Stack Dev</h1>
                    <p className="aboutMeP1">
                    👋 Hi there! Im Tory, a junior full stack developer with a diverse background in customer service and emergency medical services. Im on a mission to merge my passion for problem-solving with my love for coding. Based in the beautiful city of Gladstone, Oregon, Im excited to embark on a new career in the tech industry.</p>

                    <p className='aboutMeP2'>🖥️ My journey into the world of software development began with a coding bootcamp, where I gained valuable skills and insights into web development, both on the front-end and back-end. While I may be a newcomer to the industry, Im eager to apply my newfound knowledge and dedication to real-world projects.</p>

                    <p className='aboutMeP3'>🚑 My experience in emergency medical services has instilled in me the ability to stay calm under pressure, think critically, and work effectively in high-stress environments. These skills are not only transferable but also invaluable in the fast-paced world of tech.</p>

                   <p className='aboutMeP4'> 💼 Im seeking opportunities to join a dynamic team, where I can learn and grow as a developer while contributing my unique perspective and skills. Im a quick learner, a creative problem-solver, and Im passionate about delivering innovative solutions.</p>

                    <p className='aboutMeP5'>🎸 Outside of work, you can often find me exploring new coding challenges, indulging in my love for music, spending quality time with friends, and immersing myself in all things nerd culture. With over a decade of marriage under my belt, I value the importance of teamwork, communication, and commitment.</p>

                    <p className='aboutMeP6'>Lets connect and explore how we can collaborate or chat about tech, music, or anything else that piques your interest!
                    </p>
                    
            
                </div>
            </div>

        </div>

    );
}