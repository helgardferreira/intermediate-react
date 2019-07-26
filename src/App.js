import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams />
      </div>
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
