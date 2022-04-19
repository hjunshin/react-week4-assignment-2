import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

test('Restaurants', () => {
  const { queryByText } = render((
    <Restaurants restaurants={restaurants} />
  ));

  expect(queryByText(/김밥제국/)).not.toBeNull();
});
