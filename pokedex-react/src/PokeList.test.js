import React from 'react';
import { render } from '@testing-library/react';
import PokeList from './PokeList.js';
import renderer from "react-test-renderer";

test('renders App.js correctly', () => {
  const tree = renderer
    .create(<PokeList pokedex={[]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
