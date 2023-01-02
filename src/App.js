import './App.css';
import Example   from './components/Menu';
 import Navbar from './components/Navbar';
 import Slider from './components/Slider';
 



 
function App() {
  return (
    <>
        <Navbar />
          <Example/>
        <Slider/>
        <h1 className='text-center text-3xl '>hello</h1>
        
      </>
  );
}

export default App;
