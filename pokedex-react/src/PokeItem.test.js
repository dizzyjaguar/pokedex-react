import React from 'react';
import { render } from '@testing-library/react';
import PokeItem from './PokeItem.js';
import renderer from "react-test-renderer";

test('renders App.js correctly', () => {
  const tree = renderer
    .create(<PokeItem pokeItem={{pokemon: '', url_image: '', hp: '', type_1: '' }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
