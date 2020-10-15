import reducer from './reducer';

import actions, { ADD_RESTAURANT, CHANGE_RESTAURANT_INPUT } from './actions';

describe('reducer', () => {
  describe(ADD_RESTAURANT, () => {
    it('add restaurant to the list', () => {
      // Given
      const previousState = { restaurants: [] };
      const action = actions.addRestaurant('이름 | 분류 | 주소');

      // When
      const state = reducer(previousState, action);

      // Then
      expect(state).toMatchObject({ restaurants: ['이름 | 분류 | 주소'] });
    });
  });

  describe(CHANGE_RESTAURANT_INPUT.NAME, () => {
    it('changes restaurant name', () => {
      // Given
      const previousState = { name: '' };
      const action = actions.changeRestaurantInput('name', '마포설렁탕');

      // When
      const state = reducer(previousState, action);

      // Then
      expect(state).toMatchObject({ name: '마포설렁탕' });
    });
  });
});
