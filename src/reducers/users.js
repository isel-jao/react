/* eslint-disable */
const usersReducer = (
  state = [
    {
      id: 1,
      name: "John Doe",
      email: "Jhon@email.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "JaneDoe",
    },
  ],
  action
) => {
  switch (action.type) {
    case "ADD_USER": {
      const { name, email } = action.payload;
      return [...state, { name, email, id: new Date().getTime() }];
    }
    case "UPDATE_USER": {
      const { id, name, email } = action.payload;
      const user = state.find((u) => u.id == id);
      if (name) user.name = name;
      if (email) user.email = email;
    }
    case "DELETE_USER": {
      const id = action.payload;
      return state.filter((u) => u.id != id);
    }
    default:
      return state;
  }
};

export default usersReducer;
