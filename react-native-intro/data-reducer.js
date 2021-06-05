import { combineReducers } from 'redux';

const INITIAL_STATE = {
  items: [
    {
      id: 1,
      title: "Poznámka 1",
      desc: "Asdfg",
      photo: null
    },
    {
      id: 2,
      title: "Poznámka 2",
      desc: "Asdfg",
      photo: null
    },
    {
      id: 3,
      title: "Poznámka 3",
      desc: "Asdfg",
      photo: null
    }
  ],
  other: {
    nextItemId: 4
  },
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { items, other } = state;
      var newItem = action.payload;
      newItem.id = other.nextItemId;
      items.push(newItem);
      other.nextItemId = other.nextItemId + 1;
      return { items, other };
    default:
      return state
  }
};

export default combineReducers({
  data: dataReducer
});