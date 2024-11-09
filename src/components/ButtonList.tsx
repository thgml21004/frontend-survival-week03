import React from 'react';

type ButtonListProps = {
    setFilterMenu: (filter: string) => void;
    restaurants: Restaurant[];
}

export default function ButtonList({
  setFilterMenu, restaurants,
}: ButtonListProps) {
  const handleFilterMenuClick = (category: string) => {
    if (category === '') {
      setFilterMenu(restaurants);
    } else {
      const filtered = restaurants.filter((restaurant) => restaurant.category === category);
      setFilterMenu(filtered);
    }
  };
  return (
    <div>
      <button onClick={() => handleFilterMenuClick('')}>전체</button>
      <button onClick={() => handleFilterMenuClick('중식')}>중식</button>
      <button onClick={() => handleFilterMenuClick('한식')}>한식</button>
      <button onClick={() => handleFilterMenuClick('일식')}>일식</button>
    </div>
  );
}
