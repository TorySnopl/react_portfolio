import { useState } from 'react';
import { Link } from 'react-scroll';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Portfolio from './Portfolio';


const Nav = ({ newPage }) => {
  const [ currentPage ] = useState('about'); 

  const changePage = (page) => {
   currentPage(page);
    newPage(page); 
  };

  return (
    <>
     <nav className="nav">
       
        <div className='links'>
          <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        activeClass="active"
        className="navLink"
         onClick={() => changePage(About)}
          >
          Home

        </Link>

		<Link
		to="portfolio"
		spy={true}
		smooth={true}
		duration={500}
		activeClass="active"
        className="navLink"
		onClick={() => changePage(Portfolio)}
		>
			Portfolio
		</Link>

		<Link
		to="resume"
		spy={true}
		smooth={true}
		duration={500}
		activeClass="active"
        className="navLink"
		onClick={() => changePage(Resume)}
        >
	
			Resume
		</Link>

		<Link
		to="contact"
		spy={true}
		smooth={true}
		duration={500}
		activeClass="active"
        className="navLink"
		onClick={() => changePage(Contact)}
		>
			Contact
		</Link>
	
    </div>
      </nav>
    </>
  );
};

export default Nav;