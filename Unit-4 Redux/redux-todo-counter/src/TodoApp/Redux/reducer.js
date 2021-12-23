import { actionConstants } from "./action";

const initState = {
  todos: [
    {
      id: 1,
      status: false,
      title: "Milk"
    }
  ]
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionConstants.ADD_TODO: {
      // console.log(action)
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case actionConstants.TOGGLE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
      };
    }
    case actionConstants.REMOVE_TODO_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action?.payload?.id)
      };
    }

    default:
      return state;
  }
};
