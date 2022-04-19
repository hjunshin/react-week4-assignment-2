import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import RestaurantCreateContainer from './RestaurantCreateContainer';

jest.mock('react-redux');

test('RestaurantCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '마법',
      category: '이탈리안',
      address: '서울시',
    },
  }));

  const { queryByDisplayValue, queryByText, getByText } = render((
    <RestaurantCreateContainer />
  ));

  expect(queryByDisplayValue('마법')).not.toBeNull();
  expect(queryByDisplayValue('이탈리안')).not.toBeNull();
  expect(queryByDisplayValue('서울시')).not.toBeNull();
  expect(queryByText('등록')).not.toBeNull();

  fireEvent.change(queryByDisplayValue('서울시'), {
    target: { value: '서울시 강남구 역삼동' },
  });

  expect(dispatch).toBeCalledWith({
    type: 'changeRestaurantField',
    payload: {
      name: 'address',
      value: '서울시 강남구 역삼동',
    },
  });

  fireEvent.click(getByText(/등록/));

  expect(dispatch).toBeCalledWith({
    type: 'addRestaurant',
  });
});
