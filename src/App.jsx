import './App.css';
import { Intro } from './components/intro/Intro';
import { About } from './components/about/About';
import { Productlist } from './components/productlist/Productlist';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <div>  
        <Intro/>
        <About/>
        <Productlist/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
