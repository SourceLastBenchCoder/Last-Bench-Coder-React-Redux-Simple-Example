const initialState = {
  isLoggedIn: false,
  userName: ""
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Login":
      return {
        isLoggedIn: true,
        userName: action.userName
      };

    case "Logout":
      return {
        isLoggedIn: false,
        userName: ""
      };

      dafault: return state;
  }
};

export default RootReducer;
