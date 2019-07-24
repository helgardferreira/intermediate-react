import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement('div', { id: 'something-important' }, [
  //   React.createElement('h1', {}, 'Adopt Me!'),
  //   React.createElement(Pet, {
  //     name: 'Luna',
  //     animal: 'Dog',
  //     breed: 'Havanese',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Bart',
  //     animal: 'Dog',
  //     breed: 'Pitbull',
  //   }),
  //   React.createElement(Pet, {
  //     name: 'Doink',
  //     animal: 'Cat',
  //     breed: 'Mixed',
  //   }),
  // ]);

  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Bart" animal="Dog" breed="Pitbull" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
