import Nav from './components/Nav'
import Main from './components/Main'
import Projects from './components/Projects';
import Circle from './components/Circle';

function App() {
  return (
    <div className="App">
      <Circle />
      <div className="top">
        <Nav />
        <Main /> 
      </div>
      <Projects />
    </div>
  );
}

export default App;
