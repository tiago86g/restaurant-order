import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';

export const Drink = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  const fetchRandomMeal = async () => {
    const res = await fetch('https://api.punkapi.com/v2/beers');
    res
      .json()
      .then((res) => setDrinks(res))
      .catch((err) => console.error(err));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  return (
    <>
      <ul>
        {isLoading === false ? (
          drinks.map((drink) => (
            <li key={drink.id}>
              <img src={drink.image_url} alt={drink.name}></img>
              <h2>{drink.tagline}</h2>
              <p>{`Description: ${drink.description}`}</p>
              <h3>{`${drink.abv}% abv`}</h3>
            </li>
          ))
        ) : (
          <Loading />
        )}
      </ul>
      <button>
        <Link to="Checkout">next</Link>
      </button>
    </>
  );
};
