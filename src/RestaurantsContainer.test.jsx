import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('Restaurants', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { queryByText } = render((
    <RestaurantsContainer />
  ));

  expect(queryByText(/김밥제국/)).not.toBeNull();
});
