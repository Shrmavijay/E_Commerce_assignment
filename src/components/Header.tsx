import React from 'react';

interface HeaderProps {
  categories: string[];
  brands: string[];
  stores: string[];
}

const Header: React.FC<HeaderProps> = ({ categories, brands, stores }) => {
  return (
    <header>
      <nav>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
        <ul>
          {brands.map((brand, index) => (
            <li key={index}>{brand}</li>
          ))}
        </ul>
        <ul>
          {stores.map((store, index) => (
            <li key={index}>{store}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;