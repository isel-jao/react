const data = [
  {
    id: 1,
    name: "John Doe",
    email: "JhonDoe@email.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "JaneDoe@email.com",
  },
  {
    id: 3,
    name: "Jack Doe",
    email: "JackDoe@emai.com",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.id ? action.payload : u
        ),
      };
    case "OPEN_MODAL":
      return {
        ...state,
        modal: { ...state.modal, isOpen: true, user: action.payload },
      };
    case "CLOSE_MODAL":
      return { ...state, modal: { ...state.modal, isOpen: false, user: null } };
    default:
      return state;
  }
};

export { data, reducer };
