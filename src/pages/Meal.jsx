import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';

export const Meal = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState('');

  const fetchRandomMeal = async () => {
    const res = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php',
    );
    res
      .json()
      .then((res) => setMeal(res.meals[0]))
      .catch((err) => console.error(err));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div>
            <img src={meal.strMealThumb} alt={meal.strMeal}></img>
            <h2>{`Meal: ${meal.strMeal}`}</h2>
            <p>{`Type: ${meal.strCategory}`}</p>
            <p>{`Origin: ${meal.strArea}`}</p>
            <p>{`Tags: ${meal.strTags}`}</p>
          </div>
          <button onClick={fetchRandomMeal}>new meal</button>
          <button>
            <Link to="drink">next</Link>
          </button>
        </div>
      )}
    </div>
  );
};
