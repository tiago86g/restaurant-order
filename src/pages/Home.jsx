import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <img src={meal.strMealThumb} alt={meal.strMeal}></img>
          <p>{`Meal: ${meal.strMeal}`}</p>
          <button onClick={fetchRandomMeal}>next meal</button>
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
          <button>
            <Link to="meal">next</Link>
          </button>
        </div>
      )}
    </div>
  );
};
