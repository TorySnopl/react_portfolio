import { useState } from 'react'
import './App.css'
import About from './components/jsx/About';
import ContactUs from './components/jsx/Contact';
import Footer from './components/jsx/Footer';
import Nav from './components/jsx/Nav';
import ProjectList from './components/jsx/Portfolio';
import Resume from './components/jsx/Resume';


function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const changePage = (pageName) => {setCurrentPage(pageName)};


const MySite = () => {
  switch (currentPage) {
  case 'About':
    return<About />;
    
  case 'Contact':
    return <ContactUs />;
    
  case 'Footer':
    return <Footer />;
    
  case 'Nav':
    return <Nav onPageChange={changePage} />;
    
  case 'ProjectList':
    return <ProjectList />;
    
  case 'Resume':
    return <Resume />;
    
  case 'Home':
  default:
    return <About />;
}
}

return (
  <>
    <Nav onPageChange={changePage}/>
    {MySite()}
    <Footer/>
  </>
);

}

export default App
