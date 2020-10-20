const initialState = {
  name: '',
  category: '',
  location: '',
  restaurants: [],
};

const addRestaurant = ({ state }) => {
  const {
    name, category, location, restaurants,
  } = state;

  return {
    name: '',
    category: '',
    location: '',
    restaurants: [...restaurants, { name, category, location }],
  };
};

const updateRestaurantName = ({ state, payload }) => ({
  ...state,
  name: payload.name,
});

const updateRestaurantCategory = ({ state, payload }) => ({
  ...state,
  category: payload.category,
});

const updateRestaurantLocation = ({ state, payload }) => ({
  ...state,
  location: payload.location,
});

const reducers = {
  addRestaurant,
  updateRestaurantName,
  updateRestaurantCategory,
  updateRestaurantLocation,
};

export default function reducer(state = initialState, { type, payload }) {
  if (reducers[type]) {
    return reducers[type]({ state, payload });
  }
  return state;
}