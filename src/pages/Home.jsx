import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loading, ImageSlider } from '../components';
import { Container } from '../globalStyles';

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
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
        <ImageSlider meal={meal} fetchRandomMeal={fetchRandomMeal}/>
        <div>
          <button>
            <Link to="meal">next</Link>
          </button>
        </div>
        </>
      )}
    </Container>
  );
};
