 
import './App.css';
import BookSlider from './components/book-slider/BookSlider';
import Header from './components/header/Header';
import Services from './components/services/Services';
import Slider from './components/slider/Slider';
import {books} from '../src/data/books'
import HeadingTitle from './components/heading-title/HeadingTitle';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Services/>
      <HeadingTitle title={"MostGift"}/>
      <BookSlider data={books}/>
      <HeadingTitle title={"PoPuler"}/>
      <BookSlider data={books}/>
      <Footer/>


 

     
    </div>
  );
}

export default App;
