import { useState } from 'react'
import './App.css'
import About from './components/jsx/About';

function App() {
  const [currentPage, setCurrentPage] = useState(About);

  const changePage = (pageName) => {setCurrentPage(pageName)};

}

export default App
