import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';
import NavBar from './NavBar';

const App = () => {
  const themeHook = useState('palevioletred');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));

/*
  const App = () => {
    return React.createElement('div', { id: 'something-important' }, [
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(Pet, {
        name: 'Luna',
        animal: 'Dog',
        breed: 'Havanese',
      }),
      React.createElement(Pet, {
        name: 'Bart',
        animal: 'Dog',
        breed: 'Pitbull',
      }),
      React.createElement(Pet, {
        name: 'Doink',
        animal: 'Cat',
        breed: 'Mixed',
      }),
    ]);
  };
*/
