const initailRestaurant = {
  name: '',
  category: '',
  address: '',
};

const initialState = {
  newId: 100,
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  if (type === 'setRestaurants') {
    const { restaurants } = payload;
    return {
      ...state,
      restaurants,
    };
  }

  if (type === 'changeRestaurantField') {
    const { name, value } = payload;
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  }

  if (type === 'addRestaurant') {
    const { newId, restaurants, restaurant } = state;

    return {
      ...state,
      newId: newId + 1,
      restaurants: [...restaurants, { ...restaurant, id: newId }],
      restaurant: initailRestaurant,
    };
  }

  return state;
}
