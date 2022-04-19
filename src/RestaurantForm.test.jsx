import { fireEvent, render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

jest.mock('react-redux');

test('Restaurants', () => {
  const restaurant = {
    name: '마법사주방',
    category: '이탈리안',
    address: '서울시 강남구',
  };

  const handleClick = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const { queryByDisplayValue, queryByText, getByText } = render((
    <RestaurantForm
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(queryByDisplayValue('마법사주방')).not.toBeNull();
  expect(queryByDisplayValue('이탈리안')).not.toBeNull();
  expect(queryByDisplayValue('서울시 강남구')).not.toBeNull();
  expect(queryByText(/등록/)).not.toBeNull();

  fireEvent.change(queryByDisplayValue('서울시 강남구'), {
    target: { value: '서울시 강남구 역삼동' },
  });

  expect(handleChange).toBeCalledWith({
    name: 'address',
    value: '서울시 강남구 역삼동',
  });

  fireEvent.click(getByText(/등록/));

  expect(handleClick).toBeCalled();
});
