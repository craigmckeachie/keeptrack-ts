import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import renderer from 'react-test-renderer';

describe('<HomePage />', () => {
  test('renders home heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading')).toHaveTextContent('Home');
  });

  test('snapshot', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
