import React from "react";
import Card from "../components/Card";

const Favorites = ({ items, onAddToFavorites }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1> My Favorites</h1>
      </div>
      <div className="d-flex flex-wrap">
        {items.map((item, index) => (
          <Card
            key={index}
            imageUrl={item.imageUrl}
            favorited={true}
            onFavorite={onAddToFavorites}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
