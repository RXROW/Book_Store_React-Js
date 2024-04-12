import React from 'react';
import Services from '../../components/services/Services';
import Slider from '../../components/slider/Slider';
import {books} from '../../data/books'
import HeadingTitle from '../../components/heading-title/HeadingTitle';
import BookSlider from '../../components/book-slider/BookSlider';

const HomePage = () => {
  return (
    <div className='home'>
      <Slider/>
      <Services/>
      <HeadingTitle title={"MostGift"}/>
      <BookSlider data={books}/>
      <HeadingTitle title={"PoPuler"}/>
      <BookSlider data={books}/>
    </div>
  );
}

export default HomePage;
