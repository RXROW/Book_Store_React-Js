 
import './App.css';
import BookSlider from './components/book-slider/BookSlider';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Slider from './components/slider/Slider';
import {books} from '../src/data/books'
function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Services/>
      <BookSlider data={books}/>
 

     
    </div>
  );
}

export default App;
