import React from 'react';

const Favorites = ({ favorites, removeFavorite, setCity }) => {
  return (
    <div className="favorites">
      <h3>Favorite Cities</h3>
      <ul>
        {favorites.map((fav, index) => (
          <li key={index}>
            {fav}
            <button onClick={() => setCity(fav)}>Show Weather</button>
            <button onClick={() => removeFavorite(fav)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
