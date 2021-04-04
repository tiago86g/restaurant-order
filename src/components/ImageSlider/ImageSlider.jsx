import React from 'react';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib';
import {Image, SliderNav, SliderArrow, SliderWrapper} from './ImageSlider.elements'

const ImageSlider = ({ meal, fetchRandomMeal }) => {
  return (
    <>
    <IconContext.Provider value={{ color: "white" }}>
      <SliderWrapper>
      <Image src={meal.strMealThumb} alt={meal.strMeal}></Image>
      <SliderNav>
        <SliderArrow onClick={fetchRandomMeal}><AiFillCaretLeft/></SliderArrow>
        <SliderArrow onClick={fetchRandomMeal}><AiFillCaretRight/></SliderArrow>
      </SliderNav>
      </SliderWrapper>
      <p>{`Meal: ${meal.strMeal}`}</p>
      <form>
        <input
          type="email"
          name="note"
          autoComplete="off"
          required
          placeholder="insert your email"
        />
        <label>use your e-mail to find your order</label>
        <button>search</button>
      </form>
      </IconContext.Provider>
    </>
  );
};

export default ImageSlider;
