import Nav from './components/Nav'
import Main from './components/Main'
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <div className="top">
        <Nav />
        <Main /> 
      </div>
      <Projects />
    </div>
  );
}

export default App;
