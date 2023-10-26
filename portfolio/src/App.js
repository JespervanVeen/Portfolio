import { useRef } from 'react';
import Nav from './components/Nav'
import Main from './components/Main'
import Projects from './components/Projects';
import Circle from './components/Circle';
import Experience from './components/Experience';

function App() {
  const target = useRef(null);
  const expTarget = useRef(null);

  const scrollTo = () => {
    target.current.scrollIntoView({behavior: 'smooth'})
  }

  const scrollToExp = () => {
    expTarget.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div className="App">
      <Circle />
      <div className="top">
        <Nav scrollTo={scrollTo} scrollToExp={scrollToExp}/>
        <Main scrollTo={scrollTo}/> 
      </div>
      <Projects ref={target}/>
      <Experience ref={expTarget}/>
    </div>
  );
}

export default App;
