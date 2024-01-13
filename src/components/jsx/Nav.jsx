
import { Link } from 'react-scroll';
import '../css/nav.css';


const Nav = ({ onPageChange }) => {
	const changePage = (page) => {
    onPageChange(page); 
  };

  return (
    <>
     <nav className="nav">
       
        <div className='links'>
          <Link
        to="About"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
        className="navLink"
         onClick={() => changePage('About')}
          >
          Home

        </Link>

		<Link
		to="ProjectList"
		spy={true}
		smooth={true}
		duration={500}
		activeClass="active"
        className="navLink"
		onClick={() => changePage('ProjectList')}
		>
			Portfolio
		</Link>

		<Link
		to="Resume"
		spy={true}
		smooth={true}
		duration={500}
		activeClass="active"
        className="navLink"
		onClick={() => changePage('Resume')}
        >
	
			Resume
		</Link>

		<Link
		to="Contact"
		spy={true}
		smooth={true}
		duration={500}
		activeClass="active"
        className="navLink"
		onClick={() => changePage('Contact')}
		>
			Contact
		</Link>
	
    </div>
      </nav>
    </>
  );
};

export default Nav;