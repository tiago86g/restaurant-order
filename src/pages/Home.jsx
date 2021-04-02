import React, { useEffect, useState } from 'react';
import { Loading } from '../components';

export const Home = () => {
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
    <div>{isLoading ? <Loading /> : <p>{`Meal: ${meal.strMeal}`}</p>}</div>
  );
};
